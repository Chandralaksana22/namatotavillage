const express = require('express');
const { handler } = require('./build/index.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(handler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
