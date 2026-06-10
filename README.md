# Rotaract Club of Lilongwe — SvelteKit Website

A full-stack membership portal and public website for the Rotaract Club of Lilongwe (RAC), built with **SvelteKit 2** + **Supabase**.

---

## 🗂 Project Structure

```
src/
├── app.css                          ← Global design system (tokens, buttons, forms)
├── app.html                         ← Base HTML with Google Fonts
├── app.d.ts                         ← TypeScript declarations (locals, page data)
├── hooks.server.ts                  ← Auth session & member injection into locals
│
├── lib/
│   ├── types.ts                     ← Database types (Member, JoinApplication, etc.)
│   ├── supabase.ts                  ← Browser Supabase client
│   ├── stores/auth.ts               ← Svelte stores (user, member, session)
│   └── server/supabase.ts           ← Server clients (anon + service role)
│
└── routes/
    ├── +layout.server.ts            ← Passes session + member to all pages
    ├── +layout.svelte               ← Public nav / portal nav / footer
    ├── +page.svelte                 ← Homepage (hero, about, projects, CTA)
    │
    ├── join/
    │   ├── +page.svelte             ← 2-step membership application form
    │   └── +page.server.ts          ← Validates & inserts into join_applications
    │
    ├── login/
    │   ├── +page.svelte             ← Member login (Supabase Auth)
    │   └── +page.server.ts          ← Redirects if already logged in
    │
    ├── portal/                      ← 🔒 Requires active member session
    │   ├── +layout.server.ts        ← Auth guard: redirect to /login if not active
    │   ├── profile/
    │   │   ├── +page.svelte         ← View/edit own profile (phone, occupation, skills)
    │   │   └── +page.server.ts      ← updateProfile action
    │   └── members/
    │       ├── +page.svelte         ← Searchable member directory
    │       └── +page.server.ts      ← Fetches active_members_view
    │
    └── admin/                       ← 🔒 Requires is_admin = true
        ├── +layout.server.ts        ← Admin guard: 403 if not admin
        ├── applications/
        │   ├── +page.svelte         ← Review applications, approve/reject with modal
        │   └── +page.server.ts      ← updateStatus action (creates member on approval)
        └── members/
            ├── +page.svelte         ← Table with search, edit status + notes
            └── +page.server.ts      ← updateMember action
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

Fill in `.env`:
```
PUBLIC_SUPABASE_URL=https://your-project.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 3. Set up the database

Follow the steps in `RAC_Supabase_Database_Guide.md` to:
- Create the `members` and `join_applications` tables
- Set up RLS policies and helper functions
- Create the convenience views
- Seed your first admin account

### 4. Run the dev server

```bash
npm run dev
```

---

## 🗺 Pages Overview

| URL | Access | Description |
|-----|--------|-------------|
| `/` | Public | Homepage: hero, about, projects |
| `/join` | Public | 2-step membership application form |
| `/login` | Public | Member login with RAC email |
| `/portal/profile` | Member | View & edit your profile |
| `/portal/members` | Member | Searchable member directory |
| `/admin/applications` | Admin | Review, approve, reject applications |
| `/admin/members` | Admin | Manage member statuses and notes |

---

## 🔑 Auth & Access Model

```
Public visitor
  → Can browse homepage and submit /join application

Active Member (logged in)
  → /portal/profile — view & edit own phone, occupation, skills
  → /portal/members — browse the member directory

Admin Member (is_admin = true)
  → All of the above
  → /admin/applications — full application workflow
  → /admin/members — manage statuses, add notes

Supabase RLS enforces these rules server-side.
```

---

## ✅ Application Workflow

```
Visitor submits /join
  ↓
join_applications (status: pending)
  ↓ Admin marks "Under Review"
join_applications (status: under_review)
  ↓ Admin approves + assigns RAC number
join_applications (status: approved)   +   members row created
  ↓ Admin creates auth user in Supabase dashboard
  ↓ Admin sends credentials email manually
Member logs in at /login
```

---

## 🎨 Design System

- **Display font**: Cormorant Garamond (serif, elegant)
- **Body font**: DM Sans (clean, modern)
- **Mono font**: DM Mono (RAC numbers, timestamps)
- **Colors**: Deep navy `#0a1628` + Colonial gold `#c9943a` on warm cream `#faf7f0`
- **Aesthetic**: Refined colonial — prestigious, trustworthy, Malawian character

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `@sveltejs/kit` | Full-stack framework |
| `@supabase/supabase-js` | Database & Auth client |
| `@supabase/ssr` | Server-side Supabase session handling |

---

## 🔧 Next Steps (to production)

1. **Email notifications** — Use Supabase Edge Functions or Resend to notify applicants on approval/rejection
2. **Password reset** — Add a `/reset-password` page using `supabase.auth.resetPasswordForEmail()`
3. **Admin user creation** — Currently manual via Supabase dashboard; could automate via Admin API
4. **Events module** — Add an `events` table for club meetings and project tracking
5. **File uploads** — Profile photos via Supabase Storage
6. **Deployment** — Deploy to Vercel, Netlify, or any Node-compatible host using `@sveltejs/adapter-auto`
