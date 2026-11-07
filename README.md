# MediNova — Modern Full-stack Healthcare Platform

A Next.js App Router + TypeScript healthcare starter with Neon/PostgreSQL, Prisma, Auth.js (NextAuth v5), JWT sessions, Framer Motion, light/dark themes and English/Bangla UI translations.

## Included
- Responsive healthcare landing page and clinician directory with search
- Patient/doctor registration and credential sign-in
- Auth.js JWT session strategy and protected dashboard/API routes
- Appointment request workflow with server-side validation
- PostgreSQL/Prisma data models for users, appointments, medical records and Auth.js adapter tables
- English ↔ বাংলা language toggle (persisted in localStorage)
- Light/dark theme toggle (system-aware, persisted by next-themes)
- Loading and empty states, animated UI interactions
- Seed script with demo clinician accounts

## Requirements
- Node.js 20.9+
- Neon PostgreSQL database
- npm

## Setup
1. Extract the ZIP and open the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and set:
   - `DATABASE_URL`: Neon pooled PostgreSQL connection string. For Prisma migrations, use a Neon direct connection if your Neon setup provides one; configure `directUrl` in `schema.prisma` if you use separate pooled/direct URLs.
   - `AUTH_SECRET`: generate with `npx auth secret` or `openssl rand -base64 32`.
4. Generate Prisma Client and create database tables:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
5. Optional demo data:
   ```bash
   npm run db:seed
   ```
6. Start:
   ```bash
   npm run dev
   ```
   Open http://localhost:3000.

## Demo login (after seed)
- Patient: `patient@medinova.demo`
- Doctor examples: `dr.ayesha.rahman@medinova.demo`, `dr.farhan.ahmed@medinova.demo`, etc.
- Password for seeded accounts: `DemoPass123!`

Change demo passwords and remove seed accounts before production.

## Important implementation notes
- Auth.js Credentials provider uses JWT sessions. Passwords are hashed with bcryptjs.
- This starter deliberately does not include a clinical diagnosis engine or automated medical advice. It is a scheduling and care-management foundation, not a replacement for professional medical care.
- Medical-record schema is included as a foundation; patient-facing record upload, document storage, doctor notes, prescription signing, payment processing, video consultation, email/SMS notifications and audit exports should be implemented with your chosen compliant providers before production.
- Add rate limiting, email verification, password reset, CSRF/security review, audit logging, encrypted sensitive fields, backups, retention policies and applicable privacy/regulatory compliance before handling real patient data.
- Only an ADMIN should be allowed to grant doctor privileges in a production deployment. Public self-registration as DOCTOR is enabled here for local demo convenience; lock this down before launch.
- For Google OAuth, add a Google provider in `src/lib/auth.ts` and configure provider credentials. The included Credentials flow works without OAuth credentials.
- The bilingual toggle currently translates all interface copy represented in the shared dictionary; add keys to both `en` and `bn` when adding new UI text.

## Main routes
- `/` landing page
- `/doctors` clinician directory
- `/sign-in`, `/sign-up`
- `/dashboard` protected patient dashboard
- `/appointments/new` appointment request form
- `/api/register`, `/api/doctors`, `/api/appointments`, `/api/auth/*`

## Suggested next production milestones
1. Admin console and doctor verification/approval
2. Doctor availability calendar and collision prevention / slot locking
3. Medical record upload with private object storage and audit trail
4. Prescriptions and pharmacy workflow
5. Notifications, email verification and password recovery
6. Telemedicine integration and payment gateway
