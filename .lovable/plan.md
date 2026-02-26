

## Plan: Switch forms to native HTML submission

### Changes

**`src/pages/Contact.tsx`**
- Remove `useState` for `isSubmitting` and the `handleSubmit` function
- Remove `toast` import (no longer needed)
- Change `<form>` to use `action="https://www.form-to-email.com/api/s/jwy5OgVihTZp"`, `method="POST"`, `enctype="multipart/form-data"`, and remove `onSubmit`
- Remove `value` and `onChange` bindings from inputs (no longer controlled)
- Simplify the submit button (remove `disabled={isSubmitting}` and dynamic text)

**`src/pages/Index.tsx`**
- Remove `subEmail` and `isSubmitting` state, and `handleSubscribe` function
- Remove `toast` import
- Change the newsletter `<form>` to use `action`, `method="POST"`, `enctype="multipart/form-data"`
- Add hidden inputs for `name` ("Website Subscriber") and `message` ("New subscriber from website")
- Change email input `name` to `"email"` and remove controlled value/onChange
- Simplify the submit button

### Why native form
The `form-to-email.com` service redirects to a bot-check/success page, which blocks AJAX (CORS). Native HTML form submission lets the browser follow the redirect naturally.

