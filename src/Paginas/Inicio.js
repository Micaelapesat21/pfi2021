import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Galeria from '../Componentes/Galeria'
import IniciarSesion from '../Componentes/login/IniciarSesion'
import { DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Dialog, IconButton } from '@material-ui/core';
import firebase from '../firebaseConfig'
import AuthController from '../Componentes/login/AuthController'
import Registro from '../Componentes/login/Registro'
import GuestAPI from '../Network/Guest/GuestAPI'
import GuestInfo from '../Models/Guest/GuestInfo'
import EscuelaHome from './EscuelaHome'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LoadinPage from './LoadingPage/Index'
import EscuelaAPI from '../Network/Escuela/EscuelaAPI';
import EscuelaInfo from '../Models/Escuela/EscuelaInfo';



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
    inicio: {
        marginTop: theme.spacing(5),
    }
})

class Inicio extends Component {
    _isMounted = false;

    constructor() {
        super();
        this.state = {
            user: null,
            inicio: true,
            verificar: false,
            id: "",
            CheckIn: "",
            CheckOut: "",
            huespedes: "",
            precio: "",
            completado: false,
            modoAdmin: true,
            loading: true,
            data: [],
        };

    }
    componentDidMount() {
        this._isMounted = true;

       if (this._isMounted) 
       { 
            firebase.auth().onAuthStateChanged(user => {
                this.setState({
                 user: user
              });
               //Diferencia entre modo empleado y modo invitado            
               if (this.state.modoAdmin) {
                 
                  
                    this.getEscuelaInfo(user.email)
                  
                }
                else {
              // por si tenemos otro usuario.
                  this.getGuestInfo(user.email)
                }
            });

            if (this.props.location.state !== undefined) {
                 const {
                    id,
                 CheckIn,
                 CheckOut,
                 huespedes,
                    precio,
                } = this.props.location.state
             this.setState({
                    id: id,
                   CheckIn: CheckIn,
                  CheckOut: CheckOut,
                 huespedes: huespedes,
                 precio: precio,
                })
            }
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    getGuestInfo(email) {
        this.setState({ loading: true });
        GuestAPI.getGuestInfo(email, this.handleGetGuestInfo);
    }
    getEscuelaInfo(email) {

        this.setState({ loading: true });
        EscuelaAPI.getEscuelaInfo(email, this.handleGetEscuelaInfo);
    }


    handleGetGuestInfo = async (guestInfo) => {
        this.setState({ loading: false, });
        if (guestInfo.data === undefined || guestInfo === null) {
            //show error message

        } else {
            let userData = guestInfo.data.usuario;
          
            if (userData !== null) {
                if ((userData.apellido &&
                    userData.nombre && userData.email
                    && userData.tipo && userData.documento
                    && userData.pais && userData.estado
                    && userData.ciudad && userData.codigoPostal
                    && userData.direccion) !== "") {
                    this.callPerfilCompletado()
                    this.setState({ data: userData.reservas })

                }
                else {
                    this.callPerfilNoCompletado()
                }
                GuestInfo.getInstance().setUserData(userData);
            }
        }
    }
    handleGetEscuelaInfo = async (escuelaInfo) => {

        this.setState({ loading: false, });
        if (escuelaInfo.data === undefined || escuelaInfo === null) {
            //show error message
            console.log(escuelaInfo)
        } else {
            let userData = escuelaInfo.data.hotel;
            console.log(userData.email)
            if (userData !== null) {
                EscuelaInfo.getInstance().setEscuelaData(userData)
            }
        }
    }

    callPerfilCompletado = () => {
        this.setState({ completado: true })
    }
    callPerfilNoCompletado = () => {
        this.setState({ completado: false })
    }

    callbackInicio = (x) => {
        if (this._isMounted){ 
     
         this.setState({ inicio: x })
        }
    }
    callbackVerificar = (x) => {
        this.setState({ verificar: x })
    }
    handleCloseVerificar = () => {
        this.setState({ verificar: false });
        AuthController.handleLogout()
    }
    callCheckIn = (x) => {
        this.setState({ CheckIn: x });
    }
    callCheckOut = (x) => {
        this.setState({ CheckOut: x });
    }
    callHuespedes = (x) => {
        this.setState({ huespedes: x });
    }
    callAdmin = (x) => {
        this.setState({ modoAdmin: x })
    }
  

    isloginFacebook() {
        var face = firebase.auth().currentUser.providerData[0].providerId
        if (face === "facebook.com")
            return true
        else
            return false
    }

    login() {
        const { classes } = this.props;
        if (this.state.inicio === true) {
            return (
                <Grid className={classes.inicio}>
                    <IniciarSesion
                        modoAdmin={this.state.modoAdmin}
                        inicio={this.state.inicio}
                        callHotel={this.callAdmin}
                        callInicio={this.callbackInicio}                        
                    />
                </Grid>

            )
        }
        else {
            if (this.state.modoAdmin === true) {
                return (
                    <Grid className={classes.inicio}>
                        <IniciarSesion modoAdmin={this.state.modoAdmin} inicio={this.callbackInicio} />
                    </Grid>
                )
            } else {
                return (
                    <Registro inicio={this.callbackInicio} verificar={this.callbackVerificar} />
                )
            }

        }
    }
    volver() {
        if (this.state.modoAdmin) {
            return (
                <IconButton onClick={() => this.callAdmin(false)}>
                    <ArrowBackIcon />
                </IconButton>
            )
        } else {
            if (this.state.inicio === false) {
                return (
                    <IconButton onClick={() => this.callbackInicio(true)}>
                        <ArrowBackIcon />
                    </IconButton>
                )
            }
        }

    }

    render() {
        const { classes } = this.props;
        console.log('paso por el inicio');
 
        if (this.state.user) {
        
            if (this.state.modoAdmin) {
               
                if (this.state.loading)
                    return (
                        <LoadinPage />
                    )
                else
                    return (
                        <EscuelaHome           
                                user={this.state.user}    
                       />
    
                    )
                    
            } else {
                if (this.state.user.emailVerified || this.isloginFacebook() === true) {
                    if (this.state.loading)
                        return (
                            <LoadinPage />
                        )
                } else {
                    return (
                        <Grid container component="main" className={classes.root}>

                            <CssBaseline />
                            <Grid item xs={false} sm={4} md={7} className={classes.sectionDesktop}>
                                <Galeria />
                            </Grid>
                            <Grid item xs={false} sm={4} md={7} className={classes.sectionMobile} />
                            <Grid item xs={12} sm={8} md={5}  >
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
                        {this.volver()}
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