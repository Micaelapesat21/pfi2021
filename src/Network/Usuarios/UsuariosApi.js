import {Component} from 'react';
import Constants from '../../Utils/Constants';
import HotelInfo from '../../Models/Hotel/HotelInfo';

class UsuariosAPI extends Component {

    createUsuarios(usuariosInfo, handlePostUsuariosInfo) {
     // let url = "https://regiapppfi2021.herokuapp.com/regiapppfi2021/crearUsuarios/Escusuarios";
      let url = "http://192.168.0.132:8080/regiapppfi2021/crearUsuarios/Escusuarios";
      
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
       // let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerUsuarios";
        let url =  "http://192.168.0.132:8080/regiapppfi2021/obtenerUsuarios";
        
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


    getNombreUsuario(usuario, handleGetNombreUsuarios)
    {
       // let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerNombreUsuario/" + usuario;
        let url =  "http://192.168.0.132:8080/regiapppfi2021/obtenerNombreUsuario/" + usuario;
        console.log(url)
        fetch(url,{
          method: 'GET', 
          headers:{ 'Content-Type': 'application/json'}
      })
        .then ((response) => {
            console.log("estoy en el response ")
            //console.log("estoy en el response + "  + response.json())
            if(response.headers.status !== 404) {
              return response.json();
            } else {
              console.log("estoy en el else")
              return null;
            }
        })
        .then (responseData => {
          handleGetNombreUsuarios(responseData);
        });
    }

}

export default new UsuariosAPI();