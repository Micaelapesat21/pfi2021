class Reserva {
    constructor(props) {
      this.state = {
        perfil: "",
        bebida: "",
        acompaniamiento: "",
        limpieza: "",
        tintoreria: "",
      };
    }

    setReservaInfo(props) {
      this.state = {
        perfil: props.perfil,
        bebida: props.bebida,
        acompaniamiento: props.acompañamiento,
        limpieza: props.limpieza,
        tintoreria: props.tintoreria,
      };
    }

    toJson() {
        return {
            perfil :this.state.perfil,
            bebida: this.state.bebida,
            acompaniamiento: this.state.acompaniamiento,
            limpieza: this.state.limpieza,
            tintoreria: this.state.tintoreria,
        };
    }
  }

  export default Reserva;