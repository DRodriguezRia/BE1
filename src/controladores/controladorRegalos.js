import ModeloRegalo from '../modelos/modeloRegalos.js';


//CRUD
const ControladorRegalos = {
    crearRegalo: async (solicitud, respuesta) => {
        try {
            const nuevoRegalo = new ModeloRegalo(solicitud.body);
            const regaloCreado = await nuevoRegalo.save();
            if (regaloCreado._id) {
                respuesta.json({
                    resultado: 'bien',
                    mensaje: 'regalo creado',
                    datos: regaloCreado._id,
                })
        }
    }catch (err) {
        respuesta.json({
            resultado: 'mal',
            mensaje: 'ocurrió un error',
            datos: null,
        });}
    },
    leerRegalos: async (solicitud, respuesta) => {
        try {
            const todosLosRegalos = await ModeloRegalo.find();
            respuesta.json({
                resultado: 'bien',
                mensaje: 'todos los regalos',
                datos: todosLosRegalos,
            });
        } catch (err) {
            respuesta.json ({
                resultado: 'mal',
                mensaje: 'ocurrió un error',
                datos: null,
            })
        }
    },
    leerRegalo: async (solicitud, respuesta) => {
        try {
            const regalo = await ModeloRegalo.findById(solicitud.paras.id);
            respuesta.json ({
                resultado: 'bien',
                mensaje: 'regalo leido',
                datos: regalo._id,
            })
        } catch (err) {
            respuesta.json ({
                resultado: 'mal',
                mensaje: 'Ocurrió un error',
                datos: null,
            })
        }
    },
    actualizarRegalo: async (solicitud, respuesta) => {
        try {
            const actualizado = await ModeloRegalo.findByIdAndUpdate(
                solicitud.params.id,
                solicitud.body
            );
            respuesta.json ({
                resultado: 'bien',
                mensaje: 'Regalo Actualizado',
                datos: actualizado._id,
            })
        } catch (err) {
            respuesta.json ({
                resultado: 'mal',
                mensaje: 'Ocurrió un error',
                datos: null,
            })
        }
    },
    eliminarRegalo: async (solicitud, respuesta) => {
        try {
            const eliminado = await ModeloRegalo.findByIdAndDelete(
                solicitud.params.id
            )
            respuesta.json ({
                resultado: 'bien',
                mensaje: 'Regalo Eliminado',
                datos: eliminado._id,
            })
        } catch (err) {
            respuesta.json ({
                resultado: 'Mal',
                mensaje: 'Ocurrió un error',
                datos: enull,
            })
        }
    }
}

export default ControladorRegalos;
