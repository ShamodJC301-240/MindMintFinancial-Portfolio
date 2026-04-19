# The Mint — Banking App

A modern, green-themed banking web app for New York City. Built with vanilla HTML, CSS, and JavaScript — no frameworks required.

## Project Structure

```
The Mint/
├── index.html          # Landing page: hero, features, locations, CTA
├── learn.html          # Financial literacy: articles, guides, downloads
├── tools.html          # Calculators: compound interest, budget, loan
├── accounts.html       # User dashboard: balances, deposit/withdraw/transfer
├── login.html          # Login / sign-up page
├── about.html          # About The Mint, mission, team, values
│
├── /css
│   ├── main.css        # Entry point — imports all other CSS files
│   ├── layout.css      # Nav, footer, grid, page sections, responsive
│   ├── components.css  # Cards, buttons, modals, forms, tabs, transactions
│   ├── colors.css      # CSS custom properties (brand colors, tokens)
│   └── animations.css  # Keyframes, transitions, hover effects
│
├── /js
│   ├── main.js         # Navbar, modal helpers, smooth scroll (ES module)
│   ├── learn.js        # Article rendering, category filter tabs
│   ├── tools.js        # Compound interest, budget, loan calculators
│   ├── accounts.js     # Balance state, deposit/withdraw/transfer logic
│   └── utils.js        # Shared helpers: formatCurrency, fetchJSON, storage
│
├── /data
│   ├── articles.json   # Financial literacy article metadata
│   ├── guides.json     # PDF guide descriptions
│   ├── tools.json      # Tool metadata
│   └── accounts.json   # Demo account + transaction data
│
├── /assets
│   ├── images/hero/    # Hero banner images
│   ├── images/accounts/# Account dashboard illustrations
│   ├── images/learn/   # Educational graphics
│   ├── images/tools/   # Tool screenshots/icons
│   ├── icons/          # SVG/PNG UI icons
│   ├── pdfs/           # Downloadable worksheets and guides
│   └── fonts/          # Custom web fonts (if self-hosted)
│
├── /components
│   ├── navbar.html     # Shared nav markup reference
│   ├── footer.html     # Shared footer markup reference
│   ├── article-card.html
│   ├── guide-card.html
│   ├── tool-card.html
│   └── account-card.html
│
└── /docs
    ├── design.md       # Color palette, typography, UI guidelines
    ├── content-plan.md # Financial topics, article pipeline
    ├── roadmap.md      # Feature roadmap
    ├── guides.md       # Content planning workflow
    └── sources.md      # Financial data references
```

## Getting Started
```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Then open `http://localhost:8080`.

