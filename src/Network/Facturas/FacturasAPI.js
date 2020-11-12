import {Component} from 'react';
import Constants from '../../Utils/Constants';
import HotelInfo from '../../Models/Hotel/HotelInfo';

class FacturaAPI extends Component {

    createFactura(facturaInfo, handlePostFacturaInfo) {
      let url = "";
      let body = JSON.stringify( facturaInfo );
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
          handlePostFacturaInfo(responseData);
        });
    }

    getFactura(handleGetFactura)
    {
        let url =  "";
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