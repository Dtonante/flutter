const {Schema, model, trusted} = require('mongoose')

const UsuarioSchema = ({
    Id_usuario:{
        type: Number,
        unique:true,
        required:[true, 'El id del usuario es necesario']
    },

    Nombre_usuario:{
        type:String,
        unique: false,
        required:[true, 'El nombre del usuario'],
    },

    Correo_electronico:{
        type:String,
        unique: true,
        required:[true, 'El correo del usuario es necesario'],
    },

    Estado_usuario:{
        type:String,
        unique: false,
        required:[true, 'El estado del usuario es necesario'],
    },
    Opcervaciones:{
        type:String,
        unique: false,
        required:[true, 'las opcervaciones del usuario es necesario'],
    },

    Contrasena_usuario:{
        type:String,
        unique: false,
        required:[true, 'La contraseña es necesaria'],
    },

})


module.exports = model('Usuario', UsuarioSchema)