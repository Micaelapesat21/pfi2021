import {Component} from 'react';
import Constants from '../../Utils/Constants';


class TitularesAPI extends Component {

    createTitular(titularInfo, handlePostTitularInfo) {
      let url = "https://regiapppfi2021.herokuapp.com/regiapppfi2021/crearTitular/Esctitular";
      //let url = "http://192.168.0.132:8080/regiapppfi2021/crearTitular/Esctitular";
      
      let body = JSON.stringify( titularInfo );
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
          handlePostTitularInfo(responseData);
        });
    }

    getTitulares(handleGetTiitulares)
    {
        let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerTitulares";
        //let url =  "http://192.168.0.132:8080/regiapppfi2021/obtenerTitulares";
        
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
            handleGetTiitulares(responseData);
        });
    }
}

export default new TitularesAPI();