# BVKRI Songs

This repo is a demo-ready Next.js 14 site for a custom song service. It includes placeholder pages, artists, and samples.

## Demo Deploy (Vercel)
1. Import the Git repo in Vercel.
2. Add the minimal env vars below.
3. Deploy.

### Minimal env vars for demo
These values are safe placeholders so the app can build and render pages. Auth, email, and payments are not used for demo browsing.

```
DATABASE_URL=postgresql://demo:demo@localhost:5432/demo
NEXTAUTH_SECRET=replace-with-any-32+char-random-string
NEXTAUTH_URL=https://<your-vercel-project>.vercel.app
NEXT_PUBLIC_APP_URL=https://<your-vercel-project>.vercel.app
```

## Local Dev
```
npm install
npm run dev
```

Open http://localhost:3000
