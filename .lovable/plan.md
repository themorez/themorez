

## Plan: Header Hides on Scroll Down, Shows on Scroll Up

Change the header from always-visible sticky to a "smart header" that fades out when scrolling down and fades back in when scrolling up. It remains fixed at the top.

### Changes

**`src/components/Header.tsx`**
- Add scroll direction detection using `useState` + `useEffect` with a `scroll` event listener
- Track `lastScrollY` and compare with current `scrollY` to determine direction
- Add a `hidden` state that becomes `true` when scrolling down (past a small threshold ~80px) and `false` when scrolling up
- Change `sticky top-0` to `fixed top-0 left-0 right-0` with a transition:
  - When visible: `translate-y-0 opacity-100`
  - When hidden: `-translate-y-full opacity-0`
- Add `transition-all duration-300` for smooth fade/slide effect

No other files need changes.

