# Personal Academic Webpage

A simple, clean academic homepage to showcase your research and publications.

## Files Overview

- `index.html` - Main webpage structure
- `style.css` - Styling and layout
- `script.js` - Loads and displays publications
- `publications.json` - Your papers data (easy to edit!)
- `images/` - Profile photo and paper thumbnails

## How to Use

### 1. First Time Setup

1. **Edit your information in `index.html`:**
   - Replace "Your Name" with your actual name
   - Update title (e.g., "PhD Student", "Research Scientist")
   - Update affiliation/institution
   - Write your bio in the About section
   - Update contact email and social links

2. **Add your profile photo:**
   - Create an `images/` folder
   - Add your photo as `images/profile.jpg`
   - (Recommended size: 400x400px or larger, square)

3. **Add your publications:**
   - See "Adding Publications" section below

### 2. Adding Publications

Edit `publications.json` and add your papers. The most recent paper should be at the top.

**Example:**

```json
{
  "papers": [
    {
      "title": "Your Paper Title Here",
      "authors": ["Your Name", "Co-Author 1", "Co-Author 2"],
      "venue": "Conference Name (CVPR)",
      "year": 2024,
      "image": "images/paper_thumbnail.jpg",
      "links": {
        "paper": "https://arxiv.org/abs/your-paper",
        "project": "https://your-project-page.github.io",
        "code": "https://github.com/yourusername/repo",
        "video": "https://youtube.com/your-video"
      }
    }
  ]
}
```

**Tips:**

- Add new papers at the **top** of the array (they display in order)
- Links are optional - include only what you have
- Supported links: `paper`, `project`, `code`, `video`
- Images are optional but recommended (200x120px works well)

### 3. Preview Locally

Open `index.html` in your web browser to see your page.

**Note:** For publications to load locally, you may need to run a local server:

```bash
python -m http.server 8000
```

Then visit: <http://localhost:8000>

### 4. Deploy to GitHub Pages

1. Create a GitHub repository named `yourusername.github.io`
2. Push all files to the repository:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. Go to repository Settings → Pages
4. Under "Source", select "main" branch
5. Click Save
6. Your site will be live at: `https://yourusername.github.io`

### 5. Updating Your Page

After initial setup, to add papers or make changes:

1. Edit the appropriate files (usually `publications.json`)
2. Commit and push:

   ```bash
   git add .
   git commit -m "Add new paper"
   git push
   ```

3. Changes go live in ~1 minute

## Common Tasks

**Change your bio:** Edit the About section in `index.html`

**Add a paper:** Add entry at top of `publications.json`

**Update contact info:** Edit Contact section in `index.html`

**Change colors/style:** Edit `style.css`

## Customization

The page uses simple, clean styling. Main colors are defined in `style.css`:

- Primary blue: `#0066cc`
- Text: `#333`
- Borders: `#e0e0e0`

You can easily change these throughout the file to match your preferred color scheme.

## Tips

- Keep paper thumbnails consistent in size and style
- Use descriptive titles and complete author lists
- Include as many links as possible (paper PDF, project page, code)
- Update the "Last updated" date automatically updates on page load
- The page is mobile-responsive automatically

## Need Help?

The page uses standard HTML/CSS/JavaScript. Any web tutorial can help with customization.

## License

Feel free to use and modify for your own academic webpage.
