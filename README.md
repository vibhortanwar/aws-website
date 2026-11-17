# AWS Student Builder Group - GGSIPU EDC Official Website

Official web platform for the **AWS Student Builder Group** at Guru Gobind Singh Indraprastha University (GGSIPU), East Delhi Campus. Designed with an authentic AWS Management Console theme, 3D interactive graphics, interactive topology explorer, and community telemetry.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **3D Graphics & Animations**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
- **Database & ORM**: [PostgreSQL](https://www.postgresql.org/) with [Prisma](https://www.prisma.io/)
- **Authentication**: [Better Auth](https://www.better-auth.com/)
- **Asset Storage**: [Cloudinary](https://cloudinary.com/)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended) or [Bun](https://bun.sh/)
- [PostgreSQL](https://www.postgresql.org/) database

### 1. Clone & Install Dependencies

```bash
git clone git@github.com:vibhortanwar/aws-website.git
cd aws-website
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and fill in your database and auth credentials:

```bash
cp .env.example .env
```

### 3. Generate Database Client & Run Migrations

```bash
npx prisma generate
npx prisma migrate dev
```

### 4. Run Development Server

```bash
npm run dev
# or with bun:
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the console interface in your browser.

---

## 📁 Project Structure

```
├── prisma/             # Prisma schema and database migrations
├── public/             # Static graphics, SVG badges, and images
└── src/
    ├── actions/        # Server actions (events, teams, leads, alumni)
    ├── app/            # Next.js App Router routes & API endpoints
    │   ├── admin/      # Management dashboard and authentication
    │   ├── alumni/     # Community alumni network showcase
    │   ├── events/     # Hackathons, workshops & sessions
    │   └── teams/      # Technical domain teams
    ├── components/     # UI components
    │   └── console/    # AWS Console layout, CloudShell & topology map
    └── lib/            # Prisma client and auth configuration
```

---

## 📜 Available Scripts

- `npm run dev`: Starts local Next.js development server with Turbopack.
- `npm run build`: Generates Prisma client and creates production bundle.
- `npm run start`: Runs Next.js in production mode.
- `npm run lint`: Runs ESLint checks across the repository.

---

## 🤝 Community & Connect

- **LinkedIn**: [AWS Cloud Clubs at GGSIPU](https://www.linkedin.com/company/aws-cloud-clubs-at-ggsipu/)
- **Instagram**: [@awscloudclubggsipu](https://www.instagram.com/awscloudclubggsipu/)
- **Meetup**: [AWS Cloud Club at GGSIPU](https://www.meetup.com/aws-cloud-club-at-ggsipu/)

---

## ⌨️ Console Shortcuts & CloudShell Commands

### Keyboard Navigation

- `1` - `7`: Direct numeric jumps across Console service modules (Overview, EC2 Compute, EventBridge, S3, CloudWatch, IAM, Deploy)
- `⌘ + K` or `Option + S`: Open global AWS Command Palette & search bar
- `Esc`: Close open modal drawers, menus, and overlays

### Built-in CloudShell Commands

- `help`: Display all available AWS Cloud operations
- `teams` / `ec2`: Inspect technical domain clusters and leads
- `events`: Browse hackathons, workshops, and event stream
- `stats` / `cloudwatch`: Real-time community impact telemetry
- `uptime`: Check campus regional cluster health status
- `join` / `deploy`: Quick access to official WhatsApp & Meetup channels
- `mode [station|topology|stream]`: Toggle console visual presentation mode
- `clear` / `cls`: Reset terminal screen buffer
