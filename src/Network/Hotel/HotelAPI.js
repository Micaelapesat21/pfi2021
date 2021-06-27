
import {Component} from 'react';
import Constants from '../../Utils/Constants';
import CobroInfo from '../../Models/Hotel/HotelInfo';

class HotelAPI extends Component {

    postHotelInfo(handlePostHotelInfo) {
     // let url =  Constants.BASE_URL + '/api/v1.0/hoteles';
     let url =  Constants.BASE_URL + '/regiapppfi2021/obtenerUsuarios' 
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
          handlePostHotelInfo(responseData);
        });
    }

    getHotelInfo(email, handleGetHotelInfo)
    {
      console.log('ERROOOOOOOOOOOR A' + email);
      // prueba
      let url =  'https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerEmpleados';
      
      //    let url =  'https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerEmpleado?correo=anixg89@gmail.com';
      // let url =  'https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerUsuario?email=' + email;
       
      //let url =  Constants.BASE_URL + '/regiapppfi2021/obtenerUsuario?email=' + email;
      
      //  let url =  Constants.BASE_URL + '/api/v1.0/hoteles?email=' + email;
      //anterior
      console.log('ERROOOOOOOOOOR 1');
        fetch(url,{
          method: 'GET', 
          headers:{ 'Content-Type': 'application/json'}
      })
        .then ((response) => {
            console.log('ERROOOOOOOOOOR FETCH  ERRO: ' + response.headers.status);
            console.log("response",response);
            if(response.headers.status !== 404) {
              console.log('ERROOOOOOOOOOR 2');
              return response.json();
            } else {
              return null;
            }
        })
        .then (responseData => {
            handleGetHotelInfo(responseData);
        });
        
 
    }

}

export default new HotelAPI();
