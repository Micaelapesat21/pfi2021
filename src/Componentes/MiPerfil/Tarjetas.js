import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography, Paper, ButtonBase, Divider, Button } from '@material-ui/core';
import visa from '../../Imagenes/Visa.png'
import mp from '../../Imagenes/mercadopago-logo.png'
import TarjetaCheta from '../TarjetaCheta/TarjetaCheta';
import GuestInfo from '../../Models/Guest/GuestInfo';
import GuestAPI from './../../Network/Guest/GuestAPI';





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
    cardArea: {
        padding: theme.spacing(1),
        width: "100%",
        minHeight: 60,
    },
    logoVisa: {
        width: 100,
        height: 50,
        [theme.breakpoints.down('xs')]: {
            width: 80,
            height: 40,
        },
    },
    logoMp: {
        width: 100,
        height: 35,
        [theme.breakpoints.down('xs')]: {
            width: 75,
            height: 25,
        },
    },

    image: {
        position: 'relative',
        padding: theme.spacing(1),
        width: "100%",
        minHeight: 60,
        [theme.breakpoints.down('xs')]: {
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.1,
                borderLeft: "6px solid #01579b",
            },
        },
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0,
        transition: theme.transitions.create('opacity'),
        borderLeft: "6px solid #01579b",

    },
})

