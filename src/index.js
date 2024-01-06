//Módulo que me permite trabajar con las variables de entorno (.env)
import 'dotenv/config';
import './baseDeDatos.js';
import servidor from './servidor.js';

//Puerto por donde va a excuchar las solicitudes el servidor
const puerto = servidor.get('port');

//Método Listen que permite la ejecución puesta en marcha del servidor
servidor.listen(puerto, () => {
    console.log(`Servidor ejecutandose en el puerto: ${puerto}`);
});