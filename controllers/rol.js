const {response} = require('express')

Role = require('../models/rol')

const getRol = async(req, res) => {
    const roles = await Role.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: roles
    })
}

const postRol = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const rol = new Role(datos) //Instanciar el objeto
        await rol.save()//Guardar en la base de dato  
        console.log(rol) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putRol = async(req, res) =>{
    const { Id_rol, Rol} = req.body;
    try {
        const rol = await Role.findOneAndUpdate(
            { Id_rol: Id_rol },
            { Rol: Rol },
            { new: true }
        );
        if (!rol) {
            return res.status(404).json({ error: 'Rol no encontrado' });
        }
        res.json({
            msg: 'Actualizacion exitosa',
            rol: rol
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar el Rol' });
    }
    
}

const deleteRol = async(req, res) =>{
    const { Id_rol } = req.params;
    let mensaje = '';
    try {
        const rol = await Role.findOneAndDelete({ Id_rol: Id_rol }); 
        mensaje = 'Eliminación exitosa';
        res.json({
            msg: mensaje,
            evento: rol 
        });
    } catch (error) {
        console.log(error);
        mensaje = 'Error al eliminar el Rol';
        res.status(500).json({ error: mensaje });
    }
    
}


module.exports = {
    getRol,
    postRol,
    putRol,
    deleteRol
}