class Tarjetas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            numeroTarjeta: "",
            nombreTarjeta: "",
            mesTarjeta: "",
            añoTarjeta: "",
            codTarjeta: "",
            tipoTarjeta: "",
            loading: false,
        }
    }

    componentWillMount() {
        const user = this.props.user
        this.getGuestInfo(user.email)
    }
    getGuestInfo(email) {
        this.setState({ loading: true });
        GuestAPI.getGuestInfo(email, this.handleGetGuestInfo);
    }
    handleGetGuestInfo = async (guestInfo) => {
        this.setState({ loading: false, });

        if (guestInfo.data === undefined || guestInfo === null) {
            //show error message if needed
        } else {
            let userData = guestInfo.data.usuario.tarjeta;
            console.log(userData)
            /*if (userData !== null) {
                this.setState({
                    numeroTarjeta: userData.cardNumber,
                    nombreTarjeta: userData.name,
                    mesTarjeta: userData.mes,
                    añoTarjeta: userData.año,
                    codTarjeta: userData.securityCode,
                    tipoTarjeta: userData.tipo,
                });
                GuestInfo.getInstance().setUserData(userData);
            }*/
        }
    }

    agregar() {
        if (this.state.numeroTarjeta !== "" &&
            this.state.nombreTarjeta !== "" &&
            this.state.mesTarjeta !== "" &&
            this.state.añoTarjeta !== "" &&
            this.state.codTarjeta !== "" &&
            this.state.tipoTarjeta !== ""
        ) {
            var dict = this.getGuestModel();
            console.log(dict)
            GuestInfo.getInstance().addPaymentMethod(dict);
            this.postGuestInfo()
        } else {
            alert("error")
        }
        //console.log(this.state.nombreTarjeta, this.state.numeroTarjeta,this.state.añoTarjeta,this.state.mesTarjeta,this.state.codTarjeta,this.state.tipoTarjeta)
    }
    getGuestModel() {
        return {
            cardNumber: this.state.numeroTarjeta,
            name: this.state.nombreTarjeta,
            mes: this.state.mesTarjeta,
            año: this.state.añoTarjeta,
            securityCode: this.state.codTarjeta,
            tipo: this.state.tipoTarjeta,
            // etc.
        };
    }
    postGuestInfo = () => {
        this.setState({ loading: true });
        GuestAPI.postGuestInfo(this.handlePostGuestInfo);
    }

    handlePostGuestInfo = async (guestInfo) => {
        this.setState({ loading: false });
        if (guestInfo.error == null) {
            //post was successful
            console.log("Guardado con exito")
        } else {
            //get user with email failed
            console.log("Errrooor pa")
        }
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
    agregarTarjeta() {
        if (this.state.open)
            if (this.props.modo === "ReservaApi")
                return (
                    <Grid>
                        <TarjetaCheta
                            callNumeroTarjeta={this.callNumeroTarjeta}
                            callNombreTarjeta={this.callNombreTarjeta}
                            callMesTarjeta={this.callMesTarjeta}
                            callAñoTarjeta={this.callAñoTarjeta}
                            callCodTarjeta={this.callCodTarjeta}
                            callTipoTarjeta={this.callTipoTarjeta}
                        />
                    </Grid>
                )
            else
                if (this.props.modo === "CheckOut")
                    return (
                        <Grid>
                            <TarjetaCheta
                                callNumeroTarjeta={this.callNumeroTarjeta}
                                callNombreTarjeta={this.callNombreTarjeta}
                                callMesTarjeta={this.callMesTarjeta}
                                callAñoTarjeta={this.callAñoTarjeta}
                                callCodTarjeta={this.callCodTarjeta}
                                callTipoTarjeta={this.callTipoTarjeta}
                            />
                            <Grid container alignItems="flex-end" justify="flex-end">
                                <Grid item md={3} xs={5}>
                                    <Button variant="contained" color="primary" onClick={this.props.handleCheckOut}>Pagar</Button>
                                </Grid>
                            </Grid>

                        </Grid>
                    )
                else
                    return (
                        <Grid>
                            <TarjetaCheta
                                callNumeroTarjeta={this.callNumeroTarjeta}
                                callNombreTarjeta={this.callNombreTarjeta}
                                callMesTarjeta={this.callMesTarjeta}
                                callAñoTarjeta={this.callAñoTarjeta}
                                callCodTarjeta={this.callCodTarjeta}
                                callTipoTarjeta={this.callTipoTarjeta}
                            />
                            <Grid container alignItems="flex-end" justify="flex-end">
                                <Grid item md={3} xs={5}>
                                    <Button variant="contained" color="primary" size="large" onClick={this.agregar.bind(this)}>Agregar</Button>
                                </Grid>
                            </Grid>

                        </Grid>
                    )
        else
            return (
                <div></div>
            )

    }


    render() {
        const { classes } = this.props;


        if (this.props.modo === "ReservaApi" || this.props.modo === "CheckOut") {


            return (
                <Grid container spacing={3} justify="center" alignItems="center">
                    <Grid item xs={12} md={8} lg={9}>

                        <Typography variant="h6">Tus Tarjetas</Typography>

                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper>

                            <ButtonBase className={classes.image} focusRipple >
                                <Grid container justify="center" alignItems="center" >
                                    <Grid item md={3} xs={4}>
                                        <img src={visa} alt="visa" className={classes.logoVisa} />
                                    </Grid>
                                    <Grid item md={9} xs={8}>
                                        <Typography variant="h6">Visa Débito terminada en 4787</Typography>
                                    </Grid>
                                </Grid>
                                <span className={classes.imageBackdrop} />
                            </ButtonBase>
                            <Divider />
                            <ButtonBase className={classes.image} >
                                <Grid container justify="center" alignItems="center" >
                                    <Grid item md={3} xs={4}>
                                        <img src={mp} alt="visa" className={classes.logoMp} />
                                    </Grid>
                                    <Grid item md={9} xs={8}>
                                        <Typography variant="body1" style={{ color: "#009ee3" }}>Pague con su cuenta de MercadoPago</Typography>
                                    </Grid>
                                </Grid>
                                <span className={classes.imageBackdrop} />
                            </ButtonBase>
                            <Divider />
                            <ButtonBase className={classes.image} onClick={() => this.setState({ open: true })}>
                                <Grid container justify="center" alignItems="center" >
                                    <Grid item md={11} xs={10}>
                                        <Typography variant="body1" color="primary" align="left">Pagar con otra tarjeta</Typography>
                                    </Grid>
                                </Grid>
                                <span className={classes.imageBackdrop} />
                            </ButtonBase>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        {this.agregarTarjeta()}
                    </Grid>
                </Grid>
            );
        } else {
            return (
                <Grid container spacing={3} justify="center" alignItems="center">
                    <Grid item xs={12} md={8} lg={9}>

                        <Typography variant="h5">Tus Tarjetas</Typography>

                    </Grid>
                    <Grid item xs={12} md={7} lg={7}>
                        <Paper>

                            <ButtonBase className={classes.image} focusRipple >
                                <Grid container justify="center" alignItems="center" >
                                    <Grid item md={3} xs={3}>
                                        <img src={visa} alt="visa" className={classes.logoVisa} />
                                    </Grid>
                                    <Grid item md={9} xs={9}>
                                        <Typography variant="h6">Visa Débito terminada en 4787</Typography>
                                    </Grid>
                                </Grid>
                                <span className={classes.imageBackdrop} />
                            </ButtonBase>
                            <Divider />
                            <ButtonBase className={classes.image} >
                                <Grid container justify="center" alignItems="center" >
                                    <Grid item md={3} xs={3}>
                                        <img src={mp} alt="visa" className={classes.logoMp} />
                                    </Grid>
                                    <Grid item md={9} xs={9}>
                                        <Typography variant="body1" style={{ color: "#009ee3" }}>Cuenta de MercadoPago</Typography>
                                    </Grid>
                                </Grid>
                                <span className={classes.imageBackdrop} />
                            </ButtonBase>
                            <Divider />
                            <ButtonBase className={classes.image} onClick={() => this.setState({ open: true })}>
                                <Grid container justify="center" alignItems="center" >
                                    <Grid item md={11} xs={10}>
                                        <Typography variant="body1" color="primary" align="left">Agregar otra tarjeta</Typography>
                                    </Grid>
                                </Grid>
                                <span className={classes.imageBackdrop} />
                            </ButtonBase>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={7} lg={7}>
                        {this.agregarTarjeta()}
                    </Grid>
                </Grid>
            );
        }
    }
}

Tarjetas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tarjetas);