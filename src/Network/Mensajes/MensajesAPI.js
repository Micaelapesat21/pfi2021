import {Component} from 'react';

class MensajesAPI extends Component {

    getMensajes(handleGetMensajes)
    {
 
        let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerMensajes";
        //let url =  "http://192.168.0.132:8080/regiapppfi2021/obtenerMensajes";
        fetch(url,{
          method: 'GET', 
          headers:{ 'Content-Type': 'application/json'}
      })
        .then ((response) => {
            console.log("response",response);
            if(response.headers.status !== 404) {
              return response.json();
            } else {
              return null;
            }
        })
        .then (responseData => {
          handleGetMensajes(responseData);
        });
    }


    crearNotificacion(notificacionInfo, handlePostCursoInfo) {
       let url = "https://regiapppfi2021.herokuapp.com/regiapppfi2021/crearNotificacion/Escnotificacion";
       //let url = "http://192.168.0.132:8080/regiapppfi2021/crearNotificacion/Escnotificacion";
            /* body
                    usuario: req.body.usuario,
                    leida: req.body.leida, 
                    texto: req.body.texto,
                    alumno: req.body.alumno,
                    fecha: req.body.fecha
            */
       let body = JSON.stringify( notificacionInfo );
       console.log("Create Notification Body:" + body);
         fetch(url,{
           method: 'Post', 
           headers:{ 'Content-Type': 'application/json'},
           body: body
       })
        .then ((response) => {
             console.log("response",response);
             return response.json();
         })
         .then (responseData => {
             handlePostCursoInfo(responseData);
         });
     }
   
     actualizarMensaje(idMensaje, handlePostActualizarMensaje) {
       let url = "https://regiapppfi2021.herokuapp.com/regiapppfi2021/actualizarMensaje/Escmensaje/" + idMensaje;
       //let url = "http://192.168.0.132:8080/regiapppfi2021/actualizarMensaje/Escmensaje/" + idMensaje;
         fetch(url,{
           method: 'Post', 
           headers:{ 'Content-Type': 'application/json'}
       })
        .then ((response) => {
             console.log("response",response);
             return response.json();
         })
         .then (responseData => {
          handlePostActualizarMensaje(responseData);
         });
     }

     
}



export default new MensajesAPI();