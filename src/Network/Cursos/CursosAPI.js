import {Component} from 'react';
import Constants from '../../Utils/Constants';
import HotelInfo from '../../Models/Hotel/HotelInfo';

class CursosAPI extends Component {

    createCurso(cursoInfo, handlePostCursoInfo) {
      let url = "https://regiapppfi2021.herokuapp.com/regiapppfi2021/crearCursos/Esccurso";
      let body = JSON.stringify( cursoInfo );
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
            handlePostCursoInfo(responseData);
        });
    }

    getCursos(handleGetCursos)
    {
        let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerCursos";
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
            handleGetCursos(responseData);
        });
    }

    getAlumnosPorCursos(curso,handleGetAlumnosPorCursos)
    {
        let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerAlumnosPorCursos/" + curso;
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
            handleGetAlumnosPorCursos(responseData);
        });
    }

    getCursoPorId(idcurso,handleGetCursoPorId)
    {
      console.log("API CURSOS");
      console.log(idcurso);
        let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerCursosPorId/" + idcurso;
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
          console.log("RESPONSE DATA");
          console.log(responseData);
            const {numero, division} = responseData;
            const data = {numero, division}; 
           handleGetCursoPorId(data);
           //return data.numero;
        });
    }
}

export default new CursosAPI();