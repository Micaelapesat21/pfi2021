class Reserva {
  constructor(props) {
    this.state = {
      hotel: "",
      huesped: "",
      checkIn: "",
      checkOut: "",
      cantHuespedes: "",
      tipoHabitacion: "",
      precioNoche: "",
      numeroTarjeta: "",
      //seviciosSolicitados: [],
    };
  }



  setReservaInfo(props) {
    this.state = {
      hotel: props.hotel,
      huesped: props.huesped,
      checkIn: props.checkIn,
      checkOut: props.checkOut,
      cantHuespedes: props.cantHuespedes,
      tipoHabitacion: props.tipoHabitacion,
      precioNoche: props.precioNoche,
      numeroTarjeta: props.numeroTarjeta,
    };
  }

  toJson() {
    return {
      hotel: this.state.hotel,
      huesped: this.state.huesped,
      checkIn: this.state.checkIn,
      checkOut: this.state.checkOut,
      cantHuespedes: this.state.cantHuespedes,
      tipoHabitacion: this.state.tipoHabitacion,
      precioNoche: this.state.precioNoche,
      numeroTarjeta: this.state.numeroTarjeta,
    };
  }
}

export default Reserva;