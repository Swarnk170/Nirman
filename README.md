<div align="center">

<br/>

# 🏗️ Nirman

### AI-Powered Visual Website Builder

**Build production-ready websites visually — no complex coding required.**

<br/>

</div>

---

## 📌 Overview

**Nirman** is a modern SaaS web application that empowers users to build websites visually through an intelligent, component-driven editing experience. It bridges the gap between no-code simplicity and developer-grade control — combining a structured component editor with real-time preview and AI-assisted customization.

> *Nirman (निर्माण) — meaning "construction" or "creation" in Nepali/Sanskrit — reflects the project's core purpose: building things from the ground up, intelligently.*

---

## ✨ Core Features

| Feature | Description |
|---|---|
| 🖱️ **Click-to-Edit** | Click any component to open its dedicated editing panel |
| ⚡ **Instant Updates** | Content and style changes are reflected in real time — no page reloads |
| 🤖 **AI / Prompt-Based Editing** | Describe changes in plain language and let the AI handle them |
| 📱 **Responsive Preview** | Live preview across Desktop, Tablet, and Mobile viewports |
| 📦 **Project Export** | Download the complete website project at any time |
| 🔒 **Secure Auth** | Session management via `better-auth` — no extra state libraries needed |

---

## 🧠 Tech Stack

### Frontend
- **React.js** — Component-based UI
- **Tailwind CSS** — Utility-first styling
- **Lucide React** — Icon library

> Authentication and session state are managed server-side via **better-auth**, eliminating the need for a frontend state management library.

### Backend
- **Node.js** + **Express.js** — REST API server

### Database
- **Prisma ORM** — Type-safe database access
- **PostgreSQL** (via [Neon DB](https://neon.tech)) — Scalable serverless Postgres

### Authentication
- **better-auth** — Secure, session-based authentication

---

## 🏗️ Architecture Overview

### Component-Based Editor
Every UI element in Nirman is a structured object stored in a JSON component tree. This enables dynamic, isolated updates without full page reloads and makes the editor highly extensible.

### Editing System
Rather than drag-and-drop (which introduces layout complexity), Nirman uses a **click-to-edit** model:
1. Click a component → opens its editing panel
2. Modify content or styles → reflected instantly in the canvas
3. Use the AI prompt bar → describe a change and apply it automatically

### Data Storage
- Website layouts are persisted as **JSON component trees**
- Managed via **Prisma ORM** for type-safe, schema-driven access
- Hosted on **Neon PostgreSQL** for serverless scalability

### Authentication
`better-auth` handles all user sessions securely on the server side, keeping the frontend lean and stateless.

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js `v18+`
- A [Neon DB](https://neon.tech) PostgreSQL connection string

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nirman.git
cd nirman
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL="your_neon_postgres_connection_string"
```

### 4. Initialize the Database

```bash
npx prisma db push
```

### 5. Start the Backend Server

```bash
npm run server
```

### 6. Start the Frontend

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or your configured Vite port).

---

## 🔌 API Reference

### `POST /api/register`
Registers a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

---

### `POST /api/websites`
Creates a new website instance with an initialized root component structure.

**Request Body:**
```json
{
  "name": "My Portfolio",
  "userId": "user_id_here"
}
```

---

### `PUT /api/pages/:id`
Updates a page's component tree with the latest JSON structure.

**Request Body:**
```json
{
  "components": [ ...component tree... ]
}
```

---

## 📁 Project Structure

```
nirman/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Editor, Preview, Panels
│   │   ├── pages/          # Route-level pages
│   │   └── main.jsx
├── server/                 # Express backend
│   ├── routes/             # API route handlers
│   ├── prisma/             # Prisma schema & migrations
│   └── index.js
├── .env
├── package.json
└── README.md
```

> Adjust this structure to match your actual folder layout.

---

## 🚀 Roadmap

- [ ] Drag-and-drop layout support
- [ ] Component library / template marketplace
- [ ] Custom domain publishing
- [ ] Collaboration (multi-user editing)
- [ ] Version history & rollback
- [ ] Extended AI prompt capabilities (full-page generation)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Swarn Kumar Chaudhary**
Computer Engineering Student — IOE WRC, Tribhuvan University

GitHub: [your-username](https://github.com/your-username)

---

<div align="center">
  <sub>Built with focus, curiosity, and a vision to make the web more accessible.</sub>
</div>
