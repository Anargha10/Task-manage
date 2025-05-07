# Project Management with Anargha (AnargTasks)

A modern project management application built with Next.js that helps teams organize and track their work using a Kanban board interface. The app provides a visual way to manage tasks and workflows while keeping teams synchronized.

## Features

- **Anargha Board**:
  - Drag-and-drop task management
  - Customizable columns/stages
  - Visual task tracking
  - Task filtering and search

- **Authentication**:
  - Multiple sign-in options (Email, GitHub, Google)
  - Secure user authentication
  - Role-based access control

- **Project Management**:
  - Create and organize multiple projects
  - Assign team members to tasks
  - Set due dates and priorities
  - Track project progress

- **User Profiles**:
  - Customizable user profiles
  - Activity tracking
  - Project participation history


**A full-featured, enterprise-grade task and project management application**
Built with Next.js, Supabase, React-Query, React-Email (Resend), Tailwind CSS, and more.

---



---

## 🎯 About AnargTasks

ProjeX is a modern task and project management app inspired by leading PM tools. It lets teams:

* Create & manage **projects** with custom statuses, sizes, priorities, and labels
* Invite team members via authenticated links and email invitations
* Track **tasks**, comments, and activity logs
* Secure data with Supabase Row-Level Security (RLS) and real-time updates
* Preview, build, and send responsive email templates via **Resend**

---

## 🌐 Live Demo

🔗 [https://your-vercel-domain.vercel.app](https://your-vercel-domain.vercel.app)

(Or deploy your own following the steps below.)

---

## ✨ Features

* **User Authentication** via Supabase (magic links + OAuth providers)
* **Project CRUD** with customizable workflows
* **Invite Flow**:

  * Generate secure invite links
  * Send branded emails (React-Email + Resend)
  * Accept invites and join projects
* **Task Management**: create/update/delete tasks, assign users, set due dates
* **Activity Feed**: real-time logs of project changes (comments, status updates)
* **Team Permissions**:

  * Roles & invitation statuses in `project_members`
  * RLS policies ensure data isolation
* **Rich Text & Mentions** with Tiptap editor (for project READMEs)
* **Virtualized Lists** for ultra-performant tables & boards
* **Responsive UI** with Tailwind CSS & Radix-UI components

---

## 🛠 Tech Stack

| Layer            | Technology                             |
| ---------------- | -------------------------------------- |
| Framework        | Next.js 15                             |
| Styling          | Tailwind CSS, Radix UI, CVA            |
| Data & Auth      | Supabase (PostgreSQL + Auth + Storage) |
| Data Fetching    | @tanstack/react-query                  |
| Email Templates  | React-Email, Resend API                |
| Editor           | Tiptap (Rich text, mentions)           |
| Drag & Drop      | @dnd-kit                               |
| Charts           | Recharts                               |
| State Management | Zustand                                |
| Utilities        | Zod (schema validation), date-fns      |

---

## 🏁 Getting Started

### Prerequisites

* Node.js v18+
* npm or yarn
* Supabase CLI (optional, for local development)

### Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/Anargha10/task-manage.git
   cd task-manage
   ```

