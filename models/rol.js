const {Schema, model, trusted} = require('mongoose')

const RolSchema = ({
    Id_rol :{
        type: Number,
        unique:false,
        required:[true, 'El Id del rol es necesario']
    },

    Rol:{
        type:String,
        unique: false,
        required:[true, 'El nombre del rol es necesario'],
    },

    
})


module.exports = model('Rol', RolSchema)