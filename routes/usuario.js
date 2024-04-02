const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getUsuario, postUsuario, putUsuario, deleteUsuario } = require('../controllers/usuario')


route.get('/', getUsuario)

route.post('/', postUsuario)

route.put('/:Id_usuario', putUsuario)

route.delete('/:Id_usuario', deleteUsuario)



module.exports = route 