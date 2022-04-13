const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');
const routes = require('./src/routes/xis.route')

app.use('/xis', routes)
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
