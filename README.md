# 🧩 Custo

**Custo** adalah sebuah website modern yang dibangun menggunakan teknologi terkini dengan fokus pada performa, skalabilitas, dan kemudahan dalam pengembangan. Proyek ini menggunakan pendekatan modular dan type-safe dengan TypeScript serta App Router dari Next.js.

🔗 **Live Demo:** [https://custo-two.vercel.app](https://custo-two.vercel.app)
---

## 🚀 Tech Stack

| Teknologi       | Deskripsi                                                                 |
|----------------|---------------------------------------------------------------------------|
| **Framework**   | [Next.js](https://nextjs.org/) (App Router)                               |
| **Language**    | [TypeScript](https://www.typescriptlang.org/)                             |
| **Styling**     | [TailwindCSS](https://tailwindcss.com/)                                   |
| **UI Library**  | [shadcn/ui](https://ui.shadcn.com/)                                       |
| **Forms**       | [React Hook Form](https://react-hook-form.com/)                          |
| **Validation**  | [Zod](https://zod.dev/)                                                   |
| **Routing**     | Next.js App Router (folder `app/`)                                        |
| **Deployment**  | [Vercel](https://vercel.com/)                                             |
| **Animation**   | [GSAP (GreenSock Animation Platform)](https://gsap.com/)                 |

---

## 🏗️ Struktur Proyek

```bash
custo/
├── app/                # Routing dan pages menggunakan Next.js App Router
├── components/         # Reusable components (menggunakan shadcn/ui)
├── lib/                # Helper dan utilitas (termasuk zod schemas)
├── styles/             # File styling (Tailwind config, global styles)
├── public/             # Aset statis
├── tsconfig.json       # Konfigurasi TypeScript
├── tailwind.config.ts  # Konfigurasi TailwindCSS
└── README.md


# 1. Clone repository
git clone https://github.com/username/custo.git
cd custo

# 2. Install dependencies
pnpm install
# atau
npm install

# 3. Jalankan di development mode
pnpm dev
# atau
npm run dev


✅ Fitur Utama

✨ Routing dinamis dan nested dengan Next.js App Router

🎨 UI elegan dan modular dengan shadcn/ui dan TailwindCSS

🧩 Validasi form yang kuat dan type-safe dengan Zod

🪄 Animasi interaktif menggunakan GSAP

☁️ Deployment instan dan optimal di Vercel


📦 Deployment
Project ini dideploy menggunakan Vercel.
