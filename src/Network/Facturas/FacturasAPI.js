import {Component} from 'react';
import Constants from '../../Utils/Constants';


class FacturaAPI extends Component {

    createFactura(facturaInfo, handlePostFacturaInfo) {
      //let url = "https://regiapppfi2021.herokuapp.com/regiapppfi2021/crearCuota/Esccuota";
      let url = "http://192.168.0.132:8080/regiapppfi2021/crearCuota/Esccuota";
      //let url = "http://172.20.10.8:8080/regiapppfi2021/crearCuota/Esccuota";
      

      let body = JSON.stringify( facturaInfo );
        fetch(url,{
          method: 'POST', 
          headers:{ 'Content-Type': 'application/json'},
          body: body
      })
       .then ((response) => {
            console.log("response",response);
            if(response.status == 200) {
              return response.json();
            } else {
              return null;
            }
        })
        .then (responseData => {
          handlePostFacturaInfo(responseData);
        });
    }

    getFacturas(handleGetFactura)
    {
      //let url = "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerCuotas";
      let url = "http://192.168.0.132:8080/regiapppfi2021/obtenerCuotas";
      //let url = "http://172.20.10.8:8080/regiapppfi2021/obtenerCuotas";
      
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
            handleGetFactura(responseData);
        });
    }
}

export default new FacturaAPI();