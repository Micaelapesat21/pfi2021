import {Component} from 'react';
import Constants from '../../Utils/Constants';
import HotelInfo from './../../Models/Hotel/HotelInfo';

class HotelAPI extends Component {

    postHotelInfo(handlePostHotelInfo) {
      let url =  Constants.BASE_URL + '/api/v1.0/hotel';
      let hotelData = HotelInfo.getInstance().toJson();
        fetch(url,{
          method: 'PUT', 
          headers:{ 'Content-Type': 'application/json'},
          body: JSON.stringify( hotelData )
      })
       .then ((response) => {
            console.log("response",response);
            return response.json();
        })
        .then (responseData => {
          handlePostHotelInfo(responseData);
        });
    }

    getHotelInfo(email, handleGetHotelInfo)
    {
        let url =  Constants.BASE_URL + '/api/v1.0/hotel?email=' + email;
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
            handleGetHotelInfo(responseData);
        });
    }
}

export default new HotelAPI();