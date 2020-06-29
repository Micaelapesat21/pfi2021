import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, Card, CardContent } from '@material-ui/core';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import PersonIcon from '@material-ui/icons/Person';
import ReservaHelper from '../../Utils/ReservaHelper'
import AdminReserva from './AdminReserva'
import AdminCheckIn from './AdminCheckIn'
import AdminCheckOut from './AdminCheckOut'



const useStyles = makeStyles(theme => ({
    main: {


    },
    izq: {
        borderRight: "1px solid #e0e0e0",
        [theme.breakpoints.down('xs')]: {
            borderRight: "1px solid #ffffff",
        },
    },
    logo: {
        padding: theme.spacing(1),
        height: 120,
        width: 120,
    },
    reserva: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(0),
        },
    },
    botones: {
        //width: 150,
        //[theme.breakpoints.down('xs')]: {
        //    width: 140,
        //},
    },
    noreserva: {
        marginTop: theme.spacing(2),
    },
    reservaChekIn: {
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            //marginBottom: theme.spacing(2),
        },
    },
    tituloMobile: {
        display: "none",
        [theme.breakpoints.down('xs')]: {
            display: "block",
        },
    }
}));

export default function ReservaRender(props) {
    const classes = useStyles();

    function getTotalPrice(checkIn, checkOut, precio) {
        return ReservaHelper.total(checkIn, checkOut, precio);
    }
    function fechas(fecha) {

        var fechaArray = fecha.split("-");
        var dia = fechaArray[2]
        var mes = fechaArray[1]
        var año = fechaArray[0]
        var fNueva = []
        var fecha2 = fNueva.concat(dia, mes, año)
        return fecha2.join("/")

    }
    function huespedes(h) {
        const huespedes = [];
        for (let i = 0; i < h; i++) {
            huespedes.push({
                name: ""
            });
        }
        return huespedes
    }
    function pad(n) {
        return n + 1
    }
    function fechaNow() {
        var date = new Date()
        var dia = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var fecha = year + "-" + pad(month) + "-" + dia;
        return fecha
    }
    function difDias(checkIn) {
        var now = fechaNow()
        var aFecha1 = checkIn.split("-");
        var aFecha2 = now.split("-");
        var fFecha1 = Date.UTC(aFecha1[0], aFecha1[1] - 1, aFecha1[2]);
        var fFecha2 = Date.UTC(aFecha2[0], aFecha2[1] - 1, aFecha2[2]);
        var dif = fFecha1 - fFecha2;
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
        console.log(dias)
        console.log(checkIn)
        if (dias <= 2 && dias >= 0)
            return true
        else
            return false
    }
    function habilitarCheckIN(fecha) {
        var habilitar = difDias(fecha)
        if (habilitar) {
            if (props.checkInOK) {
                return (
                    <Grid elevation={10}>
                        <Grid container direction="row"  >
                            {/*IZQUIERDA */}
                            <Grid item md={3} xs={12} className={classes.izq} >
                                <Grid container direction="row" justify="center" alignItems="center" >
                                    <Grid item md={12} xs={12}>
                                        <Typography align="center">Reserva: #1234567</Typography>
                                    </Grid>
                                    <Grid item md={8} xs={5}>
                                        <img src={props.logo} alt="logo" width className={classes.logo} />
                                    </Grid>
                                    <Grid item md={12} xs={7} >
                                        <Typography variant="h6" align="center" style={{ fontWeight: "bold" }}> Hotel {props.id}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/*Derecha */}
                            <Grid item md={8} xs={12}>
                                <Grid container direction="row" alignItems="center" justify="center">
                                    <Grid item md={12} className={classes.reserva}>
                                        <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                                            <Grid item md={6} xs={12}>
                                                <Grid container direction="row" alignItems="center" justify="center">
                                                    <Grid item md={6} xs={8}>
                                                        <Button
                                                            size="small"
                                                            className={classes.botones}
                                                            startIcon={<AssignmentTurnedInIcon />}
                                                            onClick={props.checkInOpen}
                                                        >
                                                            Check-In:
                                                            </Button>
                                                    </Grid>
                                                    <Grid item md={4} xs={2}>
                                                        <Typography >{fechas(props.CheckIn)}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={10} xs={12} className={classes.reservaChekIn}>
                                        <Typography align="justify" variant="subtitle1" style={{ color: "#4caf50" }}>
                                            Su Check-In se ah realizado con exito, le hemos enviado a su mail {props.user.email} el QR para poder presentar en recepcion para que le entreguen su llave. Tambien puede presentar el que aparece aca abajo.
                                        </Typography>

                                    </Grid>
                                    <Grid item md={12} >
                                        <Grid container direction="row" justify="center" alignItems="center">
                                            <Grid item md={6} xs={6}>
                                                <div id="qrcode">
                                                    <img src="https://www.codigos-qr.com/qr/php/qr_img.php?d=https%3A%2F%2Fseminario-1-uade.firebaseapp.com%2F&s=8&e=m" alt="Generador de Códigos QR Codes" />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                )
            } else {
                return (
                    <Grid>
                        <Grid container direction="row"  >
                            {/*IZQUIERDA */}
                            <Grid item md={3} xs={12} className={classes.izq} >
                                <Grid container direction="row" justify="center" alignItems="center" >
                                    <Grid item md={12} xs={12}>
                                        <Typography align="center">Reserva: {props.nroReserva}</Typography>
                                    </Grid>
                                    <Grid item md={8} xs={5}>
                                        <img src={props.logo} alt="logo" width className={classes.logo} />
                                    </Grid>
                                    <Grid item md={12} xs={7} className={classes.tituloMobile}>
                                        <Typography variant="h6" align="center" style={{ fontWeight: "bold" }}> Hotel {props.id}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/*Derecha */}
                            <Grid item md={8} xs={12}>
                                <Grid container direction="row">
                                    <Grid item md={12} className={classes.reserva}>
                                        <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                                            <Grid item md={6} xs={12}>
                                                <Grid container direction="row" alignItems="center" justify="center">
                                                    <Grid item md={6} xs={8}>
                                                        <Button
                                                            size="small"
                                                            className={classes.botones}
                                                            startIcon={<AssignmentTurnedInIcon />}
                                                            onClick={props.checkInOpen}
                                                        >
                                                            Check-In:
                                                            </Button>
                                                    </Grid>
                                                    <Grid item md={4} xs={2}>
                                                        <Typography >{fechas(props.CheckIn)}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={12} xs={12} className={classes.reservaChekIn}>
                                        <Typography align="center" variant="h5" style={{ color: "#4caf50" }}>Ya puede hacer su Check-In</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        {<AdminCheckIn
                            user={props.user}
                            romantico={props.romantico}
                            ejecutivo={props.ejecutivo}
                            familia={props.familia}
                            preferencias={props.preferencias}
                            perfil={props.perfil}
                            romanticoOpen={props.romanticoOpen}
                            ejecutivoOpen={props.ejecutivoOpen}
                            familiaOpen={props.familiaOpen}
                            preferenciasOpen={props.preferenciasOpen}
                            reservasOpenContacto={props.reservasOpenContacto}
                            id={props.id}
                            huespedes={props.huespedes}
                            callPerfilCompletado={props.callPerfilCompletado}
                            perfilCompletado={props.perfilCompletado}
                            checkInOK={props.checkInOK}
                            handleCheckIn={props.handleCheckIn}
                        />}
                    </Grid>
                )

            }

        } else {
            return (
                <Grid>
                    <Grid container direction="row"  >
                        {/*IZQUIERDA */}
                        <Grid item md={3} xs={12} className={classes.izq} >
                            <Grid container direction="row" justify="center" alignItems="center" >
                                <Grid item md={12} xs={12}>
                                    <Typography align="center">Reserva: #1234567</Typography>
                                </Grid>
                                <Grid item md={8} xs={5}>
                                    <img src={props.logo} alt="logo" width className={classes.logo} />
                                </Grid>
                                <Grid item md={12} xs={7} >
                                    <Typography variant="h6" align="center" style={{ fontWeight: "bold" }}> Hotel {props.id}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/*Derecha */}
                        <Grid item md={8} xs={12}>
                            <Grid container direction="row">
                                <Grid item md={12} className={classes.reserva}>
                                    <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                                        <Grid item md={6} xs={12}>
                                            <Grid container direction="row" alignItems="center" justify="center">
                                                <Grid item md={6} xs={8}>
                                                    <Button
                                                        size="small"
                                                        className={classes.botones}
                                                        startIcon={<AssignmentTurnedInIcon />}
                                                        onClick={props.checkInOpen}
                                                    >
                                                        Check-In:
                                                        </Button>
                                                </Grid>
                                                <Grid item md={4} xs={2}>
                                                    <Typography >{fechas(props.CheckIn)}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item md={12} xs={12} className={classes.reservaChekIn}>
                                    <Typography align="center" variant="h5" color="error">Solo se puede hacer el Check-In 48 horas antes de su estadia</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            )
        }
    }

    function habilitarCheckOut(fecha) {

        var now = fechaNow()
        var aFecha1 = fecha.split("-");
        var aFecha2 = now.split("-");
        var fFecha1 = Date.UTC(aFecha1[0], aFecha1[1] - 1, aFecha1[2]);
        var fFecha2 = Date.UTC(aFecha2[0], aFecha2[1] - 1, aFecha2[2]);
        var dif = fFecha1 - fFecha2;
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));

        if (dias === 0) {
            if (props.checkOutOK) {
                return (
                    <Grid>
                        <Grid container direction="row"  >
                            {/*IZQUIERDA */}
                            <Grid item md={3} xs={12} className={classes.izq} >
                                <Grid container direction="row" justify="center" alignItems="center" >
                                    <Grid item md={12} xs={12}>
                                        <Typography align="center">Reserva: #1234567</Typography>
                                    </Grid>
                                    <Grid item md={8} xs={5}>
                                        <img src={props.logo} alt="logo" width className={classes.logo} />
                                    </Grid>
                                    <Grid item md={12} xs={7} >
                                        <Typography variant="h6" align="center" style={{ fontWeight: "bold" }}> Hotel {props.id}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/*Derecha */}
                            <Grid item md={8} xs={12}>
                                <Grid container direction="row">
                                    <Grid item md={12} className={classes.reserva}>
                                        <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                                            <Grid item md={6} xs={12}>
                                                <Grid container direction="row" alignItems="center" justify="center">
                                                    <Grid item md={6} xs={8}>
                                                        <Button
                                                            size="small"
                                                            className={classes.botones}
                                                            startIcon={<AssignmentTurnedInIcon />}
                                                            onClick={props.checkInOpen}
                                                        >
                                                            Check-Out:
                                                            </Button>
                                                    </Grid>
                                                    <Grid item md={4} xs={2}>
                                                        <Typography >{fechas(props.CheckOut)}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={12} xs={12} className={classes.reservaChekIn}>
                                        <Typography align="center" variant="h5" style={{ color: "#4caf50" }}>Check-Out Realizado con exito, por favor dirigase a recepcion y entregue su llave</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                )
            } else {
                return (
                    <Grid>
                        <Grid container direction="row"  >
                            {/*IZQUIERDA */}
                            <Grid item md={3} xs={12} className={classes.izq} >
                                <Grid container direction="row" justify="center" alignItems="center" >
                                    <Grid item md={12} xs={12}>
                                        <Typography align="center">Reserva: {props.nroReserva}</Typography>
                                    </Grid>
                                    <Grid item md={8} xs={5}>
                                        <img src={props.logo} alt="logo" width className={classes.logo} />
                                    </Grid>
                                    <Grid item md={12} xs={7} className={classes.tituloMobile}>
                                        <Typography variant="h6" align="center" style={{ fontWeight: "bold" }}> Hotel {props.id}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/*Derecha */}
                            <Grid item md={8} xs={12}>
                                <Grid container direction="row">
                                    <Grid item md={12} className={classes.reserva}>
                                        <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                                            <Grid item md={6} xs={12}>
                                                <Grid container direction="row" alignItems="center" justify="center">
                                                    <Grid item md={6} xs={8}>
                                                        <Button
                                                            size="small"
                                                            className={classes.botones}
                                                            startIcon={<AssignmentTurnedInIcon />}
                                                            onClick={props.checkInOpen}
                                                        >
                                                            Check-Out:
                                                            </Button>
                                                    </Grid>
                                                    <Grid item md={4} xs={2}>
                                                        <Typography >{fechas(props.CheckOut)}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={12} xs={12} className={classes.reservaChekIn}>
                                        <Typography align="center" variant="h5" style={{ color: "#4caf50" }}>Ya puede hacer su Check-Out</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <AdminCheckOut
                            id={props.id}
                            reservasOpenContacto={props.reservasOpenContacto}
                            checkOutOK={props.checkOutOK}
                            handleCheckOut={props.handleCheckOut}
                        />

                    </Grid>
                )
            }

        } else {
            return (
                <Grid>
                    <Grid container direction="row"  >
                        {/*IZQUIERDA */}
                        <Grid item md={3} xs={12} className={classes.izq} >
                            <Grid container direction="row" justify="center" alignItems="center" >
                                <Grid item md={12} xs={12}>
                                    <Typography align="center">Reserva: #1234567</Typography>
                                </Grid>
                                <Grid item md={8} xs={5}>
                                    <img src={props.logo} alt="logo" width className={classes.logo} />
                                </Grid>
                                <Grid item md={12} xs={7} >
                                    <Typography variant="h6" align="center" style={{ fontWeight: "bold" }}> Hotel {props.id}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/*Derecha */}
                        <Grid item md={8} xs={12}>
                            <Grid container direction="row">
                                <Grid item md={12} className={classes.reserva}>
                                    <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                                        <Grid item md={6} xs={12}>
                                            <Grid container direction="row" alignItems="center" justify="center">
                                                <Grid item md={6} xs={8}>
                                                    <Button
                                                        size="small"
                                                        className={classes.botones}
                                                        startIcon={<AssignmentTurnedInIcon />}
                                                        onClick={props.checkInOpen}
                                                    >
                                                        Check-Out:
                                                        </Button>
                                                </Grid>
                                                <Grid item md={4} xs={2}>
                                                    <Typography >{fechas(props.CheckOut)}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item md={12} xs={12} className={classes.reservaChekIn}>
                                    <Typography align="center" variant="h5" color="error">Solo se puede hacer el Check-out en su dia correspondiente</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            )
        }
    }




    if (props.modo === "Reservas") {
        if (props.id !== "") {
            return (
                <Card elevation={10}>
                    <CardContent>
                        <Grid container direction="row"  >
                            {/*IZQUIERDA */}
                            <Grid item md={3} xs={12} className={classes.izq} >
                                <Grid container direction="row" justify="center" alignItems="center" >
                                    <Grid item md={12} xs={12}>
                                        <Typography align="center">Reserva: {props.nroReserva}</Typography>
                                    </Grid>
                                    <Grid item md={8} xs={5}>
                                        <img src={props.logo} alt="logo" width className={classes.logo} />
                                    </Grid>
                                    <Grid item md={12} xs={7} className={classes.tituloMobile}>
                                        <Typography variant="h6" align="center" style={{ fontWeight: "bold" }}> Hotel {props.id}</Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                            {/*Derecha */}
                            <Grid item md={8} xs={12}>
                                <Grid container direction="row">

                                    <Grid item md={12} className={classes.reserva}>
                                        <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                                            <Grid item md={6} xs={12}>
                                                <Grid container direction="row" alignItems="center" justify="center">
                                                    <Grid item md={6} xs={6}>
                                                        <Button
                                                            size="small"
                                                            className={classes.botones}
                                                            startIcon={<AssignmentTurnedInIcon />}
                                                            onClick={props.checkInOpen}
                                                        >
                                                            Check-In:
                                                        </Button>
                                                    </Grid>
                                                    <Grid item md={4} xs={4}>
                                                        <Typography >{fechas(props.CheckIn)}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item md={6} xs={12}>
                                                <Grid container direction="row" alignItems="center" justify="center">
                                                    <Grid item md={6} xs={6}>
                                                        <Button
                                                            size="small"
                                                            className={classes.botones}
                                                            startIcon={<MeetingRoomIcon />}
                                                            onClick={props.checkOutOpen}
                                                        >
                                                            Check-Out:
                                                        </Button>
                                                    </Grid>
                                                    <Grid item md={6} xs={4}>
                                                        <Typography >{fechas(props.CheckOut)}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={10} xs={12} className={classes.reserva}>
                                        <Grid container >
                                            <Grid item md={7} xs={8}>
                                                <Typography align="center" style={{ fontWeight: "bold" }}>Cantidad de Huespedes:</Typography>
                                            </Grid>
                                            <Grid item md={4} xs={2}>
                                                <Grid container  >
                                                    {huespedes(props.huespedes).map(index => (
                                                        <Grid item key={index}>
                                                            <PersonIcon color="primary" />
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </Grid>

                                    {/*<Grid item md={12} xs={12} className={classes.reserva}>
                                    <Grid container justify="center" alignItems="center" >
                                        <Grid item >
                                            <Typography variant="h5" style={{ fontWeight: "bold" }}>Importe Total:</Typography>
                                        </Grid>
                                        <Grid item >
                                            <Typography variant="h5" color="primary" style={{ fontWeight: "bold" }}> ${getTotalPrice(props.CheckIn, props.CheckOut) * parseInt(props.precio)}</Typography>
                                        </Grid>
                                    </Grid>

                                </Grid>*/}

                                </Grid>
                            </Grid>
                        </Grid>
                        <AdminReserva huespedes={props.huespedes}
                            id={props.id}
                            user={props.user}
                            expanded={props.expanded}
                            contacto={props.contacto}
                            precio={getTotalPrice(props.CheckIn, props.CheckOut) * parseInt(props.precio)}
                            callCheckIn={props.callCheckIn}
                            callCheckOut={props.callCheckOut}
                            callHuespedes={props.callHuespedes}
                            nroReserva={props.nroReserva}
                        />
                    </CardContent>
                </Card>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }
    else {
        if (props.modo === "Check-In") {
            if (props.id !== "") {
                return (
                    <Card elevation={10}>
                        <CardContent>
                            {habilitarCheckIN(props.CheckIn)}
                        </CardContent>
                    </Card>
                )
            } else {
                return (
                    <div>

                    </div>
                )
            }
        } else {
            if (props.modo === "General") {
                if (props.id !== "") {
                    return (
                        <Grid container direction="row"  >
                            {/*IZQUIERDA */}
                            <Grid item md={3} xs={12} className={classes.izq} >
                                <Grid container direction="row" justify="center" alignItems="center" >
                                    <Grid item md={12} xs={12}>
                                        <Typography align="center">Reserva: {props.nroReserva}</Typography>
                                    </Grid>
                                    <Grid item md={8} xs={5}>
                                        <img src={props.logo} alt="logo"  className={classes.logo} />
                                    </Grid>
                                    <Grid item md={12} xs={7}>
                                        <Typography variant="body1" align="center" style={{ fontWeight: "bold" }}> Hotel {props.id}</Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                            {/*Derecha */}
                            <Grid item md={8} xs={12}>
                                <Grid container direction="row">

                                    <Grid item md={12} className={classes.reserva}>
                                        <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                                            <Grid item md={6} xs={12}>
                                                <Grid container direction="row" alignItems="center" justify="center">
                                                    <Grid item md={6} xs={6}>
                                                        <Button
                                                            size="small"
                                                            className={classes.botones}
                                                            startIcon={<AssignmentTurnedInIcon />}
                                                            onClick={props.checkInOpen}
                                                        >
                                                            Check-In:
                                                        </Button>
                                                    </Grid>
                                                    <Grid item md={6} xs={4}>
                                                        <Typography >{fechas(props.CheckIn)}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item md={6} xs={12}>
                                                <Grid container direction="row" alignItems="center" justify="center">
                                                    <Grid item md={6} xs={6}>
                                                        <Button
                                                            size="small"
                                                            className={classes.botones}
                                                            startIcon={<MeetingRoomIcon />}
                                                            onClick={props.checkOutOpen}
                                                        >
                                                            Check-Out:
                                                        </Button>
                                                    </Grid>
                                                    <Grid item md={6} xs={4}>
                                                        <Typography >{fechas(props.CheckOut)}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={12} xs={12} className={classes.reserva}>
                                        <Grid container >
                                            <Grid item md={7} xs={9}>
                                                <Typography align="center" style={{ fontWeight: "bold" }}>Cantidad de Huespedes:</Typography>
                                            </Grid>
                                            <Grid item md={5} xs={3}>
                                                <Grid container  >
                                                    {huespedes(props.huespedes).map((item,index) => (
                                                        <Grid item key={index}>
                                                            <PersonIcon color="primary" />
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </Grid>

                                    <Grid item md={12} xs={12} className={classes.reserva}>
                                        <Grid container justify="center" alignItems="center" >
                                            <Grid item  >
                                                <Typography variant="h5" style={{ fontWeight: "bold" }}>Importe Total:</Typography>
                                            </Grid>
                                            <Grid item >
                                                <Typography variant="h5" color="primary" style={{ fontWeight: "bold" }}> ${getTotalPrice(props.CheckIn, props.CheckOut) * parseInt(props.precio)}</Typography>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    )
                } else {
                    return (
                        <div></div>
                    )
                }
            } else {
                if (props.modo === "Historial") {
                    if (props.id !== "") {
                        return (
                            <Card elevation={10}>
                                <CardContent>
                                    <Grid container direction="row"  >
                                        {/*IZQUIERDA */}
                                        <Grid item md={3} xs={12} className={classes.izq} >
                                            <Grid container direction="row" justify="center" alignItems="center" >
                                                <Grid item md={12}>
                                                    <Typography align="center">Reserva: {props.nroReserva}</Typography>
                                                </Grid>
                                                <Grid item md={8} xs={5}>
                                                    <img src={props.logo} alt="logo" width className={classes.logo} />
                                                </Grid>
                                                <Grid item md={12} xs={7}>
                                                    <Typography variant="h6" align="center" style={{ fontWeight: "bold" }}> Hotel {props.id}</Typography>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        {/*Derecha */}
                                        <Grid item md={8} xs={12}>
                                            <Grid container direction="row">

                                                <Grid item md={12} className={classes.reserva}>
                                                    <Grid container alignItems="center" justify="flex-start">


                                                        <Grid item md={4} xs={6}>
                                                            <Button

                                                                className={classes.botones}
                                                                startIcon={<AssignmentTurnedInIcon />}
                                                                onClick={props.checkInOpen}
                                                            >
                                                                Check-In:
                                           </Button>
                                                        </Grid>
                                                        <Grid item md={2} xs={6}>
                                                            <Typography >{fechas(props.CheckIn)}</Typography>
                                                        </Grid>

                                                        <Grid item md={4} xs={6}>
                                                            <Button
                                                                className={classes.botones}
                                                                startIcon={<MeetingRoomIcon />}
                                                                onClick={props.checkOutOpen}
                                                            >
                                                                Check-Out:
                                    </Button>
                                                        </Grid>
                                                        <Grid item md={2} xs={6}>
                                                            <Typography >{fechas(props.CheckOut)}</Typography>
                                                        </Grid>

                                                    </Grid>
                                                </Grid>

                                                <Grid item md={10} xs={12} className={classes.reserva}>
                                                    <Grid container >
                                                        <Grid item md={7} xs={8}>
                                                            <Typography align="center" style={{ fontWeight: "bold" }}>Cantidad de Huespedes:</Typography>
                                                        </Grid>
                                                        <Grid item md={4} xs={2}>
                                                            <Grid container  >
                                                                {huespedes(props.huespedes).map(index => (
                                                                    <Grid item key={index}>
                                                                        <PersonIcon color="primary" />
                                                                    </Grid>
                                                                ))}
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>

                                                </Grid>

                                                <Grid item md={12} xs={12} className={classes.reserva}>
                                                    <Grid container justify="center" alignItems="center" >
                                                        <Grid item >
                                                            <Typography variant="h5" style={{ fontWeight: "bold" }}>Importe Total:</Typography>
                                                        </Grid>
                                                        <Grid item >
                                                            <Typography variant="h5" color="primary" style={{ fontWeight: "bold" }}> ${getTotalPrice(props.CheckIn, props.CheckOut) * parseInt(props.precio)}</Typography>
                                                        </Grid>
                                                    </Grid>

                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        )
                    } else {
                        return (
                            <div>

                            </div>
                        )
                    }
                } else {
                    if (props.modo === "Check-Out") {
                        if (props.id !== "") {
                            return (
                                <Card elevation={10}>
                                    <CardContent>
                                        {habilitarCheckOut(props.CheckOut)}
                                    </CardContent>
                                </Card>
                            )
                        } else {
                            return (
                                <div>

                                </div>
                            )
                        }
                    } else {
                        if (props.modo === "Servicios") {
                            if (props.id !== "") {
                                return (
                                    <Card elevation={10}>
                                        <CardContent>
                                            <Grid container direction="row"  >
                                                {/*IZQUIERDA */}
                                                <Grid item md={3} xs={12} className={classes.izq} >
                                                    <Grid container direction="row" justify="center" alignItems="center" >
                                                        <Grid item md={12} xs={12}>
                                                            <Typography align="center">Reserva: {props.nroReserva}</Typography>
                                                        </Grid>
                                                        <Grid item md={8} xs={5}>
                                                            <img src={props.logo} alt="logo" width className={classes.logo} />
                                                        </Grid>
                                                        <Grid item md={12} xs={7} className={classes.tituloMobile}>
                                                            <Typography variant="h6" align="center" style={{ fontWeight: "bold" }}> Hotel {props.id}</Typography>
                                                        </Grid>

                                                    </Grid>
                                                </Grid>
                                                {/*Derecha */}
                                                <Grid item md={8} xs={12}>
                                                    <Grid container direction="row">

                                                        <Grid item md={12} className={classes.reserva}>
                                                            <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                                                                <Grid item md={6} xs={12}>
                                                                    <Grid container direction="row" alignItems="center" justify="center">
                                                                        <Grid item md={6} xs={6}>
                                                                            <Button
                                                                                size="small"
                                                                                className={classes.botones}
                                                                                startIcon={<AssignmentTurnedInIcon />}
                                                                                onClick={props.checkInOpen}
                                                                            >
                                                                                Check-In:
                                                                             </Button>
                                                                        </Grid>
                                                                        <Grid item md={4} xs={4}>
                                                                            <Typography >{fechas(props.CheckIn)}</Typography>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                                <Grid item md={6} xs={12}>
                                                                    <Grid container direction="row" alignItems="center" justify="center">
                                                                        <Grid item md={6} xs={6}>
                                                                            <Button
                                                                                size="small"
                                                                                className={classes.botones}
                                                                                startIcon={<MeetingRoomIcon />}
                                                                                onClick={props.checkOutOpen}
                                                                            >
                                                                                Check-Out:
                                                                            </Button>
                                                                        </Grid>
                                                                        <Grid item md={6} xs={4}>
                                                                            <Typography >{fechas(props.CheckOut)}</Typography>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>

                                                        <Grid item md={12} xs={12} className={classes.reservaChekIn}>
                                                            <Typography align="center" variant="h5" color="error">Cuando empieze su estadia va a poder seleccionar servicios</Typography>
                                                        </Grid>

                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                )
                            } else {
                                return (
                                    <div>

                                    </div>
                                )
                            }

                        } else {
                            if (props.modo === "faltaChekIn") {
                                if (props.id !== "") {
                                    return (
                                        <Card elevation={10}>
                                            <CardContent>
                                                <Grid container direction="row"  >
                                                    {/*IZQUIERDA */}
                                                    <Grid item md={3} xs={12} className={classes.izq} >
                                                        <Grid container direction="row" justify="center" alignItems="center" >
                                                            <Grid item md={12} xs={12}>
                                                                <Typography align="center">Reserva: {props.nroReserva}</Typography>
                                                            </Grid>
                                                            <Grid item md={8} xs={5}>
                                                                <img src={props.logo} alt="logo" width className={classes.logo} />
                                                            </Grid>
                                                            <Grid item md={12} xs={7} className={classes.tituloMobile}>
                                                                <Typography variant="h6" align="center" style={{ fontWeight: "bold" }}> Hotel {props.id}</Typography>
                                                            </Grid>

                                                        </Grid>
                                                    </Grid>
                                                    {/*Derecha */}
                                                    <Grid item md={8} xs={12}>
                                                        <Grid container direction="row">

                                                            <Grid item md={12} className={classes.reserva}>
                                                                <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                                                                    <Grid item md={6} xs={12}>
                                                                        <Grid container direction="row" alignItems="center" justify="center">
                                                                            <Grid item md={6} xs={6}>
                                                                                <Button
                                                                                    size="small"
                                                                                    className={classes.botones}
                                                                                    startIcon={<AssignmentTurnedInIcon />}
                                                                                    onClick={props.checkInOpen}
                                                                                >
                                                                                    Check-In:
                                                                                 </Button>
                                                                            </Grid>
                                                                            <Grid item md={4} xs={4}>
                                                                                <Typography >{fechas(props.CheckIn)}</Typography>
                                                                            </Grid>
                                                                        </Grid>
                                                                    </Grid>
                                                                    <Grid item md={6} xs={12}>
                                                                        <Grid container direction="row" alignItems="center" justify="center">
                                                                            <Grid item md={6} xs={6}>
                                                                                <Button
                                                                                    size="small"
                                                                                    className={classes.botones}
                                                                                    startIcon={<MeetingRoomIcon />}
                                                                                    onClick={props.checkOutOpen}
                                                                                >
                                                                                    Check-Out:
                                                                                </Button>
                                                                            </Grid>
                                                                            <Grid item md={6} xs={4}>
                                                                                <Typography >{fechas(props.CheckOut)}</Typography>
                                                                            </Grid>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>

                                                            <Grid item md={12} xs={12} className={classes.reservaChekIn}>
                                                                <Typography align="center" variant="h5" color="error">Realice su Check-In primero para empezar a utilizar sus servicios</Typography>
                                                            </Grid>

                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    )
                                } else {
                                    return (
                                        <div>

                                        </div>
                                    )
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}





