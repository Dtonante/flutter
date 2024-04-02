const {response} = require('express');

Usuario = require('../models/usuario')

const getUsuario = async(req, res) => {
    const usuarios = await Usuario.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: usuarios
    })
}

const postUsuario = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const usuario = new Usuario(datos) //Instanciar el objeto
        await usuario.save()//Guardar en la base de dato  
        console.log(usuario) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const mongoose = require('mongoose');
const putUsuario = async(req, res) =>{
    const { Id_usuario, Nombre_usuario, Correo_electronico, Estado_usuario, Opcervaciones, Contrasena_usuario} = req.body;
    try {
        const usuario = await Usuario.findOneAndUpdate(
            { Id_usuario: Id_usuario }, // Utiliza el campo Id_usuario para buscar
            { Nombre_usuario, Correo_electronico, Estado_usuario, Opcervaciones, Contrasena_usuario },
            { new: true }
        );
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json({
            msg: 'Actualización exitosa',
            usuario: usuario
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar usuario' });
    }
}



const deleteUsuario = async(req, res) =>{
    const { Id_usuario } = req.params; 
    let mensaje = '';
    try {
        const usuario = await Usuario.findOneAndDelete({ Id_usuario: Id_usuario }); // Utiliza el ID para eliminar
        mensaje = 'Eliminación exitosa';
        res.json({
            msg: mensaje,
            usuario: usuario // Devuelve el documento eliminado
        });
    } catch (error) {
        console.log(error);
        mensaje = 'Error al eliminar usuario';
        res.status(500).json({ error: mensaje });
    }
    
}


module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}