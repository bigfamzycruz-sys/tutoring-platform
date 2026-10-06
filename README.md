# TutorFlow

A modern tutoring website starter with a polished frontend inspired by a real-world learning platform. This project includes the core user flows for a tutoring platform:

- Student and tutor signup/login UI
- Student dashboard
- Tutor dashboard
- Tutor profiles and booking flow
- Payment summary page
- Session details page
- Progress tracking metrics
- Responsive homepage and navigation

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the app locally:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`

## Project structure

```bash
app/
  dashboard/
    student/
    tutor/
  tutors/
  book/
  lessons/
  login/
  signup/
  globals.css
  layout.tsx
  page.tsx
components/
  site-header.tsx
  site-footer.tsx
  tutor-card.tsx
lib/
  mock-data.ts
```

## Notes

This starter is intentionally built with mock data so it can be run immediately and expanded into a production app later. If you want, the next step can be to connect it to a real database, authentication provider, and Stripe/Zoom integration.

## Recommended production upgrade path

- Use NextAuth or Clerk for auth
- Add PostgreSQL + Prisma
- Implement Stripe checkout
- Integrate Zoom Jitsi or WebRTC
- Add tutor availability, bookings, and admin analytics
