import {Component} from 'react';

class Constants extends Component {
    BASE_URL = 'https://uade-2020-seminario1-grupo9.herokuapp.com';

    UserTypes = {
      guest : {id: 0, description: "Guest"}, 
      hotel : {id: 1, description: 'Hotel'}, 
    }    
}
export default new Constants();