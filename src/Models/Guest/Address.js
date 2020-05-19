class Address {
    constructor(props) {
      this.state = {
        address1: props.address1,
        address2: props.address2,
        city: props.city,
        state: props.state,
        zipCode: props.zipCode,
        country: props.country
      };
    }

    toJson() {
        return {
            'address1':this.address1,
            'address2': this.address2,
            'city': this.city,
            'state': this.state,
            'zipCode': this.zipCode,
            'country': this.country

        }
    }
  }

  export default Address;