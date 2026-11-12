# Magdalena Pietras — Visual Designer

Complete React + Vite portfolio, prepared for:
https://github.com/magdapietra/visual-designer

Expected public address after successful deployment:
https://magdapietra.github.io/visual-designer/

## Upload and publish

1. Extract this ZIP. Upload its CONTENTS to the root of the repository, so package.json and index.html are at the top level. Do not upload the ZIP itself or put everything inside an extra folder.
2. Include the .github folder: it contains .github/workflows/deploy.yml. Enable hidden items in your file browser if needed.
3. Commit the files to the main branch. For all the images, GitHub Desktop is the easiest option: clone the repository, copy these files into that clone, then commit and Push origin. If using GitHub's Upload files page, upload the extracted files/folders in batches if required.
4. In the repository, open Settings > Pages. Under Build and deployment, set Source to GitHub Actions.
5. Open Actions > Publish portfolio to GitHub Pages. If the first run happened before Pages was enabled, choose Run workflow (main), or re-run the failed deployment.
6. Once the workflow succeeds, open https://magdapietra.github.io/visual-designer/.

Every later push to main rebuilds and deploys the website automatically.

## Run on your computer

Install Node.js 22 or later. In this folder, run:

    npm ci
    npm run dev

Production verification:

    npm run build
    npm run check:build
    npm run preview

The build goes into dist/. The publishing workflow uploads that folder.

## Pages and assets

The build creates real HTML entry files for the homepage, /creatives/ and /work/sleeknote-dashboard-builder/. This keeps direct links and page refreshes working on GitHub Pages without a server or a 404 workaround.

Vite's production base is /visual-designer/. The sitePath helper prefixes app links and image paths; Vite handles fonts and bundled resources. For a custom domain at its root, set PAGES_BASE_PATH to / in the build environment, configure the domain in GitHub Pages, then rebuild. For a renamed repository, update the default in vite.config.mjs and scripts/check-build.mjs, or set PAGES_BASE_PATH consistently in the workflow.

## Edit the website

- src/App.jsx: homepage and selected work
- src/SleeknoteCaseStudy.jsx: dashboard and builder case study
- src/Creatives.jsx: gallery and filters
- src/SiteFooter.jsx: photo placeholder, email, phone and LinkedIn placeholders
- src/HeroFlow.jsx and src/ThanksDrawing.jsx: animations
- public/assets/: images, illustrations and local fonts

Photo, phone and LinkedIn remain placeholders as requested. The builder case study remains labelled as a prototype, not live.

This package contains no installed dependencies, Git metadata, credentials or local preview screenshots. Original design assets and third-party trademarks retain their respective ownership.

Deployment reference: https://vite.dev/guide/static-deploy#github-pages
