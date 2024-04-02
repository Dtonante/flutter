const {Router} = require('express')

const route = Router()

const { getRol, postRol, putRol, deleteRol } = require('../controllers/rol')

route.get('/', getRol)

route.post('/', postRol)

route.put('/:Id_rol', putRol)

route.delete('/:Id_rol', deleteRol)



module.exports = route 