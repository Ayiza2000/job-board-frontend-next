# 🚀 Job Board Frontend (Next.js)

This is the **Next.js (App Router)** frontend for your Job Board application, built with:

- React + TypeScript  
- App Router & Layouts  
- Tailwind CSS for styling  
- Framer Motion for smooth UI transitions  
- Axios + `NEXT_PUBLIC_API_URL` for API calls  

---

## 📦 Getting Started

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd frontend
npm install

username: admin
password: changeme


frontend/
├── app/
│   ├── login/page.tsx         # Login screen
│   ├── jobs/                  # Job listing and details
│   │   └── [id]/page.tsx      # Dynamic job details page
│   └── layout.tsx             # Global layout
├── src/
│   ├── api/                   # Axios client & hooks (`useJobs`)
│   ├── components/            # Shared UI components (e.g. JobForm)
│   └── types/                 # Type definitions (e.g. Job, JobInput)
├── public/                    # Static assets
├── styles/                    # Global styles (Tailwind)
├── .env.local                 # Environment variables
└── next.config.js             # Next.js config
