import {Component} from 'react';

class CertificadosAPI extends Component {

    getCertificados(handleGetCertificados)
    {
        let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerCertificados";
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
          handleGetCertificados(responseData);
        });
    }
   
    getCertificadosPorAlumno(idalumno,handleGetCertificadoPorId)
    {
      console.log("API CERTIFICADOS");
      console.log(idalumno);

        let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerCertificadosPorAlumno/" + idalumno;
        fetch(url,{
          method: 'GET', 
          headers:{ 'Content-Type': 'application/json'}
       })
        .then ((response) => {
            console.log("response image",response);
            if(response.headers.status !== 404) {
              return response.json();
            } else {
              return null;
            }
        })
        .then (responseData => {
          console.log("RESPONSE DATA");
          console.log(responseData);
            //const {numero, division} = responseData;
            //const data = {numero, division}; 
            handleGetCertificadoPorId(responseData);
           //return data.numero;
        });
    }



    getImagenS3(datoImagen,handleGetImagen)
    {
      console.log("API CERTIFICADOS");
      console.log(datoImagen); 
      
        let url =  "http://172.20.10.8:8080/regiapppfi2021/obtenerImagenS3"
        fetch(url,{
          method: 'Post', 
          headers:{ 'Content-Type': 'application/json'}, 
          body: JSON.stringify(datoImagen)
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
            handleGetImagen(responseData);    
        });
    }
}

export default new CertificadosAPI();