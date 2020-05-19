class PaymentMethod {
    constructor(props) {
      this.state = {
        name: props.name,
        cardNumber: props.cardNumber,
        expirationDate: props.expirationDate,
        securityCode: props.securityCode,
      };
    }

    toJson() {
        return {
            'name':this.name,
            'cardNumber': this.cardNumber,
            'expirationDate': this.expirationDate,
            'securityCode': this.securityCode
        }
    }

    parsePaymentMethods(data) {
        return  data.items.map( dictionary => { return PaymentMethod(dictionary) })
      }
  }

  export default PaymentMethod;