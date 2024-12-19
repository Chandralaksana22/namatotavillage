import { handler } from './build/index.js';
import express from 'express';

const app = express();
const port = process.env.PORT || 4001;

app.use(handler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
