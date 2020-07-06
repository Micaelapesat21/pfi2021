
class HotelData {
    constructor(props) {
        this.state = {
            razon: "",
            pais: "",
            estado: "",
            ciudad: "",
            codigoPostal: "",
            direccion: "",
            telefono1: "",
            telefono2: "",
            estrellas: "",
            url: "",
        };
    }

    setHotelData(props) {

        this.state = {
            razon: props.razon,
            pais: props.pais,
            estado: props.estado,
            ciudad: props.ciudad,
            codigoPostal: props.codigoPostal,
            direccion: props.direccion,
            telefono1: props.telefono1,
            telefono2: props.telefono2,
            estrellas: props.estrellas,
            url: props.url
        };
    }

    toJson() {
        return {
            razon: this.state.razon,
            pais: this.state.pais,
            estado: this.state.estado,
            ciudad: this.state.ciudad,
            codigoPostal: this.state.codigoPostal,
            direccion: this.state.direccion,
            telefono1: this.state.telefono1,
            telefono2: this.state.telefono2,
            estrellas: this.state.estrellas,
            url: this.state.url,
        };
    }
}

export default HotelData;