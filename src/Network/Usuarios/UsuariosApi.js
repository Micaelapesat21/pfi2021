import {Component} from 'react';
import Constants from '../../Utils/Constants';
import HotelInfo from '../../Models/Hotel/HotelInfo';

class UsuariosAPI extends Component {

    createUsuarios(usuariosInfo, handlePostUsuariosInfo) {
      let url = "https://regiapppfi2021.herokuapp.com/regiapppfi2021/crearUsuarios/Escusuarios";
      let body = JSON.stringify( usuariosInfo );
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
            handlePostUsuariosInfo(responseData);
        });
    }

    getUsuarios(handleGetUsuarios)
    {
        let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerUsuarios";
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
            handleGetUsuarios(responseData);
        });
    }
}

export default new UsuariosAPI();