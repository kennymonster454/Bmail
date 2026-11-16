# BMail

BMail is a separate email-app project. The first milestone is a BMail-to-BMail messaging system. External email integration can be added later through an email provider.

## Stack

- Next.js
- React
- TypeScript
- Appwrite Cloud

## Appwrite project

The project is configured for the BMail Appwrite project. Copy `.env.example` to `.env.local` and keep the provided endpoint and project ID there.

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://nyc.cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=6afb75e3002388e05577
```

These two values identify the Appwrite project; they are not API secrets. Never put an Appwrite API key or other server secret in a `NEXT_PUBLIC_` variable or commit it to GitHub.

## Run locally

Install Node.js, then run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Current status

- [x] Next.js starter
- [x] Appwrite Web SDK installed in project dependencies
- [x] Appwrite client configured
- [x] Appwrite health check runs when the app starts
- [ ] User registration and sign-in
- [ ] Secure message database and permissions
- [ ] Inbox, sent messages, and compose functionality
- [ ] External email integration

The health check confirms that the Appwrite endpoint responds. It does not yet create accounts or store email messages.
