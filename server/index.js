const { request } = require("express");
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "softcar",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res)=>{
   const { modelo } = req.body;
   const { marca } = req.body;
   const { tipo } = req.body;

   let SQL = "INSERT INTO carros ( modelo, marca, tipo ) VALUES ( ?,?,? )";

   db.query(SQL, [modelo, marca, tipo], (err, result) => {
    if (err) {
        console.log(err);
    } else {
        res.send(result);
    }
   });
});

app.get("/getCards", (req, res) =>{

    let SQL = "SELECT * from carros";

    db.query(SQL, (err, result) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });

});

app.put("/edit", (req, res) =>{
    const { id } = req.body;
    const { modelo } = req.body;
    const { marca } = req.body;
    const { tipo } = req.body;

    let SQL = "UPDATE carros SET modelo = ?, marca = ?, tipo = ? WHERE idcarros = ?";

    db.query(SQL, [modelo, marca, tipo, id], (err, result) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.delete("/delete/:id", (req, res) => {
    const {id} = req.params;
    let SQL = "DELETE FROM carros WHERE idcarros = ?";
    db.query(SQL, [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, ()=> {
    console.log("Rodando Servidor");
});