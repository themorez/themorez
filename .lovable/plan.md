

## Plan: Update Showcase Section

Three changes to `src/pages/Index.tsx` and two new screenshot assets:

### 1. Add screenshot assets
- Save the fetched tarjome-land.ir screenshot as `src/assets/screenshot-tarjome-land.png`
- Save the fetched maminrezaie.github.io screenshot as `src/assets/screenshot-personal-profile.png`

### 2. Update `src/pages/Index.tsx`
- Import the two new screenshot images
- Replace `"/placeholder.svg"` for Tarjome Land with the actual screenshot import
- Add a sixth entry to `showcaseProjects`:
  ```
  title: "Personal Profile"
  description: "Personal academic profile and portfolio website."
  image: screenshotPersonalProfile
  url: "https://maminrezaie.github.io"
  ```

### 3. Change label in `src/components/ShowcaseCard.tsx`
- Change the badge text from `"Web Store"` to `"Web Site"` (line 33)

