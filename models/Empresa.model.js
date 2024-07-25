const db = require("../db/config")
const { DataTypes } = require("sequelize")

//Nombre de la tabla, nombre de las columnas
const EmpresaModel = db.define('empresa', {
    img: { type: DataTypes.BLOB },
    nombre: { type: DataTypes.STRING, allowNull: false },
    cuit: { type: DataTypes.STRING(13) },
    telefono: { type: DataTypes.STRING(15) },
});

EmpresaModel.sync()
    .then(async () => {
        const [empresa, created] = await EmpresaModel.findOrCreate({
            where: { id: 1 }, // Cambia esto según tus necesidades
            defaults: {
                nombre: 'Mi empresa',
                cuit: null,
                telefono: null,
            }
        });

        if (created) {
            console.log("Registro inicial creado:", empresa.toJSON());
        } else {
            console.log("El registro inicial ya existe:", empresa.toJSON());
        }
    })
    .catch((error) => {
        console.error("Error al crear el registro inicial:", error);
    });

module.exports = EmpresaModel