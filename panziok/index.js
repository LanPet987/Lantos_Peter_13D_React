const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql2');

const cors = require('cors');
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'fogado',
    port: 3307
});

// A) feladat : Hét törpe fogadó
app.get('/', (req, res) => {
    const sql = "SELECT szobak.sznev, szobak.agy FROM szobak";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({err});
        }
        res.json(results);
    });
});

// B) feladat : Szobák kihasználtsága






app.listen(port, () => {
    console.log(`A szerver fut a ${port} porton`);
});