const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const db = require("./db/config.js");
const authRouter = require('./routes/auth.routes.js');

// CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', authRouter);

// app.get("/", ( req, res ) => {
//     res.json({
//         ok: true,
//         msg: 'Todo salió bien!',
//         uid: 1234
//     })
// })

//Conexión a la DB
const conexionDB = async () => {
    try {
        await db.authenticate();
        console.log("Conexión OK a la DB");
    } catch (error) {
        console.log(`El error es: ${error}`);
    }
}

app.listen(PORT, () => {
    conexionDB();
    console.log(`El servidor corriendo en puerto ${PORT}`);
})
