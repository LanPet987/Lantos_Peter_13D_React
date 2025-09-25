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

app.get('/kihasznaltsag', (req, res) => {
 const sql = 'SELECT foglalasok.szoba AS "Szoba", foglalasok.fo AS "Vendegek", DATEDIFF(foglalasok.tav,foglalasok.erk) AS "Éjszakák" FROM foglalasok ORDER BY foglalasok.szoba ASC';
 db.query(sql, (err, results) => {
    if (err) {
        return res.status(500).json({err});
    }
    res.json(results);
 });
})

// C) feladat : A választott szoba foglaltsága

app.get ('/foglalt' , (req, res) => {
    const sql = 'SELECT foglalasok.szoba AS "Szoba", vendegek.vnev AS "Vendég", foglalasok.erk AS "Érkezés", foglalasok.tav AS "Távozás" FROM foglalasok INNER JOIN vendegek ON foglalasok.vendeg = vendegek.vsorsz ORDER BY vendegek.vnev ASC';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({err});
        }
        res.json(results);
    });
});



app.listen(port, () => {
    console.log(`A szerver fut a ${port} porton`);
});