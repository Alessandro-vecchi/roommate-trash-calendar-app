
# 🗑️ Roommate Trash Calendar App

A simple, fast, and completely public web application designed to help roommates manage their household trash schedules without the hassle of logging in. Built on top of Next.js and Supabase.

## Features

- **No-Friction Access**: No authentication or logins required. Anyone with the link can view and edit the calendar.
- **Shared Household Schedule**: Assign specific roommates to specific days for taking out the trash.
- **Real-Time Database**: Powered by Supabase to ensure all roommates see the most up-to-date schedule instantly.
- **Modern UI**: Clean, responsive, and accessible interface built with Tailwind CSS and Radix UI primitives.
- **Custom Branding**: Fully customized favicons and PWA icons.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui (Radix UI)
- **Database:** [Supabase](https://supabase.com/) (PostgreSQL)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started locally

Follow these instructions to set up the project on your local machine for development and testing.

### 1. Clone the repository

```bash
git clone https://github.com/Alessandro-vecchi/roommate-trash-calendar-app.git
cd roommate-trash-calendar-app
```

### 2. Install dependencies

This project uses `pnpm` as its package manager.

```bash
pnpm install
```
*(If you don't have pnpm installed, you can use `npm install` instead).*

### 3. Set up Supabase Environment Variables

To connect the app to your database, create a `.env.local` file in the root of your project and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Run the development server

Start the Next.js local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🤝 Contributing
Since this is a simple household app, contributions are mostly for internal roommates! But feel free to fork the repo if you want to create your own household manager. 

## 📝 License
This project is open-source and available under the MIT License.
