class Address {
    constructor(props) {
      this.state = {
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
      };
    }

    setAddressInfo(props) {
      var address2 = ""
      if(props.address2 != null) {
        address2 = props.address2
      }

      this.state = {
        address1: props.address1,
        address2: address2,
        city: props.city,
        state: props.state,
        zipCode: props.zipCode,
        country: props.country
      };
    }

    toJson() {
        return {
            address1 :this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            country: this.state.country

        };
    }
  }

  export default Address;