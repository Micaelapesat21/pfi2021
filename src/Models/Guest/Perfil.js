class Perfil {
    constructor(props) {
      this.state = {
        perfil: "",
        bebida: "",
        acompañamiento: "",
        limpieza: "",
        tintoreria: "",
      };
    }

    setPerfilInfo(props) {
      this.state = {
        perfil: props.perfil,
        bebida: props.bebida,
        acompañamiento: props.acompañamiento,
        limpieza: props.limpieza,
        tintoreria: props.tintoreria,
       
      };
    }

    toJson() {
        return {
            perfil :this.state.perfil,
            bebida: this.state.bebida,
            acompañamiento: this.state.acompañamiento,
            limpieza: this.state.limpieza,
            tintoreria: this.state.tintoreria,
        };
    }
  }

  export default Perfil;