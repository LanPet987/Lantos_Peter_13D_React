const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();
const {db} = require('./db');

app.use(express.json());


const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
  res.send('Fut a backend');
});
app.get('/regiok', (req, res) => {
    const sql = "SELECT * FROM `regiok`";
    db.query(sql, (err, result) => {
      if (err) { return res.json(err); }
      return res.json(result);
    })
  });

app.listen(port, () => {
  console.log("A szerver fut a 3000 porton.");
});