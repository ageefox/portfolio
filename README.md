# Anastasia Galkova — portfolio

Personal portfolio with case studies on EFFR forecasting, small-data text classification, and an open-source testing contribution.

**Live site:** [portfolio-five-inky-26.vercel.app](https://portfolio-five-inky-26.vercel.app)

## Local setup

Requires Node.js 22.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run check
```

This runs ESLint, TypeScript checking, and the production build. The same command runs in GitHub Actions.

## Deployment

The site is designed for Vercel. Import the GitHub repository and keep the default Next.js settings. Vercel supplies the production URL during the build; a custom URL can also be set with `NEXT_PUBLIC_SITE_URL`.
