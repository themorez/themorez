

## Plan: Add Staggered Entrance Animation to Showcase Cards

Apply the existing `animate-slide-up` and stagger classes to the 6 showcase cards, matching the pattern already used for blog post cards.

### Changes

**`src/pages/Index.tsx`** (Showcase grid section, ~line 79-81)
- Add `animate-slide-up` and `stagger-{index}` classes to each `ShowcaseCard` wrapper by wrapping each card in a `div` with the animation classes, or by passing a `className` prop.

Since `ShowcaseCard` doesn't accept a `className` prop, two options:

**Option A (simpler):** Wrap each `<ShowcaseCard>` in a `<div>` with animation classes:
```tsx
{showcaseProjects.map((project, index) => (
  <div key={project.title} className={`animate-slide-up stagger-${Math.min(index + 1, 6)}`}>
    <ShowcaseCard {...project} />
  </div>
))}
```

This uses the existing `animate-slide-up` (slides up 20px with fade) and `stagger-1` through `stagger-6` delay classes already defined in `src/index.css`. No new CSS or config changes needed.

