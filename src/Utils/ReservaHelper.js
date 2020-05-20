
import {Component} from 'react';

class ReservaHelper extends Component {

     total(checkIn,checkOut,precio){
        var arraycheckIn = checkIn.split("-");
        var arraycheckOut = checkOut.split("-");
        let noches=parseInt(arraycheckOut.join(''))-parseInt(arraycheckIn.join(''))
    
        return noches
      }
}

export default new ReservaHelper();