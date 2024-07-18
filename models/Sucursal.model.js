const db = require("../db/config")
const { DataTypes } = require("sequelize")

//Nombre de la tabla, nombre de las columnas
const SucursalModel = db.define('sucursal', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    direccion: { type: DataTypes.STRING },
    telefono: { type: DataTypes.STRING(15) },
    email: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    idEmpresa: { type: DataTypes.INTEGER, allowNull: false }
});

// SucursalModel.sync()
//     .then(async () => {
//         const [sucursal, created] = await SucursalModel.findOrCreate({
//             where: { id: 1 }, // Cambia esto según tus necesidades
//             defaults: {
//                 nombre: 'Central',
//                 direccion: null,
//                 telefono: null,
//                 email: null,
//                 idEmpresa: 1
//             }
//         });

//         if (created) {
//             console.log("Registro inicial creado:", sucursal.toJSON());
//         } else {
//             console.log("El registro inicial ya existe:", sucursal.toJSON());
//         }
//     })
//     .catch((error) => {
//         console.error("Error al crear el registro inicial:", error);
//     });

module.exports = SucursalModel