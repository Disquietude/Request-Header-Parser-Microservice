const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

require('dotenv').config();

app.use(cors({optionsSuccessStatus: 200}));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.headers.host,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  });
})

app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});