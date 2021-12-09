import {Component} from 'react';

class RetirosAPI extends Component {

    getRetiros(handleGetRetiros)
    {
       // let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerRetiros";
        let url =  "http://192.168.0.132:8080/regiapppfi2021/obtenerRetiros";
        //let url =  "http://172.20.10.8:8080/regiapppfi2021/obtenerRetiros";
        
        
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
          handleGetRetiros(responseData);
        });
    }
   
    getRetirosPorAlumno(idalumno,handleGetRetirosPorId)
    {
     

       // let url =  "https://regiapppfi2021.herokuapp.com/regiapppfi2021/obtenerRetirosPorAlumno/" + idalumno;
        let url =  "http://192.168.0.132:8080/regiapppfi2021/obtenerRetirosPorAlumno/" + idalumno;
       // let url =  "http://172.20.10.8:8080/regiapppfi2021/obtenerRetirosPorAlumno/" + idalumno;
        
        
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
       
            handleGetRetirosPorId(responseData);
       
        });
    }

}

export default new RetirosAPI();