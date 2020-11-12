import {Component} from 'react';


class CobranzasAPI extends Component {

    createTitular(cobranzaInfo, handlePostCobranzaInfo) {
      let url = "https://integracion-escuela.herokuapp.com/escuelabackend/crearCuota/Esccuota";
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
        let url =  "https://integracion-escuela.herokuapp.com/escuelabackend/obtenerCuotas";
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
}

export default new CobranzasAPI();