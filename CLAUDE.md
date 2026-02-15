# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo-based personal academic website for Jie-Ying Lee (https://jayinnn.dev/). The site showcases research publications, academic profile, and news updates. It uses a customized fork of the hugo-researcher theme.

## Development Commands

**Local development server:**
```bash
hugo server
```
Access at http://localhost:1313. Server auto-reloads on file changes.

**Build for production:**
```bash
hugo --gc --minify --cleanDestinationDir
```
Outputs to `public/` directory. The `--gc` flag runs garbage collection, `--minify` minifies output, and `--cleanDestinationDir` removes files from destination not found in static directories.

**Update theme submodule:**
```bash
git submodule update --remote themes/researcher
```

## Architecture

### Theme System

The site uses a forked hugo-researcher theme located at `themes/researcher/` as a git submodule. Custom overrides are in the root-level `layouts/` directory, which take precedence over theme templates.

**Key customization points:**
- `layouts/partials/` - Override theme partials (head, header, footer)
- `layouts/shortcodes/` - Custom Hugo shortcodes
- `static/css/custom.css` - Additional styling loaded after theme CSS
- `static/js/` - Custom JavaScript

### Publication System

Publications use a custom shortcode system that renders teasers with hover/tap-to-play videos or images.

**Shortcode:** `layouts/shortcodes/publication-with-teaser.html`

**Usage in content:**
```go
{{< publication-with-teaser
    image="/images/publications/teaser.jpg"
    video="/videos/publications/teaser.mp4"
    title="Paper Title"
    url="https://project-url.com/"
    authors="jylee,author2,author3"
    equal="jylee,author2"
    note="(*Equal Contribution)"
    venue="CVPR"
    year="2025"
    project="https://project-url.com/"
    arxiv="https://arxiv.org/abs/..."
    code="https://github.com/..."
    video-link="https://youtube.com/..."
    demo="https://huggingface.co/..."
>}}
Abstract text here.
{{< /publication-with-teaser >}}
```

**Author system:**
- Authors are defined in `data/authors.yaml` with IDs, names, URLs, and highlight flags
- Reference authors by ID in the shortcode `authors` parameter (comma-separated)
- The `equal` parameter marks equal contribution authors (adds asterisk)
- Author with `highlight: true` appears in bold (typically the site owner)

### Content Structure

**Main content file:** `content/_index.md`
- Contains profile, research interests, news, and publications
- Uses Hugo front matter and Markdown with shortcodes

**Static assets:**
- `static/images/publications/` - Publication teaser images
- `static/videos/publications/` - Publication teaser videos
- `static/avatar.png` - Profile photo
- `static/favicon.ico` - Site favicon

### Styling System

The site layers CSS in this order:
1. Bootstrap 4.6.2 (CDN)
2. Font Awesome icons (CDN)
3. Academicons (CDN)
4. Theme SCSS compiled from `themes/researcher/assets/sass/researcher.scss`
5. Custom overrides in `static/css/custom.css`

Custom CSS defines:
- `.publication-with-teaser` - Publication layout (flex container)
- `.teaser-container` - Teaser image/video wrapper with hover effects
- `.teaser-video` - Hover overlay video
- `.teaser-hint` - "▶ Hover / Tap" badge
- Responsive breakpoints at 768px

### JavaScript

**teaser-hover.js:**
- Loaded in `layouts/partials/head.html`
- Inline scripts in publication shortcode handle video playback on hover/tap
- Desktop: hover to play video
- Mobile: tap to toggle video playback

## Configuration

**Site config:** `hugo.toml`
- Site title, baseURL, author info
- Google Analytics tracking ID
- Social media links
- Style parameters (fonts, colors, dimensions)
- Permalink settings

**Important config values:**
- `theme = "researcher"` - Must match submodule directory name
- `unsafe = true` in goldmark renderer - Required for raw HTML in markdown
- `extended` Hugo version required for SCSS compilation

## Deployment

**Automated deployment:**
- GitHub Actions workflow at `.github/workflows/hugo.yml`
- Triggers on push to `main` branch
- Builds with Hugo 0.134.0 extended
- Deploys to `gh-pages` branch
- Requires Git LFS for large assets

**Manual build requirements:**
- Hugo extended version (for SCSS)
- Git LFS installed and pulled (`git lfs pull`)
- Submodules initialized (`git submodule update --init --recursive`)

## Adding Content

**New publication:**
1. Add teaser image to `static/images/publications/`
2. Add teaser video (optional) to `static/videos/publications/`
3. Add author to `data/authors.yaml` if new
4. Add shortcode block to `content/_index.md` under Publications section

**Update news:**
Edit the News section in `content/_index.md` following the existing Markdown list format.

**Update profile:**
Edit bio, research interests, or contact info in `content/_index.md`.
