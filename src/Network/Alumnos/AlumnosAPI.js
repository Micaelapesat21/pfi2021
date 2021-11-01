import {Component} from 'react';
import Constants from '../../Utils/Constants';

 
class AlumnosAPI extends Component {

    createAlumno(alumnoInfo, handlePostAlumnoInfo) {
      let url = "https://regiapppfi2021.herokuapp.com/regiapppfi2021/crearAlumno/Escalumno";
      //let url = "http://192.168.0.132:8080/regiapppfi2021/crearAlumno/Escalumno";
      let body = JSON.stringify( alumnoInfo );
      console.log("createAlumno: " + alumnoInfo.idTitular);
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
            handlePostAlumnoInfo(responseData);
        });
    }

    getAlumnos(handleGetAlumnos)
    {
        let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerAlumnos";
        //let url =  "http://192.168.0.132:8080/regiapppfi2021/obtenerAlumnos";
        
        console.log(url);
        fetch(url,{
          method: 'GET', 
          headers:{ 'Content-Type': 'application/json'}
      })
        .then ((response) => {
            console.log("response" + response );
            if(response.headers.status !== 404) {
              return response.json();
            } else {

              return null;
            }
        })
        .then (responseData => {
            handleGetAlumnos(responseData);
        });
    }

    deleteAlumno(alumnoInfo,handleDeleteAlumnos)
    {
        //console.log(" API deleteAlumnos: " + alumnoInfo.nombre);
        let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/eliminarAlumno/Escalumno";
        //let url =  "http://192.168.0.132:8080/regiapppfi2021/eliminarAlumno/Escalumno";
        let body = JSON.stringify( alumnoInfo );
        fetch(url,{
          method: 'delete', 
          headers:{ 'Content-Type': 'application/json'},
          body: body
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
          handleDeleteAlumnos(responseData);
        });
    }
}

export default new AlumnosAPI();