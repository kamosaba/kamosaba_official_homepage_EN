# Deployment Guide for Cloudflare Pages

Follow these steps to deploy the Kamosaba official website to Cloudflare Pages.

### 1. Repository Preparation
Upload (Push) your current code to a Git hosting service such as GitHub.

### 2. Create Project on Cloudflare Pages
1. Log in to the Cloudflare dashboard and select "Workers & Pages."
2. Click "Create application" → "Pages" → "Connect to Git."
3. Select your repository.

### 3. Build Settings
Enter the following settings and click "Save and Deploy."

- **Framework preset**: `Next.js` (or `None`)
- **Build command**: `npm run build`
- **Build output directory**: `out`

### 4. Local Verification
You can verify if the built static HTML works correctly by running the following commands locally:

1. Run `npm run build`
2. Run `npm run preview`
3. Access the URL displayed in your browser (usually http://localhost:3000, etc.)

This allows you to check the exact "static HTML" state that will be uploaded to Cloudflare Pages.

---

### Important Notes
- This project is configured to operate in **Static Export (SSG)** mode.
- Since `output: 'export'` is set in `next.config.ts`, all pages are generated as static HTML during build.
- Images are served from the `public` folder, and the image optimization feature is set to off (`unoptimized`) due to static deployment constraints.

### Reflecting Updates
Whenever you push code to GitHub, Cloudflare Pages will automatically build and deploy it. This also applies when adding news articles (`.md` files).
