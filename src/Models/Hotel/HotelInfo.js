import HotelData from './HotelData'
import Reserva from './../Reserva'

class HotelInfo {

    static myInstance = null
    _userID = ""
    _name = ""
    _email = ""
    _hotelData = null
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
      var hotelData = new HotelData()
      hotelData.setHotelData(props)
      this._hotelData = hotelData
      
      //set Bookings info
      if (props.reservas !== undefined) {
        var reservas = props.reservas;
        reservas.forEach(r => {
          var reserva = new Reserva(r);
          reserva.setReservaInfo(r);
          this._reservas.push(reserva);
        })
      }

      let messi = ""
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

    getHotelData() {
      return this._hotelData;
    }

    setUserType(userType) {
      this._userType = userType;
    }

    getReservas() {
      return this._reservas;
    }

    toJson() {      
      let dict

      if(this._hotelData !== null) {
         let hotelData = this._hotelData.toJson();
          dict = {
            email: this._email,
            nombre: this._name,
            razon: hotelData.razon,
            pais: hotelData.pais , 
            estado: hotelData.estado,
            ciudad: hotelData.ciudad,
            codigoPostal: hotelData.codigoPostal,
            direccion: hotelData.direccion,
            telefono1: hotelData.telefono1,
            telefono2: hotelData.telefono2,
            estrellas: hotelData.estrellas,
            url: hotelData.url
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