# template-nodejs-express

**A boilerplate template for creating new Node.js projects using Express.**
This repository provides a minimal project structure for quickly starting backend development with linting, code formatting, and automatic server restarts.

## 📦 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Nodemon](https://nodemon.io/)
- `.editorconfig` for consistent code formatting across editors

## 🏗️ Project Structure

```
template-nodejs-express/
├── src/
│   ├── constants/        # App constants and settings
│   ├── controllers/      # Request handlers (controllers)
│   ├── db/               # Database config and models
│   ├── middlewares/      # Custom middleware functions
│   ├── routers/          # API routes and endpoints
│   ├── services/         # Business logic functions
│   ├── templates/        # Email or view templates
│   ├── utils/            # Helper and utility functions
│   │   └── getEnvVar.js  # Load and check env variables
│   ├── validation/       # Input validation logic
│   ├── server.js         # Server setup and config
│   └── index.js          # App entry point
├── .editorconfig         # Editor formatting rules
├── .env                  # Local environment variables
├── .env.example          # Example env variables
├── .gitignore            # Ignored files and folders
├── .prettierrc           # Prettier formatting config
├── eslint.config.mjs     # ESLint rules and setup
├── package-lock.json     # Auto-generated lockfile
├── package.json          # Project metadata and scripts
└── README.md             # Project documentation
```

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/PushEax/template-nodejs-express.git
cd template-nodejs-express

# Install dependencies
npm install

# Start the app in development mode with automatic restarts
npm run dev

# Start the app in production mode
npm start

# Run code linting with ESLint
npm run lint

```

## ⚙️ Available Scripts

| Script         | Description                                      |
| -------------- | ------------------------------------------------ |
| `npm run dev`  | Starts the app with `nodemon` for auto-reloading |
| `npm start`    | Starts the app with `node`                       |
| `npm run lint` | Lints JavaScript files using `eslint`            |

## 📁 .editorconfig

```ini
root = true

[*]
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## 🧑‍💻 Author

**PushEax**

## 📝 License

This project is licensed under the ISC license. See LICENSE for details.

> 🔁 This template is designed for reusability in Node.js backend projects. Just fork or clone and start building!
