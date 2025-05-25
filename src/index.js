import express from 'express';
import pino from 'pino-http';

const PORT = 3000;

const app = express();

app.use(pino({ transport: { target: 'pino-pretty' } }));

// Вбудований у express middleware для обробки (парсингу) JSON-даних у запитах
// наприклад, у запитах POST або PATCH
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Not found',
  });
});

// Middleware для обробких помилок (приймає 4 аргументи)
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Link: http://localhost:${PORT}`);
});

export default app;
