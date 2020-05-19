import Address from './Address.js'
import PaymentMethod from './PaymentMethod.js'

class GuestInfo {

    static myInstance = null
    _userID = ""
    _name = ""
    _email = ""
    _addressInfo = null
    _paymentInfo = []

    static getInstance() {
        if (GuestInfo.myInstance == null) {
            GuestInfo.myInstance = new GuestInfo();
        }

        return this.myInstance;
    }

    setUserData(props) {
      this._userID = props.id;
      this._name = props.name;
      this._mail = props.mail;
      this._addressInfo = Address(props);
      this._paymentInfo = PaymentMethod().parsePaymentMethods(props);
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
      return {
          name: this.state.name,
          lastName: this.state.lastName,
          mail: this.state.mail,
      }
    }
  }

  export default GuestInfo;