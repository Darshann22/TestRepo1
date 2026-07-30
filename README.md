TestRepo1
========

Purpose
-------

`TestRepo1` is a tiny front-end demo used to experiment with simple DOM interactions and small JavaScript features. It's intended as a hands-on playground for learning or quick prototyping.

Repository contents
-------------------

- `index.html` — the web page entry point. Contains basic markup and placeholders for UI elements.
- `script.js` — client-side JavaScript. Intended for the interactive feature(s).

Project goals
-------------

1. Provide a minimal, well-documented example of a web feature (e.g., a button that toggles content).
2. Keep the project tiny and easy to extend.
3. Demonstrate a simple development loop: edit, run locally, and validate.

Development — run locally
------------------------

Option A — quick (open file in browser)

1. Double-click `index.html` to open it in your default browser.

Option B — recommended (static server)

```bash
# Python 3 built-in HTTP server
python3 -m http.server 8000
# then open http://localhost:8000 in your browser

# or, with npm installed, a quick static server:
# npx http-server -p 8000
```

Suggested first feature (example)
---------------------------------

Implement a small feature in `script.js`:

- Add a button with id `toggleBtn` in `index.html`.
- When clicked, toggle the visibility of a content area with id `content` and update the button label to `Show`/`Hide`.

Manual verification checklist
-----------------------------

1. Open the app in the browser.
2. Click the `toggleBtn` and confirm the `content` area appears/disappears.
3. Ensure no console errors are shown.

Testing and automation
----------------------

This repo doesn't include automated tests yet. For future work, consider adding a tiny test runner or using Playwright/Puppeteer for end-to-end checks.

Branching & contribution workflow
--------------------------------

1. Create a branch for your work: `git checkout -b feat/toggle-button`.
2. Make changes and commit locally.
3. Push the branch and open a pull request against `main`.

Commit & push example
----------------------

```bash
git add .
git commit -m "Add toggle button feature"
git push origin feat/toggle-button
```

Next steps (recommended)
------------------------

- Implement the example toggle feature in `script.js` and `index.html`.
- Run the app locally and verify the manual checklist.
- Add a short automated test or e2e check if desired.

Questions / contact
-------------------

Open an issue in the repo to discuss features, bugs, or improvements.

