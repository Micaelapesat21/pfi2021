class PaymentMethod {
    constructor(props) {
      this.state = {
        name: props.name,
       // name: props.lastName,
        cardNumber: props.cardNumber,
        mes:props.mes,
        año:props.año,
        securityCode: props.securityCode,
        tipo:props.tipo
      };
    }

    toJson() {
        return {
            'name':this.name,
            'cardNumber': this.cardNumber,
            'mes':this.mes,
            'año':this.año,
            'securityCode': this.securityCode,
            'tipo':this.tipo,
        }
    }

    parsePaymentMethods(data) {
        return  data.items.map( dictionary => { return PaymentMethod(dictionary) })
      }
  }

  export default PaymentMethod;