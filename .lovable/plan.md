

## Problem

The staggered slide-up animations fire immediately on page load — before the showcase section is even visible on screen. By the time the user scrolls down to see the cards, the animation has already finished. The `opacity: 0` start state also means the cards are briefly invisible, then snap to visible without any visible transition.

## Solution

Use the **Intersection Observer API** to trigger animations only when the showcase cards scroll into view. This requires:

### 1. Create a custom hook: `src/hooks/use-in-view.tsx`
A small React hook that wraps `IntersectionObserver` and returns a ref + boolean `inView` state. When the observed element enters the viewport (with a small threshold), it sets `inView = true` once (no re-triggering).

### 2. Create a wrapper component: `src/components/AnimateOnScroll.tsx`
A reusable component that:
- Uses the `useInView` hook
- Accepts `className` and `delay` props
- Starts with `opacity-0 translate-y-5` styles
- When `inView` becomes true, transitions to `opacity-100 translate-y-0` with configurable delay
- Uses CSS transitions (not keyframe animations) for reliable control

### 3. Update `src/pages/Index.tsx` (showcase grid, ~lines 78-84)
Replace the current `animate-slide-up stagger-N` wrapper divs with the new `AnimateOnScroll` component:

```tsx
{showcaseProjects.map((project, index) => (
  <AnimateOnScroll key={project.title} delay={index * 100}>
    <ShowcaseCard {...project} />
  </AnimateOnScroll>
))}
```

Each card gets a 100ms incremental delay (0ms, 100ms, 200ms, ..., 500ms) creating a visible stagger as the user scrolls down to the section.

### No changes needed to CSS or Tailwind config
All transitions use built-in Tailwind utility classes (`opacity-0`, `translate-y-5`, `transition-all`, `duration-500`).

