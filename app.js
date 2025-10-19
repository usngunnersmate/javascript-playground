const express = require('express');
const logger = require('./loggerMiddleware');

const app = express();

app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello IFT 458!');
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
