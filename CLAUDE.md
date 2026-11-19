# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Hugo personal academic website for Jie-Ying Lee (https://jayinnn.dev/): profile, research interests, publications, projects, experience, education, awards, and service on a single page. There is no theme; all templates live in `layouts/`.

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
Outputs to `public/`. Requires Hugo **extended 0.163 or newer** (the templates use `try`, `hugo.Data`, `layouts/_partials`, `layouts/_shortcodes`, and per-format `[imaging.webp]` quality). CI pins the version in `.github/workflows/hugo.yml`; keep it in step with the local `hugo version`.

## Content

Everything is in `content/_index.md`:

- **Front matter** holds the header and logo row: `name`, `name_zh`, `avatar`, `roles`, `email`, `interests` (the "Research interests" line), `[[links]]` (shown as `CV / Scholar / …`), and `[[affiliations]]` (logo, name, titles).
- **Body** holds the About paragraphs, then `{{< affiliations >}}`, then the sections as `## Heading` followed by shortcodes or Markdown lists.

Wording on the page is Jay's own (statement of purpose, CV, his abstracts). Publication one-liners follow Jon Barron's style: one plain sentence saying what the method does and what that buys, e.g. "Playing real videos backwards is a free way to test whether video models understand cause and effect." Do not start with "We present".

### Publications and projects

```go
{{< publication-with-teaser
    image="/images/publications/teaser.jpg"
    video="/videos/publications/teaser.mp4"
    title="Paper Title"
    url="https://project-url.com/"
    authors="jylee,author2,author3"
    equal="jylee,author2"
    corresponding="author3"
    note="(*Equal Contribution, †Corresponding Author)"
    venue="CVPR"
    year="2025"
    project="https://project-url.com/"
    arxiv="https://arxiv.org/abs/..."
    pdf="https://arxiv.org/pdf/..."
    code="https://github.com/..."
    video-link="https://youtube.com/..."
    demo="https://huggingface.co/..."
>}}
One-sentence summary.
{{< /publication-with-teaser >}}
```

- `image` is looked up under **`assets/`** (e.g. `assets/images/publications/teaser.jpg`), not `static/`. Hugo crops it to a centred square (desktop) and a 16:9 version (phones). SVG diagrams are shown whole on a dark background.
- `video` is an mp4 under **`static/`**; it plays while the teaser is hovered (mouse) or after a tap (touch). Its first frame should match the still.
- `video` may instead point to a second still under `assets/` (before/after pairs); add `hover-labels="Input,Output"` to label them.
- `blog`, `report`, `slides` are also accepted as links. `code` links to GitHub get a star count fetched at build time.
- Authors are ids from `data/authors.yaml` (`id`, `name`, `url`, `highlight: true` for Jay).

### Experience and education

```go
{{< cv-entry org="Google" role="Software Engineer, Pixel Camera Team" date="Sep. 2025 – Present" >}}
Optional description (Markdown).
{{< /cv-entry >}}
```

Facts come from Jay's current CV (the application PDF in Google Drive is the source of truth; the public CV on GitHub may lag).

## Layout and styles

- `layouts/baseof.html` – page shell and footer; `layouts/home.html` – header, research interests, and page body.
- `layouts/_partials/` – `head.html` (meta, Open Graph, inline CSS), `analytics.html` (Hugo's built-in GA template, production only), `github-stars.html`, `ids.html`.
- `layouts/_shortcodes/` – `publication-with-teaser.html`, `cv-entry.html`, `affiliations.html`.
- `assets/css/main.css` – the only stylesheet, inlined at build. White only (no dark mode). Lato, self-hosted in `static/fonts/` (plus a three-glyph Noto Sans TC subset for 李杰穎 and a dagger subset). Colours follow the CV: navy headings, blue links, dark red venues. Desktop is a two-column grid (square teaser or date on the left); phones are one column at 40rem and below.
- `assets/js/media.js` – teaser playback, inlined at build.
- Images that Hugo resizes (avatar, logos, teasers) live in `assets/images/`; `static/` holds only files served as-is (videos, fonts, favicon, CNAME).

## Deployment

GitHub Actions (`.github/workflows/hugo.yml`) builds on every push to `main` and daily at 02:30 UTC (to refresh star counts), then deploys to the `gh-pages` branch. Large media are in Git LFS (`git lfs pull` before building locally). Pushing to `main` publishes the live site, so show Jay a local preview first.
