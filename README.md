# Aanya's Little World / Aanyas lilla värld

Pastel notebook website with four separate pages, 16 knowledge topics and seven original English comic chapters. No accounts, audio or server backend. Hosted on the existing GitHub Pages repository and custom domain.

## Separate pages

- index.html: Home, with the welcome and illustrated links to the two worlds.
- knowledge.html: Knowledge World, all 16 topic cards, the page reader and the stable PDF download.
- comics.html: The comics, chapter index and seven unchanged pictures with Swedish translations below them in Swedish mode.
- about.html: About Aanya, including her thanks to her teachers and family.

Every page has the same menu and language buttons. The active page is highlighted. Previously shared links to sections on the old homepage redirect to the corresponding new page. All four HTML files must sit at the repository root beside the shared scripts and styles.

## Language options

The top-of-page English / Svenska buttons translate menus, introductions, About Aanya, knowledge topics, search and reader controls. The choice is remembered in this browser when local storage is available. English is the default.

In Swedish mode, each unchanged English comic picture has a Swedish translation underneath, grouped by panel. English mode hides those translations. The book and handwritten pictures stay in Swedish in both modes. Both versions include Aanya's thanks to her teachers, parents, grandparents, friends and family.

## Upload this update

The complete Aanyas-Little-World-FINAL.zip contains the full current website. Aanyas-Complete-Update.zip contains only changed/new files compared with the website before the language update. It combines the separate pages, both languages, teacher thanks and cropped photos. Use this single update even if you did not upload the earlier language package.

1. Unzip the Update ZIP.
2. Open the existing GitHub repository, then Add file > Upload files.
3. Drag everything INSIDE the unzipped folder into the upload area, including the whole assets folder. Do not upload the ZIP or its outer folder.
4. Check that photos have paths such as assets/page-2188.jpg, not just page-2188.jpg.
5. Commit changes. Wait for the Pages deployment, then refresh on your phone.

Do not delete existing files. Keep the existing CNAME file, Pages custom-domain setting, Cloudflare DNS records and domain configuration. Neither package changes the domain. This update includes the corrected PDF; the comic images do not need replacing.

## What changed

index.html, app.js and content.json were updated. New knowledge.html, comics.html and about.html separate the sections. New i18n.js and language.css provide the shared language switch, static translations, Swedish comic text and teacher thanks. Sixteen assets/page-*.jpg original photographs were cropped conservatively and gently brightened. No handwriting or drawings were redrawn; some edge background remains where cropping more tightly would risk cutting off work. The untouched source photos remain in the previous complete website backup, not duplicated publicly in this package.

README.md, UPLOAD-TO-GITHUB.txt, build.py and topic-template.json were updated for future maintenance. The website reader and PDF now use the approved brighter, lightly coloured Min helg version made from the clearer original photo. Its Swedish wording was checked against that photo. Min originalsida keeps the original photo. The PDF correction changes only page 7; the other 18 pages render identically to the prior book. Other coloured images, icons and comics are unchanged.

The Min helg / My weekend text now includes the swimming lesson, TV at 14:10, the park visit, computer play, writing and printing a Mother’s Day text, spa with Mum and bedtime. Its original-photo tab uses the clearer newly supplied photograph. Teacher thanks use the plural in both languages and are an ordinary About paragraph without a coloured highlight.

## Add future knowledge topics

content.json keeps the Swedish fields at the top level for compatibility with the book generator. Each topic now also has an en object for its English title, introduction, facts and optional note/imagination. Copy topic-template.json, give the topic a unique id, and add its pictures under assets/. Keep the facts based on her writing. Predictions belong in imagination, clearly labelled in both languages.

To regenerate the stable Swedish PDF and complete website ZIP:

```sh
python -m pip install -r requirements.txt
python build.py
```

For website-only edits without changing the existing coloured PDF:

```sh
python build.py --keep-pdf
```

The script includes all four pages and all assets, including the comics, and creates Aanyas-Little-World-FINAL.zip in the parent output directory. Preview the folder by running python -m http.server 8000 and opening http://localhost:8000. The PDF filename stays Aanyas-kunskapsbok.pdf. Original photographs are cropped with ordinary image-processing tools only, never generatively recreated.

## Add future comics

Keep the English image under assets/comics/. Add its index entry and chapter article in comics.html, then add its English/Swedish titles and Swedish panel text to the chapters array in i18n.js. Add one chapter at a time after approval. Match the words on the approved picture rather than inventing additional dialogue.

## Verification

Automated DOM tests covered all four pages in both languages, desktop/mobile menu logic, saved language choice across pages, all 16 topics, seven comic translations, teacher thanks, search, category filtering, original-page tabs, reader navigation, PDF link preservation and redirects for old chapter links. All page/image paths and unchanged artwork/PDF bytes were checked. A rendered mobile-browser preview was not available; check the layout on your phone after publishing.

The readable text translates Aanya's notebook, not an independently fact-checked reference book. The coloured PDF/pages are the previously approved AI-assisted interpretations; original-photo views retain the real handwriting and drawings. Her AI future predictions are imagination, not established facts.
