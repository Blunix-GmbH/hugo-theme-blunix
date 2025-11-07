# Hugo Theme Blunix

A professional, clean Hugo theme designed for consulting and service-based businesses. Features a flexible block-based page layout system, multilingual support, and modern responsive design.

## Features

- **Block-based page builder** — Compose pages from reusable content blocks
- **Multilingual support** — Built-in i18n with English and German translations
- **Responsive design** — Mobile-first with Tailwind CSS
- **SEO optimized** — OpenGraph, Twitter Cards, and semantic markup
- **Service business focused** — Pricing tables, testimonials, contact forms, FAQ sections
- **Clean codebase** — Modular partials and well-organized templates

## Prerequisites

- **Hugo Extended** (v0.120.0 or later) — [Installation guide](https://gohugo.io/installation/)
- **Git** — For submodule management

## Installation

### As a Git Submodule (Recommended)

From your Hugo site root:

```bash
git submodule add git@github.com:Blunix-GmbH/hugo-theme-blunix.git themes/hugo-theme-blunix
```

Then activate the theme in your `config.toml` or `config/_default/config.toml`:

```toml
theme = "hugo-theme-blunix"
```

### Cloning a Site That Uses This Theme

When cloning a site that already uses this theme as a submodule:

```bash
git clone --recurse-submodules <your-site-repo>
```

Or if you've already cloned without submodules:

```bash
git clone <your-site-repo>
cd <your-site>
git submodule update --init --recursive
```

## Configuration

### Basic Configuration

Minimum required in `config/_default/config.toml`:

```toml
baseURL = 'https://example.com/'
languageCode = 'en'
title = 'Your Company Name'
theme = "hugo-theme-blunix"
```

### Parameters

Configure site parameters in `config/_default/params.toml`:

```toml
logo = '/images/logo.svg'
footer_logo = '/images/logo-full.svg'
featured_image = 'featured.webp'

[[contact]]
name = "contact@example.com"
icon = "fa-solid fa-envelope"
link = "mailto:contact@example.com"

[[contact]]
name = "+1 234 567 890"
icon = "fa-solid fa-phone"
link = "tel:+1234567890"
```

### Multilingual Setup

Configure languages in `config/_default/languages.toml`:

```toml
[en]
languageName = "English"
languageCode = "en-us"
contentDir = "content/en"
title = "Your Company"
weight = 1

[de]
languageName = "Deutsch"
languageCode = "de"
contentDir = "content/de"
title = "Ihr Unternehmen"
weight = 2
```

See the `exampleSite/` directory for a complete working example.

## Block-Based Page Layout

Pages are composed from reusable "blocks" defined in front matter. The theme loops through the `blocks` array and renders each block partial.

### How It Works

1. Define blocks in your page's front matter under the `blocks` key
2. Each block must have a `block` field matching a partial name in `layouts/partials/blocks/`
3. Blocks render in the order they appear in the array
4. Additional parameters are passed to the block partial

### Example Page

```yaml
---
title: "Our Services"
description: "Professional consulting services"

blocks:
  - block: hero-breadcrumb
    title: "Services"
    subtitle: "Expert Solutions for Your Business"
    background: "/images/services/hero.webp"
    breadcrumb: "Services"

  - block: text-image
    title: "Custom Solutions"
    text: "We provide tailored consulting services..."
    image:
      src: "/images/services/consulting.webp"
      alt: "Consulting services"
    reverse: false

  - block: features-grid
    title: "What We Offer"
    items:
      - icon: "fa-solid fa-server"
        title: "Infrastructure"
        description: "Scalable server solutions"
      - icon: "fa-solid fa-shield"
        title: "Security"
        description: "Enterprise-grade protection"

  - block: cta
    title: "Ready to Get Started?"
    text: "Contact us today for a consultation"
    button:
      text: "Get in Touch"
      link: "/contact/"
---
```

## Available Blocks

### Hero & Headers

- **`hero`** — Full-width hero section with image background
- **`hero-breadcrumb`** — Hero with breadcrumb navigation
- **`banner`** — Simple banner section

### Content Blocks

- **`text-image`** — Text alongside image (left/right configurable)
- **`text-image-bg`** — Text with background image overlay
- **`about`** — About section with image and text columns
- **`principles`** — Multi-item principle/value showcase

### Service/Product Displays

- **`features-grid`** — Grid of features with icons
- **`features-list`** — Vertical list of features
- **`pricing-tabs`** — Tabbed pricing tables
- **`pricing-2`** — Two-column pricing comparison
- **`course-cards`** — Service or course cards

### Interactive Sections

- **`faq`** — Accordion-style FAQ
- **`ethics-accordion`** — Expandable ethics/values section
- **`contact-standard`** — Contact form (standard)
- **`contact-e2ee`** — Contact form with end-to-end encryption notice

### Social Proof & Media

- **`blog-cards`** — Recent blog post cards
- **`examples-slider`** — Carousel of example projects
- **`partners-scroller`** — Scrolling partner logos
- **`video-demo`** — Embedded video section

### Specialized Blocks

- **`cta`** — Call-to-action section
- **`emergency-section`** — Emergency contact section
- **`lopsa`** — LOPSA code of ethics display
- **`process-timeline`** — Process steps timeline
- **`technologies-columns`** — Technology stack showcase

### Meta Blocks

- **`blocks`** — Renderer that processes all blocks (used internally)
- **`background`** — Background styling helper

## Multilingual Support

The theme includes translation files in `i18n/`:

- `en.yaml` — English
- `de.yaml` — German

Use translations in templates:

```go-html-template
{{ i18n "read_more" }}
{{ i18n "contact_us" }}
```

Add custom translations by extending these files in your site's `i18n/` directory.

## Theme Structure

```
hugo-theme-blunix/
├── archetypes/          # Content templates
│   └── default.md
├── assets/              # Source assets for processing
│   ├── css/            # Tailwind CSS source
│   └── images/         # Images for processing
├── exampleSite/        # Demo site
│   ├── config/
│   └── content/
├── i18n/               # Translation files
│   ├── en.yaml
│   └── de.yaml
├── layouts/
│   ├── _default/       # Default templates
│   │   ├── baseof.html      # Base template
│   │   ├── single.html      # Single page
│   │   ├── list.html        # List page
│   │   └── *.html           # Custom page types
│   ├── partials/
│   │   ├── blocks/     # Block components
│   │   ├── components/ # Reusable components
│   │   ├── helpers/    # Helper partials
│   │   ├── head.html
│   │   ├── header.html
│   │   └── footer.html
│   └── shortcodes/     # Custom shortcodes
├── static/             # Static assets
│   ├── css/           # Compiled CSS
│   ├── js/            # JavaScript
│   ├── fonts/         # Web fonts
│   └── images/        # Static images
└── theme.toml         # Theme metadata
```

## Updating the Theme

### Update to Latest Version

From your site root, update the theme submodule to the latest commit:

```bash
git submodule update --remote --merge themes/hugo-theme-blunix
git add themes/hugo-theme-blunix
git commit -m "Update theme to latest version"
```

### Pin to a Specific Version

To use a specific theme version/tag:

```bash
cd themes/hugo-theme-blunix
git fetch --tags
git checkout v1.0.0
cd ../..
git add themes/hugo-theme-blunix
git commit -m "Pin theme to v1.0.0"
```

### Check Current Theme Version

```bash
cd themes/hugo-theme-blunix
git log -1 --oneline
cd ../..
```

### Making Changes to the Theme

If you need to modify the theme:

1. **Fork or branch** the theme repository
2. Make changes in `themes/hugo-theme-blunix/`
3. Commit and push to the theme repo:
   ```bash
   cd themes/hugo-theme-blunix
   git add .
   git commit -m "Customize XYZ"
   git push
   cd ../..
   ```
4. Update the submodule reference in your site:
   ```bash
   git add themes/hugo-theme-blunix
   git commit -m "Update theme with custom changes"
   ```

## Development

### Quick Start

```bash
hugo server
```

Then open http://localhost:1313/ in your browser.

### With Draft Content

```bash
hugo server -D
```

### Production Build

```bash
hugo --minify
```

Output goes to `public/` directory.

## Deployment

### Netlify

Add to your site's `netlify.toml`:

```toml
[build]
  command = "git submodule update --init --recursive && hugo --gc --minify"
  publish = "public"

[build.environment]
  HUGO_VERSION = "0.120.0"
  HUGO_ENABLEGITINFO = "true"

[context.production]
  command = "git submodule update --init --recursive && hugo --gc --minify"

[context.deploy-preview]
  command = "git submodule update --init --recursive && hugo --gc --minify --buildFuture"
```

Or enable "Git Submodules" in Netlify's site settings under Build & Deploy → Repository.

### Cloudflare Pages

Add build command:

```bash
git submodule update --init --recursive && hugo --gc --minify
```

Build output directory: `public`

### Other Platforms

Ensure your build process includes:

```bash
git submodule update --init --recursive
```

before running `hugo`.

## Customization

### Override Templates

To customize a theme template, copy it from `themes/hugo-theme-blunix/layouts/` to your site's `layouts/` directory with the same path. Your version will take precedence.

Example:

```bash
cp themes/hugo-theme-blunix/layouts/partials/footer.html layouts/partials/footer.html
# Edit layouts/partials/footer.html
```

### Override Styles

The theme uses Tailwind CSS compiled to `static/css/tailwind.min.css`. To customize:

1. Copy `assets/css/main.css` to your site
2. Set up Tailwind in your site root
3. Customize colors, fonts, etc. in `tailwind.config.js`

### Add Custom Blocks

Create new blocks in your site's `layouts/partials/blocks/` directory. They'll be available alongside theme blocks.

## Support

For issues, questions, or contributions, please contact Blunix GmbH or open an issue in the theme repository.

## License

MIT License - See LICENSE file for details.

## Credits

Developed and maintained by [Blunix GmbH](https://www.blunix.com)
