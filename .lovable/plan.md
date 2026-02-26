

The header is `fixed`, so it's removed from document flow. The user wants a spacer below the header so content on all pages doesn't hide behind it. The simplest approach: add a `mb-` (margin-bottom) to the header — but that won't work since it's fixed. Instead, add a spacer `div` right after the `</header>` inside the Header component itself.

## Plan: Add spacer below the fixed header

### Change

**`src/components/Header.tsx`**
- Wrap the return in a fragment (`<>...</>`)
- After the `</header>` tag, add a spacer div: `<div className="h-[72px] sm:h-[88px]" />` to push page content down (matching the header's height of `h-14 + py-2` on mobile and `h-16 + py-4` on desktop)

This single change fixes all pages at once since every page uses `<Header />`.

**`src/pages/Index.tsx`**
- Remove the now-redundant `pt-20 sm:pt-24` from `<main>` since the spacer handles it globally

