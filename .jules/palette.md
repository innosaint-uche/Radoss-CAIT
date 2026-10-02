## 2023-10-24 - [Add Global Keyboard Focus Styles]
**Learning:** Found that the landing page CSS (`landing/assets/css/style.css`) had no explicit focus indicator (like `outline` or `focus-visible`), relying only on default browser behavior or `hover`.
**Action:** Always verify if a reset or custom stylesheet removes default outlines without replacing them with a custom `focus-visible` ring.
