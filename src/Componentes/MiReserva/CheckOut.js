import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';

import ReservaRender from './ReservaRender';
import foto from '../../Imagenes/logoHotel.png'
import foto2 from '../../Imagenes/logoFourSeason.jpg'

import ReservasAPI from './../../Network/Reserva/ReservasAPI'
import GuestInfo from './../../Models/Guest/GuestInfo'
import Reserva from './../../Models/Reserva'


const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
})

class CheckOut extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            errorMessageIsOpen: false,
            errorMessage: "",
            reserva: new Reserva()
        }
      }
    
    componentDidMount() {
        this.getReserva()
    }

    //API Calls
    getReserva() {    
        this.setState({ loading: true });
        let reservas = GuestInfo.getInstance().getReservas();
        
        //HERE USE THE BOOKING ID
        ReservasAPI.getBookingInfo(reservas[0].id,this.handleGetReservas);
    }

    handleGetReservas = async (booking) => {
        if(booking.error !== undefined) {
            this.setState({ 
                loading: false,
                errorMessage: "No se pudo cargar el detalle de la reserva" 
            });
        }else {
            let newReserva = GuestInfo.getInstance().updateReservaIfNeeded(booking);
            this.setState({ 
                loading: false,
                reserva: newReserva 
            });
        }
    }

    render() {
        //const { classes } = this.props;

        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} md={8} lg={9}>
                <Typography variant="h3">Check-Out</Typography>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
                <ReservaRender
                    id={ this.state.reserva.hotelName }
                    nroReserva={this.state.reserva.bookingNumber}
                    logo={foto2}
                    CheckIn={this.state.reserva.checkIn}
                    CheckOut={this.state.reserva.checkOut}
                    huespedes={this.state.reserva.cantidadHuespedes}
                    precio={this.state.reserva.precioNoche}
                    checkInOpen={this.props.checkInOpen}
                    checkOutOpen={this.props.checkOutOpen}
                    modo={this.props.modo}
                />
            </Grid>
        </Grid>
        );
    }
}

CheckOut.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckOut);