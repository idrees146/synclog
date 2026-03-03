# SyncLog — Custom Time Tracking Application

## Project Overview

Custom time-tracking web app replacing "On The Clock" SaaS ($350/mo) for a car dealership company with ~110 employees. Core goal: fast, distraction-free, cost-effective solution with real-time visibility into employee attendance.

## Core Features

1. **User Authentication** — Secure login for admins, managers, and employees
2. **"Who's In" Dashboard** — Real-time view of all employee clock-in/out status
3. **Timecard Management** — Log, calculate, and store employee hours
4. **Excel Export** — Export finalized timecards for payroll processing

## Tech Stack

- **Framework:** Next.js (App Router) — fullstack
- **Language:** TypeScript (strict, 100% coverage, zero `any` types)
- **UI:** Shadcn UI (new-york style) + Lucide React icons
- **Styling:** Tailwind CSS 4 only — no inline styles
- **Database:** PostgreSQL
- **Deployment:** AWS

---

## Strict Engineering Standards

### 1. Architecture & Clean Code

- **Modular App Router:** Every feature must be modular with clear separation
- **200-line file limit:** No file may exceed 200 lines. Break into sub-components in `@/components/`
- **Atomic Design:** Components must be small, functional, and focused on a single task
- **Path aliases:** Use `@/` prefix for all imports

### 2. Frontend Standards

- **Shadcn UI** for all core UI components
- **Lucide React** for all iconography
- **Tailwind CSS only** — zero inline styles, zero CSS modules
- **TypeScript:** 100% type coverage, no `any`, no `as unknown as`

### 3. Backend & API Architecture

- **Route Handlers:** Use Next.js App Router API routes (`app/api/`)
- **Error Handling:** Every API route must use try/catch with proper HTTP status codes
- **Validation:** Zod schemas for all incoming request data
- **API Wrappers:** All client-side API calls abstracted in `@/lib/api/[feature-name].ts`
- **Axios Interceptor:** Centralized instance at `@/lib/api/interceptor.ts` for headers and global error states

### 4. Security Protocol (HIGH PRIORITY)

- **Auth Tokens:** HTTP-Only Cookies for Bearer Tokens — NEVER localStorage
- **No sensitive data in client state**
- **CSRF/XSS Protection:** Sanitize all forms and inputs
- **Server-Side Validation:** Never trust client-side data; re-verify all logic server-side
- **Input Sanitization:** All user inputs must be sanitized before processing

### 5. Performance

- Client demands "snappiness" — prioritize speed at every level
- Minimize client-side JavaScript bundles
- Use server components by default; client components only when necessary
- Optimize database queries and API response times

### 6. Deployment & Database

- Code must be AWS-deployment compatible
- PostgreSQL database structures
- Environment variables for all configuration (never hardcode secrets)

---

## Project Structure

```
synclog/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth route group (login, etc.)
│   ├── (dashboard)/              # Protected dashboard routes
│   ├── api/                      # API Route Handlers
│   │   ├── auth/                 # Auth endpoints
│   │   ├── employees/            # Employee CRUD
│   │   ├── timecards/            # Timecard endpoints
│   │   └── export/               # Excel export
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/                       # Shadcn UI primitives
│   ├── auth/                     # Auth-related components
│   ├── dashboard/                # Dashboard components
│   ├── timecards/                # Timecard components
│   └── shared/                   # Shared/reusable components
├── lib/
│   ├── api/                      # API call wrappers + interceptor
│   ├── db/                       # Database connection & queries
│   ├── validators/               # Zod schemas
│   ├── utils.ts                  # General utilities
│   └── types/                    # Shared TypeScript types
├── hooks/                        # Custom React hooks
├── CLAUDE.md                     # This file — engineering standards
└── Configuration files
```

---

## Key Reference Documents

- `Time Tracking app - Scope Document.docx` — Full scope and milestones
- `Biran_ontheclock_2March2026.txt` — Client meeting transcript (business context)
