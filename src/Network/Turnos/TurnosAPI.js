import {Component} from 'react';

class TurnosAPI extends Component {
    getTurnos(handleGetTurnos)
    {
        //let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerTurnos";
        let url =  "http://192.168.0.132:8080/regiapppfi2021/obtenerTurnos";
        
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
            handleGetTurnos(responseData);
        });
    }
}

export default new TurnosAPI();