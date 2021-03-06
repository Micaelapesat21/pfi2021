import {Component} from 'react';
//import Constants from '../../Utils/Constants';
import Constants from '../../Componentes/Admin/Constantes'

class AsistenciasAPI extends Component {

    createAsistencia(asistenciaInfo, handlePostAsistenciaInfo) {
      //let url = "https://regiapppfi2021.herokuapp.com/regiapppfi2021/crearAlumno/Escalumno";
      let url = "http://192.168.0.132:8080/regiapppfi2021/crearAlumno/Escalumno";
      //let url = "http://172.20.10.8:8080/regiapppfi2021/crearAlumno/Escalumno";
    
      let body = JSON.stringify( asistenciaInfo );
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
            handlePostAsistenciaInfo(responseData);
        });
    }

// Trae de mysql
    getAsistencias(handleGetAsistencias)
    {
        let url =  "http://192.168.0.132/TEST/asistencia-regiapp-rfid/get_alumnos_attencande.php"; 
        //let url =  "http://172.20.10.8/TEST/asistencia-regiapp-rfid/get_alumnos_attencande.php"; 
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
            handleGetAsistencias(responseData);
        });
    }
    
}

export default new AsistenciasAPI();