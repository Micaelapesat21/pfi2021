import Address from './Address.js'
import PaymentMethod from '../PaymentMethod.js'
import Perfil from './Perfil'

class GuestInfo {

  static myInstance = null
  _userID = ""
  _name = ""
  _lastName = ""
  _email = ""
  _personalIdType = ""
  _personalId = ""
  _addressInfo = null
  _perfilInfo = null
  _paymentInfo = []

  static getInstance() {
    if (GuestInfo.myInstance == null) {
      GuestInfo.myInstance = new GuestInfo();
    }

    return this.myInstance;
  }

  addPaymentMethod(paymentMethod) {
    let method = new PaymentMethod(paymentMethod);
    this._paymentInfo.push(method.state);
    console.log(method.state)
    console.log(this._paymentInfo)
  }

  setUserData(props) {
    if (props.id != null) {
      this._userID = props.id
    }

    this._name = props.nombre
    this._lastName = props.apellido
    this._email = props.email
    this._personalIdType = props.tipo
    this._personalId = props.documento
    var address = new Address()
    address.setAddressInfo(props)
    this._addressInfo = address
    var perfil = new Perfil()
    perfil.setPerfilInfo(props)
    this._perfilInfo = perfil
  }

  getName() {
    return this._name;
  }

  getMail() {
    return this._mail;
  }

  getUserId() {
    return this._userID;
  }

  toJson() {
    var dict = {}
    dict["email"] = this._email;
    dict["nombre"] = this._name;
    dict["apellido"] = this._lastName;
    dict["tipo"] = this._personalIdType;
    dict["documento"] = this._personalId;

    if (this._addressInfo !== null) {
      let addressInfo = this._addressInfo.toJson();
      dict["pais"] = addressInfo.pais;
      dict["estado"] = addressInfo.estado;
      dict["ciudad"] = addressInfo.ciudad;
      dict["codigoPostal"] = addressInfo.codigoPostal;
      dict["direccion1"] = addressInfo.direccion1;
    }


    /*if (this._perfilInfo !== null) {
      let perfilInfo = this._perfilInfo.toJson();
      dict["perfil"] = perfilInfo.perfil;
      dict["bebida"] = perfilInfo.bebida;
      dict["acompañamiento"] = perfilInfo.acompañamiento;
      dict["limpieza"] = perfilInfo.limpieza;
      dict["tintoreria"] = perfilInfo.tintoreria;
    }*/
    
    var paymentMethods = []
    if (this._paymentInfo !== null) {
      this._paymentInfo.forEach(method => {
      var tar = {}
      tar["name"] = method.name;
      tar["cardNumber"] = method.cardNumber;
      tar["mes"] = method.mes;
      tar["año"] = method.año;
      tar["securityCode"] = method.securityCode;
      tar["tipo"] = method.tipo;
      this._paymentInfo.push(tar);  
    });
    }

    dict["tarjeta"] = paymentMethods;

    console.log("guestInfo", dict);
    return dict;
  }
}

export default GuestInfo;