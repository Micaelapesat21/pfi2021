import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import CompletarReserva from '../Componentes/ReservApi/CompletarReserva'
import firebase from '../firebaseConfig'
import DialogLogin from './../Componentes/login/DialogLogin.js'
import AuthController from '../Componentes/login/AuthController';




const styles = theme => ({

})

class General extends Component {

    constructor() {
        super();
        this.state = {
            id: "",
            CheckIn: "",
            CheckOut: "",
            huespedes: 0,
            precio: "",
            habitacion: "",
            numeroTarjeta: "",
            nombreTarjeta: "",
            mesTarjeta: "",
            añoTarjeta: "",
            codTarjeta: "",
            tipoTarjeta: "",
            showLogin: true,
            user: null,
            verificar: false,
        }
    }


    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user: user,
            });
        });


        const query = new URLSearchParams(this.props.location.search);
        const id = query.get('id')
        const CheckIn = query.get('CheckIn')
        const CheckOut = query.get('CheckOut')
        const huespedes = query.get('huespedes')
        const precio = query.get('precio')
        let num = parseInt(huespedes)

        this.setState({
            id: id,
            CheckIn: CheckIn,
            CheckOut: CheckOut,
            huespedes: +num,
            precio: precio,
        })

    }

    callHuespedes = (x) => {
        this.setState({ huespedes: x });
    }
    callCheckIn = (x) => {
        this.setState({ CheckIn: x });
    }
    callCheckOut = (x) => {
        this.setState({ CheckOut: x });
    }
    callNumeroTarjeta = (x) => {
        this.setState({ numeroTarjeta: x });
    }
    callNombreTarjeta = (x) => {
        this.setState({ nombreTarjeta: x });
    }
    callMesTarjeta = (x) => {
        this.setState({ mesTarjeta: x });
    }
    callAñoTarjeta = (x) => {
        this.setState({ añoTarjeta: x });
    }
    callCodTarjeta = (x) => {
        this.setState({ codTarjeta: x });
    }
    callTipoTarjeta = (x) => {
        this.setState({ tipoTarjeta: x });
    }

    openDialogLogin = () => {
        this.setState({ showLogin: true });
    }

    closeDialogLogin = () => {
        this.setState({ showLogin: false });
    }
    callbackVerificar = (x) => {
        this.setState({ verificar: x })
    }
    handleCloseVerificar = () => {
        this.setState({ verificar: false });
        AuthController.handleLogout()
    }


    isloginFacebook() {
        var face = firebase.auth().currentUser.providerData[0].providerId
        if (face === "facebook.com")
            return true
        else
            return false
    }




    render() {
        //const { classes } = this.props;

        if (this.state.user) {
            if (this.state.user.emailVerified || this.isloginFacebook() === true) {
                return (
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={12} md={8} lg={9}>
                            <CompletarReserva
                                id={this.state.id}
                                CheckIn={this.state.CheckIn}
                                CheckOut={this.state.CheckOut}
                                huespedes={this.state.huespedes}
                                precio={this.state.precio}
                                callNumeroTarjeta={this.callNumeroTarjeta}
                                callNombreTarjeta={this.callNombreTarjeta}
                                callMesTarjeta={this.callMesTarjeta}
                                callAñoTarjeta={this.callAñoTarjeta}
                                callCodTarjeta={this.callCodTarjeta}
                                callTipoTarjeta={this.callTipoTarjeta}
                                callHuespedes={this.callHuespedes}
                                callCheckIn={this.callCheckIn}
                                callCheckOut={this.callCheckOut}
                                user={this.state.user}
                                numeroTarjeta={this.state.numeroTarjeta}
                                nombreTarjeta={this.state.nombreTarjeta}
                                mesTarjeta={this.state.mesTarjeta}
                                añoTarjeta={this.state.añoTarjeta}
                                codTarjeta={this.state.codTarjeta}
                                tipoTarjeta={this.state.tipoTarjeta}
                            />
                        </Grid>

                    </Grid>
                )
            } else {
                return (
                    <DialogLogin
                        openVerificar={this.state.verificar}
                        onCloseVerificar={this.handleCloseVerificar}
                        verificar={this.callbackVerificar}
                    />
                )
            }

        } else {
            return (
                <DialogLogin
                    open={this.state.showLogin}
                    onClose={this.closeDialogLogin}
                    verificar={this.callbackVerificar}
                />
            );
        }
    }
}

General.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(General);