import express from 'express';

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Link: http://localhost:${PORT}`);
});

export default app;
