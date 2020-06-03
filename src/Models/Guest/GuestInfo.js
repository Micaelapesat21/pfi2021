import Address from './Address.js'
import PaymentMethod from './../PaymentMethod.js'

class GuestInfo {

    static myInstance = null
    _userID = ""
    _name = ""
    _lastName = ""
    _email = ""
    _personalIdType = ""
    _personalId = ""
    _addressInfo = null
    _paymentInfo = []

    static getInstance() {
        if (GuestInfo.myInstance == null) {
            GuestInfo.myInstance = new GuestInfo();
        }

        return this.myInstance;
    }

    setUserData(props) {
      if(props.id != null) {
        this._userID = props.id
      }

      this._name = props.name
      this._lastName = props.lastName
      this._email = props.email
      this._personalIdType = props.personalIdType
      this._personalId = props.personalId
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
      let addressInfo = this._addressInfo.toJson();
      let dict = {
        email: this._email,
        nombre: this._name,
        apellido: this._lastName,
        tipo: this._personalIdType,
        documento: this._personalId,
        pais: addressInfo.country , 
        estado: addressInfo.state,
        ciudad: addressInfo.city,
        codigoPostal: addressInfo.zipCode,
        direccion: addressInfo.address1
    };


    console.log("guestInfo", dict);
      return dict;
    }
  }

  export default GuestInfo;