import {Component} from 'react';
import Constants from '../../Utils/Constants';
import HotelInfo from '../../Models/Hotel/HotelInfo';

class EmpleadosAPI extends Component {

    createEmpleado(empleadoInfo, handlePostEmpleadoInfo) {
     // let url = "https://regiapppfi2021.herokuapp.com/regiapppfi2021/crearEmpleado/Escempleado";
      let url = "http://192.168.0.132:8080/regiapppfi2021/crearEmpleado/Escempleado";
      
      let body = JSON.stringify( empleadoInfo );
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
            handlePostEmpleadoInfo(responseData);
        });
    }

    getEmpleados(handleGetEmpleado)
    {
       // let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerEmpleados"; 
        let url =  "http://192.168.0.132:8080/regiapppfi2021/obtenerEmpleados";
        fetch(url,{
          mode: 'cors',
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
            handleGetEmpleado(responseData);
        });
    }
}

export default new EmpleadosAPI();