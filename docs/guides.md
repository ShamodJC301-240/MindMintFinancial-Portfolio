# Content Workflow Guide — The Mint

## Adding a New Article

1. Write the article in Markdown
2. Add entry to `data/articles.json`:
```json
{
  "id": 7,
  "title": "Your Article Title",
  "category": "Saving",
  "summary": "One or two sentence description shown on the card.",
  "readTime": 5,
  "url": "articles/your-article-slug.html"
}
```
3. Create the article HTML at the URL path above
4. Article will automatically appear in `learn.html` grid

## Adding a PDF Guide

1. Place PDF in `assets/pdfs/`
2. Add entry to `data/guides.json`
3. Guide card will render on `learn.html`

## Adding a Tool

1. Build the tool UI in `tools.html`
2. Add calculator logic to `js/tools.js`
3. Add metadata to `data/tools.json` for the tools index card
