import Address from '../Guest/Address'

class HotelInfo {

    static myInstance = null
    _userID = ""
    _name = ""
    _lastName = ""
    _email = ""
    _addressInfo = null
    _paymentInfo = []

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
      // this._paymentInfo = PaymentMethod().parsePaymentMethods(props);
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