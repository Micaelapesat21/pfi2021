
import {Component} from 'react';
import Constants from '../../Utils/Constants';
import CobroInfo from '../../Models/Escuela/EscuelaInfo';

class EscuelaAPI extends Component {

    postEscuelaInfo(handlePostEscuelaInfo) {
      
     let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerUsuarios"; 
     //let url =  "http://192.168.0.132:8080/regiapppfi2021/obtenerUsuarios"; 
     let hotelData = CobroInfo.getInstance().toJson();
        fetch(url,{
          method: 'PUT', 
          headers:{ 'Content-Type': 'application/json'},
          body: JSON.stringify( hotelData )
      })
       .then ((response) => {
            console.log("response",response);
            return response.json();
        })
        .then (responseData => {
          handlePostEscuelaInfo(responseData);
        });
    }

    getEscuelaInfo(email, handleGetEscuelaInfo)
    {
      
  
      let url =  'https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerEmpleados';
      //let url =  'http://192.168.0.132:8080/regiapppfi2021/obtenerEmpleados';
      
        fetch(url,{
          method: 'GET', 
          headers:{ 'Content-Type': 'application/json'}
      })
        .then ((response) => {
            
            if(response.headers.status !== 404) {
            
              return response.json();
            } else {
              return null;
            }
        })
        .then (responseData => {
          handleGetEscuelaInfo(responseData);
        });
        
 
    }

}

export default new EscuelaAPI();
