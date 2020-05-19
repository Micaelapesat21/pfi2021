import {Component} from 'react';

class Constants extends Component {
    BASE_URL = 'http://localhost:8080/seminario1';

    UserTypes = {
      guest : {id: 0, description: "Guest"}, 
      hotel : {id: 1, description: 'Hotel'}, 
    }    
}
export default new Constants();