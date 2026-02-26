

## Plan: Per-Card Badge Labels

### Changes

**`src/components/ShowcaseCard.tsx`**
- Add optional `label` prop (default: `"Web Store"`) to the interface
- Use `{label}` instead of the hardcoded `"Web store"` text on line 30

**`src/pages/Index.tsx`**
- Add a `label` field to each entry in `showcaseProjects`:
  - First 3 (Rezaei Saffron Persian, Rezaei Saffron English, Gandomak Shop) → `"Web Store"`
  - Last 3 (AcademiaPen, Tarjome Land, Personal Profile) → `"Web Site"`

