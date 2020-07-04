import Address from '../Guest/Address'
import Reserva from './../Reserva'

class HotelInfo {

    static myInstance = null
    _userID = ""
    _name = ""
    _lastName = ""
    _email = ""
    _addressInfo = null
    _paymentInfo = []
    _reservas = []

    static getInstance() {
        if (HotelInfo.myInstance == null) {
            HotelInfo.myInstance = new HotelInfo();
        }

        return this.myInstance;
    }

    setHotelData(props) {
      if(props.id != null) {
        this._userID = props.id
      }

      this._name = props.nombre
      this._email = props.email
      var address = new Address()
      address.setAddressInfo(props)
      this._addressInfo = address
      
      //set Bookings info
      if (props.reservas !== undefined) {
        var reservas = props.reservas;
        reservas.forEach(r => {
          var reserva = new Reserva(r);
          this._reservas.push(reserva);
        })
      }
    }

  //Reservas
  addReserva(booking) {
    let reserva = new Reserva(booking);
    this._reservas.push(reserva)
    console.log(this._reservas);
  } 

    getName()  {
      return this._name;
    }

    getMail() {
      return this._mail;
    }

    getUserId() {
      return this._userID;
    }

    getAddress() {
      return this._addressInfo;
    }

    setUserType(userType) {
      this._userType = userType;
    }

    toJson() {      
      let dict

      if(this._addressInfo !== null) {
         let addressInfo = this._addressInfo.toJson();
          dict = {
            email: this._email,
            nombre: this._name,
            pais: addressInfo.pais , 
            estado: addressInfo.estado,
            ciudad: addressInfo.ciudad,
            codigoPostal: addressInfo.codigoPostal,
            direccion: addressInfo.direccion1
          };
      } else {
        dict = {
          email: this._email,
          nombre: this._name,
        };
      }

    console.log("Hotel info", dict);
      return dict;
    }
}

  export default HotelInfo;