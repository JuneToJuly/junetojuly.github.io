# Extension Showcase

Zero-dependency static website for GitHub Pages.

## Run locally

You can open `index.html` directly in a browser. For the most accurate local behavior, use any simple static HTTP server you already have.

## Deploy

Copy these files into the root of your GitHub Pages repository:

    index.html
    css/
    js/
    images/
    demos/
    extensions/

Then:

    git add .
    git commit -m "Add extension showcase"
    git push

If GitHub Pages is configured to publish from the repository's main branch/root, the site will update automatically.

## First edits to make

1. Replace "Developer Tools" with your eventual brand/name.
2. Search for `data-placeholder` in the HTML and replace `href="#"` values with your GitHub/GitBook links.
3. Replace the Replay Debugger mockup with a real screenshot/GIF/video when ready.
4. Turn the remaining extension cards into links as their detail pages are created.
5. Adjust extension descriptions to the public-facing wording you want.

No npm, Node, framework, build step, or generated output is required.
