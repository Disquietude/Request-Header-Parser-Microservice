const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

require('dotenv').config();

app.use(cors({optionsSuccessStatus: 200}));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.set('trust proxy', true);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    endpoint: '/api/whoami'
  });
});

app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  });
})

app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});