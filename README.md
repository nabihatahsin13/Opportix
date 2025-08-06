# Opportix 🧭  
**Your gateway to opportunity.**

🔗 **Live Demo:** [https://opportix-crrc.vercel.app](https://opportix-crrc.vercel.app)

Opportix is a full-featured job portal designed to connect job seekers with career opportunities and give recruiters the tools they need to find top talent. Built using React.js, Tailwind CSS, Supabase, Clerk, and ShadCN UI — Opportix is fast, scalable, and beautifully designed.



## 🚀 Features

- 🔐 User Authentication – Sign up and log in with Clerk using email or Google  
- 🧑‍💼 Job Seeker Dashboard – Browse, filter, and apply for jobs  
- 🏢 Recruiter Portal – Post, edit, and manage job listings with Markdown support  
- 📄 Resume Uploads – Applicants can upload resumes via Supabase Storage  
- ✅ Application Tracking – Real-time status updates for applications  
- 💾 Save Jobs – Bookmark job listings for later  
- 📰 Blog Section – Career tips, updates, and news  
- 🎥 Intro Video – Embedded YouTube video on the landing page  
- 📬 Newsletter Signup UI – Static form with a thank-you message (not yet functional)



## 🛠 Tech Stack

- **React.js** – For building the frontend UI  
- **Tailwind CSS** – Utility-first styling framework  
- **ShadCN UI** – Prebuilt components styled with Tailwind  
- **Clerk** – Authentication using email and Google  
- **Supabase** – Backend for:
  - Job listings, applications, and blog data  
  - Resume file uploads via Supabase Storage  
- **React Hook Form + Zod** – Form handling and validation  
- **Markdown** – Used for job and blog content  
- **YouTube Embed** – Regular iframe-based video embed  
- **Newsletter Form** – Static input field (no backend)


## ❓ What is Supabase?

Supabase is an open-source Backend-as-a-Service (BaaS) that provides:

- A fully managed PostgreSQL database  
- Secure file storage  
- Auto-generated APIs  
- Optional real-time features and edge functions

**In Opportix, Supabase is used for:**

- Storing job listings and applications 
- Uploading and serving resume files



## 🧠 User Experience Overview

### 👤 For Job Seekers

- Register or log in with Clerk  
- Browse and filter job listings  
- Apply to jobs by uploading resumes  
- Save jobs to revisit or apply later  
- Watch the intro video on the landing page  
- Read blog posts for guidance  
- Enter email in the newsletter form (static)

### 🧑‍💼 For Recruiters

- Log in to access the recruiter dashboard  
- Create, edit, or delete job posts (Markdown supported)  
- Review candidate applications and resumes  
- Optionally post blog content (if admin access is provided)

---

## 🛠 Getting Started

Set up Opportix locally in a few quick steps:

### ✅ Requirements

- [Node.js](https://nodejs.org)
- [Git](https://git-scm.com)
- [Clerk](https://clerk.dev) (for auth)
- [Supabase](https://supabase.com) (for backend)

---

### 🚀 Setup

1. **Clone & Install**

```bash
git clone https://github.com/your-username/opportix.git
cd opportix
npm install
```

2. **Environment Variables**

Create `.env.local` in the root and add:

```env
# Clerk
CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
NEXT_PUBLIC_CLERK_FRONTEND_API=your_api

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

3. **Run Dev Server**

```bash
npm run dev
```

App will be live at `http://localhost:3000`

---

### 🧪 Quick Test

- Sign in with Clerk  
- View and apply to jobs  
- Upload a resume  
- Try recruiter dashboard (if applicable)

---

### ⚒️ Build for Production

```bash
npm run build     # Build the app
npm run start     # Preview the build
```

## 🛣️ Future Enhancements

- Social sharing for job posts  
- Dark/light mode toggle  
- In-app notifications  
- Functional newsletter integration


## 🙌 Acknowledgments

Opportix was developed as a modern, full-stack job portal — inspired by web development best practices and extended with custom features, a clean UI, and original branding.


## 👥 Developed by

- **Nabiha Tahsin** (ID: 222-115-236)  
- **Juairia Chowdhury** (ID: 222-115-233)
