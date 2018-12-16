import express from 'express';
const app = express();
import cors from 'cors';
import { join } from 'path';

require('dotenv').config();

app.use(cors({optionsSuccessStatus: 200}));

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});