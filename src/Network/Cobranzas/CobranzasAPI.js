import {Component} from 'react';


class CobranzasAPI extends Component {

    createCobranza(cobranzaInfo, handlePostCobranzaInfo) {
      //let url = "https://regiapppfi2021.herokuapp.com/regiapppfi2021/crearCuota/Esccuota";
      let url = "http://192.168.0.132:8080/regiapppfi2021/crearCuota/Esccuota";
      //let url = "http://172.20.10.8:8080/regiapppfi2021/crearCuota/Esccuota";
      let body = JSON.stringify( cobranzaInfo );
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
          handlePostCobranzaInfo(responseData);
        });
    }

    getCobranzas(handleGetCobranzas)
    {
        //let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerCuotas";
        let url =  "http://192.168.0.132:8080/regiapppfi2021/obtenerCuotas";
        //let url =  "http://172.20.10.8:8080/regiapppfi2021/obtenerCuotas";
        
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
            handleGetCobranzas(responseData);
        });
    }

    postTarjeta(cardInfo, handlePostTarjeta) {
      //Change URL to integrate with Cards
      let url = "http://52.146.29.128/swagger/index.html";
      let body = JSON.stringify( cardInfo );
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
          handlePostTarjeta(responseData);
        });
    }


    getPagos(handleGetPagos)
    {
        // let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerPagos";
        let url =  "http://192.168.0.132:8080/regiapppfi2021/obtenerPagos";
        //let url =  "http://172.20.10.8:8080/regiapppfi2021/obtenerPagos";
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
          handleGetPagos(responseData);
        });
    }
}

export default new CobranzasAPI();