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
│ └── index.js    # Entry point of the app
├── .editorconfig # Editor configuration
├── .eslintrc     # ESLint configuration
├── .prettierrc   # Prettier configuration
├── package.json  # Scripts and dependencies
└── README.md     # Project description
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
