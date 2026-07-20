# Sniff'd — Shopify Theme

Premium pet products storefront theme for Sniff'd (supplements, shampoos, fragrances). Built as a standard Shopify (Online Store 2.0) theme using JSON templates + Liquid sections.

## Structure
- `layout/theme.liquid` — base HTML shell
- `sections/` — header, footer, hero, category-tiles, featured-collection, brand-story, main-product, main-collection
- `templates/` — home (`index.json`), collection (`collection.json`), product (`product.json`), plus cart/search/404/page/blog/article fallbacks
- `snippets/product-card.liquid` — reusable product card
- `assets/theme.css`, `assets/theme.js` — styles + interactions
- `config/settings_schema.json` — theme editor color settings (cream / olive / gray / lavender / rose, matching the brand assets)

## Push to GitHub
```bash
cd sniffd-theme
git init
git add .
git commit -m "Initial Sniff'd theme"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Connect to Shopify
1. In Shopify admin: **Online Store → Themes → Add theme → Connect from GitHub**.
2. Authorize GitHub, select your repo and the `main` branch.
3. Shopify pulls the theme in as a new (unpublished) theme — preview it, then **Publish** when ready.
4. Any future `git push` to the connected branch auto-syncs to that theme in Shopify.

## Next steps
- Add real products in Shopify admin, tagged/typed as Fragrances, Shampoos, Supplements, and organized into matching collections (`/collections/fragrances`, `/collections/shampoos`, `/collections/supplements`) — the homepage category tiles link to these handles.
- Upload your logo/product images shown in the brand kit as product images and, optionally, replace the text logo in the header section with an image.
- Create `about`, `faq`, `contact`, and `shipping` pages in Shopify admin to fill out the footer links.
