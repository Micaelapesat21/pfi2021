import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid  } from '@material-ui/core';
import CompletarReserva from '../Componentes/ReservApi/CompletarReserva'
import firebase from '../firebaseConfig'
import DialogLogin from './../Componentes/login/DialogLogin.js'
import { Dialog } from '@material-ui/core';


const styles = theme => ({
   
})

class General extends Component {

    constructor(){
        super();
        this.state={
            id:"",
            CheckIn:"",
            CheckOut:"",
            huespedes:"",
            precio:"",
            numeroTarjeta:"",
            nombreTarjeta:"",
            mesTarjeta:"",
            añoTarjeta:"",
            codTarjeta:"",
            tipoTarjeta:"",
            showLogin: true,
            user: null,
        }
    }
    

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const id = query.get('id')
        const CheckIn = query.get('CheckIn')
        const CheckOut = query.get('CheckOut')
        const huespedes =query.get('huespedes')
        const precio = query.get('precio')
        
        this.setState({
            id:id,
            CheckIn:CheckIn,
            CheckOut:CheckOut,
            huespedes:huespedes,
            precio:precio,
        })

        console.log(this.state.nombreTarjeta)
      
    }
    callNumeroTarjeta = (x) => {
        this.setState({ numeroTarjeta: x });

    }
    callNombreTarjeta = (x) => {
        this.setState({ nombreTarjeta: x });
        console.log(x)
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

    checkIfUserIsLogged() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user: user,
                showLogin: false,
            });
        });
    }

    showLoginViewIfNeeded() {
        if ( this.state.showLogin ) {
            return (
                <Dialog open= { this.openDialogLogin } onClose= { this.closeDialogLogin } >
                  <DialogLogin closePass={ this.closeDialogLogin.bind() } />
                </Dialog>
            );
        }else {
            return
        }
    }
    
    
    render() {
        //const { classes } = this.props;
      
        
        return (
            <Grid container justify="center" alignItems="center">

                { this.showLoginViewIfNeeded() }

                <Grid item xs={12} md={8} lg={9}>
                    <CompletarReserva
                        id={ this.state.id}
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

                        numeroTarjeta={this.state.numeroTarjeta}
                        nombreTarjeta={this.state.nombreTarjeta}
                        mesTarjeta={this.state.mesTarjeta}
                        añoTarjeta={this.state.añoTarjeta}
                        codTarjeta={this.state.codTarjeta}
                        tipoTarjeta={this.state.tipoTarjeta}
                    />
                </Grid>
               
                
                
            </Grid>
        );
    }
}

General.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(General);