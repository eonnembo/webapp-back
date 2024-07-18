require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const path = require("path");
const db = require("./db/config");
const authRouter = require('./routes/auth.routes');
const empresaRouter = require('./routes/empresa.routes');
const usuarioRouter = require('./routes/usuario.routes');
const clienteRouter = require('./routes/cliente.routes');
const sucursalRouter = require('./routes/sucursal.routes');
const planRouter = require('./routes/plan.routes');
const diasHorariosRouter = require('./routes/dias_horarios.routes');
const servicioRouter = require('./routes/servicio.routes');
const pagoRouter = require('./routes/pago.routes');

// Directorio Público
app.use(express.static('public'));

// CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', authRouter);
app.use('/api/empresa', empresaRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/cliente', clienteRouter);
app.use('/api/sucursal', sucursalRouter);
app.use('/api/plan', planRouter);
app.use('/api/dias-horarios', diasHorariosRouter);
app.use('/api/servicio', servicioRouter);
app.use('/api/pago', pagoRouter);

// Manejar demás rutas
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
});

app.listen(PORT, () => {
    conexionDB();
    console.log(`El servidor corriendo en puerto ${PORT}`);
});

// Conexión a la DB
const conexionDB = async () => {
    try {
        await db.authenticate();
        console.log("Conexión OK a la DB");

        // Sincroniza los modelos con la base de datos
        await db.sync();
        console.log("Tablas sincronizadas correctamente.");
    } catch (error) {
        throw new Error(`Error a la hora de inicializar DB ${error}`);
    }
};