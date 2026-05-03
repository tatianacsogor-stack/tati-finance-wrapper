# Tati Finance Vercel Wrapper

This is a tiny Next.js wrapper for the Streamlit finance app. It does not replace or rewrite the Streamlit app. It only loads the existing Streamlit URL inside a full-screen iframe and provides custom Home Screen icon metadata for iPhone and Android.

Streamlit app loaded:

```text
https://tati-finance-app-ovfkztjgfrjhfrayfyj5id.streamlit.app
```

## Files

- `app/page.tsx` loads the Streamlit app in a full-screen iframe.
- `app/layout.tsx` sets the app metadata, Apple icon, PWA manifest, and mobile viewport.
- `public/manifest.json` defines the PWA name, colors, and icon.
- `public/icon.png` is the app icon used for iPhone and Android Home Screen.

## Icon

The current `public/icon.png` was copied from the existing project icon.

For best iPhone results, use a square PNG icon:

- Recommended size: `1024x1024`
- No white border
- Simple design that still looks good when rounded by iOS

Replace `public/icon.png` with your final icon before deploying.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Deploy To Vercel

1. Create a new GitHub repository for this wrapper app, or upload this folder to GitHub.
2. Go to Vercel and choose **Add New Project**.
3. Import the wrapper app repository.
4. Keep the default Next.js settings.
5. Deploy.
6. Open the deployed Vercel URL on your iPhone in Safari.
7. Tap **Share** -> **Add to Home Screen**.

The Home Screen icon should come from `public/icon.png`.

## Important Note

If the Streamlit app does not appear inside the iframe, Streamlit may be blocking iframe embedding. In that case, the reliable fallback is to change `app/page.tsx` to redirect to the Streamlit URL instead of embedding it.
