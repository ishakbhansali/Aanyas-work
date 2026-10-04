# Aanyas kunskapsvärld

A notebook-style Swedish knowledge museum with 16 unique topics. No audio, accounts or server are required. The supplied eagle and Burj Khalifa duplicates were each included once.

## Preview

Open the separately supplied `Aanyas-Notebook.html` in Chrome or Safari. It contains its images, text and PDF download. For the folder version, run `python -m http.server 8000` in this folder, then open `http://localhost:8000`.

## Publish on GitHub Pages

Upload the contents of this folder to the root of your GitHub repository. Use `index.html` as the homepage. Enable GitHub Pages for that branch and its root folder. Keep the same repository name and homepage to preserve the website address.

The book always uses **Aanyas-kunskapsbok.pdf**. Replace that file with the latest edition; both reading and download buttons will keep working. This package is ready to publish; it has not been uploaded to GitHub.

## One shared content file

`content.json` supplies the website and PDF. Each topic contains a stable ID, Swedish title, category, introduction, lightly edited facts, a website sketch, an original photograph and an optional brighter notebook interpretation. The website loads this file directly. The book generator reads the same file.

1. Copy a topic in `content.json`, or use `topic-template.json` as an example.
2. Give it a new unique ID and add its images to `assets/`.
3. Edit its title, category, introduction and facts. Use only Aanya's notebook text. Put predictions or invented ideas in `imagination`, never in facts.
4. Rebuild with:

```
python -m pip install -r requirements.txt
python build.py
```

5. Upload the updated `content.json`, images and `Aanyas-kunskapsbok.pdf` to the same repository. Upload changed website code only when changing its design or behavior.

The script also regenerates the standalone preview and ZIP in the parent directory. The PDF filename stays the same on every build. The contents page automatically continues onto additional pages as the collection grows.

## Originality

The downloadable PDF uses the brighter, coloured notebook interpretations for all 16 topics, with a cover, linked contents and closing page. These are AI-assisted visual interpretations rather than exact-original scans. The website uses the same coloured pages; visitors can switch to each untouched original photograph. Readable Swedish facts remain alongside the notebook presentation on the website. Website sketch icons are inspired by Aanya's drawings. AI future ideas for 2045 and 2050 are labelled as her imagination on the website and in the PDF. The text is based on Aanya's pages and is not an independently researched reference book.

Her first weekend photograph is blurred, so its readable text is a short excerpt and the full original is retained.

Activities have been left out as requested. Search, category tabs, page navigation and original-photo viewing remain interactive.
