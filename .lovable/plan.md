

## Plan: Connect the Index page "Let's connect" email form to form-to-email.com

### Current State
- **Contact page** (`Contact.tsx`): Already wired up — submits to `https://www.form-to-email.com/api/s/jwy5OgVihTZp` via fetch. Also includes the `subject` field in the form but doesn't send it in the request body. No changes needed here (unless you want to also send `subject`).
- **Index page** (`Index.tsx`): The "Let's connect" section has a static email input and "Subscribe" button with no submit logic.

### Changes

**`src/pages/Index.tsx`**
- Add `useState` for the email value and a submitting flag.
- Wrap the email input and button in a `<form>` with an `onSubmit` handler.
- On submit, POST to `https://www.form-to-email.com/api/s/jwy5OgVihTZp` with `application/x-www-form-urlencoded` body containing `name: "Website Subscriber"`, `email`, and `message: "New subscriber from website"`.
- Show success/error toasts using `sonner`.
- Disable the button while submitting.

**`src/pages/Contact.tsx`**
- Also include `subject` in the POST body so it's not silently dropped.

### Technical Detail

The fetch call pattern (already proven in Contact.tsx):
```ts
await fetch("https://www.form-to-email.com/api/s/jwy5OgVihTZp", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({ name, email, message }).toString(),
});
```

