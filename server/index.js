require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const db = require("./db/config");
const authRouter = require('./routes/auth.routes');
const usuarioRouter = require('./routes/usuario.routes');
const empresaRouter = require('./routes/empresa.routes');

// Directorio Público
app.use(express.static('public'));

// CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', authRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/empresa', empresaRouter);

app.listen(PORT, () => {
    conexionDB();
    console.log(`El servidor corriendo en puerto ${PORT}`);
})

//Conexión a la DB
const conexionDB = async () => {
    try {
        await db.authenticate();
        console.log("Conexión OK a la DB");
    } catch (error) {
        throw new Error(`Error a la hora de inicializar DB ${error}`);
    }
}


