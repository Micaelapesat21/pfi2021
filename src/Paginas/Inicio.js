import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Galeria from '../Componentes/Galeria'
import IniciarSesion from '../Componentes/login/IniciarSesion'
import { DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Dialog } from '@material-ui/core';
import firebase from '../firebaseConfig'
import AuthController from '../Componentes/login/AuthController'
import Registro from '../Componentes/login/Registro'
import Home from './Home'


const styles = theme => ({
    root: {
        height: '100vh',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
})

class Inicio extends Component {

    constructor() {
        super();
        this.state = {
            user: null,
            inicio: true,
            verificar: false,
        };

    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user: user
            });
        });
    }

    callbackInicio = (x) => {
        this.setState({ inicio: x })
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

    login() {
        if (this.state.inicio === true) {
            return (
                <IniciarSesion inicio={this.callbackInicio} />
            )
        }
        else {
            return (
                <Registro inicio={this.callbackInicio} verificar={this.callbackVerificar} />
            )
        }
    }



    render() {
        const { classes } = this.props;
        if (this.state.user) {
            if (this.state.user.emailVerified || this.isloginFacebook() === true) {
                return (
                    <Home user={this.state.user}/>
                )
            } else {
                return (
                    <Grid container component="main" className={classes.root}>

                        <CssBaseline />
                        <Grid item xs={false} sm={4} md={7} className={classes.sectionDesktop}>
                            <Galeria />
                        </Grid>
                        <Grid item xs={false} sm={4} md={7} className={classes.sectionMobile} />
                        <Grid item xs={12} sm={8} md={5} >
                            {this.login()}
                        </Grid>
                        <Dialog open={this.state.verificar} onClose={this.handleCloseVerificar} >
                            <DialogTitle >{"Verificar correo electronico"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText >
                                    Por favor verificar su correo electronico para poder iniciar sesion. Si no aparece verifique su casilla de spam.
                         </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleCloseVerificar} color="primary">
                                    Cerrar
                        </Button>

                            </DialogActions>
                        </Dialog>
                    </Grid>
                )
            }

        } else {
            return (
                <Grid container component="main" className={classes.root}>

                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={7} className={classes.sectionDesktop}>
                        <Galeria />
                    </Grid>
                    <Grid item xs={false} sm={4} md={7} className={classes.sectionMobile} />
                    <Grid item xs={12} sm={8} md={5} >
                        {this.login()}
                    </Grid>

                </Grid>
            );
        }

    }
}

Inicio.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inicio);