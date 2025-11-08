# Artist Gallery Website

A Jekyll-based gallery website for displaying artwork, optimized for GitHub Pages.

## Copyright & Licensing

**⚠️ IMPORTANT:** This repository uses dual licensing:

- **Code (HTML, CSS, JS, Jekyll templates):** MIT License - See [LICENSE](LICENSE)
- **Artwork (all images in `/images`):** All Rights Reserved - See [LICENSE-ARTWORK.md](LICENSE-ARTWORK.md)

The artwork displayed on this site is protected by copyright and may not be used, reproduced, or distributed without permission.

## Setup

1. Install Ruby and Bundler if you haven't already
2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run locally:
   ```bash
   bundle exec jekyll serve
   ```
   Visit http://localhost:4000 to see your site

## Adding New Galleries

1. Create a new file in the `_galleries` folder (e.g., `my-gallery.md`)
2. Add front matter with your images:

```yaml
---
layout: gallery
title: My Gallery Name
description: A description of this gallery
images:
  - url: /images/photo1.jpg
    title: Photo Title
    alt: Photo description
  - url: /images/photo2.jpg
    title: Another Photo
    alt: Another description
---
```

3. Upload your images to the `images` folder
4. Commit and push to GitHub

## Image Organization

- Place all images in the `/images` folder
- You can create subfolders like `/images/gallery-name/` for organization
- Reference them in your gallery files with the full path: `/images/gallery-name/photo.jpg`

## Optional: Thumbnails

For better performance with large images, you can create thumbnails:

```yaml
images:
  - url: /images/full-size.jpg
    thumb: /images/thumbs/thumbnail.jpg
    title: Photo Title
```

The thumbnail will be shown in the grid, and clicking opens the full-size image.

## Customization

- Edit `_config.yml` to change site title and description
- Modify `assets/css/style.css` to customize colors and layout
- Edit `_layouts/default.html` to change the overall page structure
- Edit `_layouts/gallery.html` to modify how galleries are displayed

## Deployment

Simply push to GitHub. GitHub Pages will automatically build and deploy your site.

## Features

- Responsive image grid layout
- Lightbox for full-size image viewing
- Click anywhere outside image or press Escape to close lightbox
- Lazy loading for better performance
- Mobile-friendly design
- Collections-based gallery organization
