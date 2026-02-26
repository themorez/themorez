## Plan: Add hidden iframe target to prevent page redirect on form submission

Both forms currently redirect the user away from the site when submitted. By adding a hidden `<iframe>` as the form `target`, the redirect happens invisibly inside the iframe.

### Changes

`**src/pages/Contact.tsx**`

- Add `<iframe name="hidden_iframe" style={{display:'none'}}></iframe>` inside the component
- Add `target="hidden_iframe"` to the `<form>` tag

`**src/pages/Index.tsx**`

- Add `<iframe name="hidden_iframe" style={{display:'none'}}></iframe>` inside the component
- Add `target="hidden_iframe"` to the newsletter `<form>` tag

After the contact form submits, use the form's `onSubmit` event to set a `submitted` state to `true` after a 1 second delay, then show a success message like 'Your message has been sent!' and reset the form fields. Don't use fetch — just use `setTimeout` with `setState`.  
This keeps native HTML submission (no CORS issues) while preventing the user from being redirected away.