import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Paper, Typography, Button, Divider } from '@material-ui/core';
import clsx from 'clsx';
import foto from '../../Imagenes/logoHotel.png'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import TabsServicios from './Servicios/TabsServicios'
import Solicitados from './Servicios/Solicitados';
import ReservaRender from './ReservaRender';
import foto2 from '../../Imagenes/logoFourSeason.jpg'
//import Prueba from './Prueba'



const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 100,
        [theme.breakpoints.down('xs')]: {
            height: 400,
        },
    },
    fixedHeightDatos: {
        height: 400,
        [theme.breakpoints.down('xs')]: {
            height: 380,
        },
    },
    izq: {
        borderRight: "1px solid #e0e0e0",
        [theme.breakpoints.down('xs')]: {
            borderRight: "1px solid #ffffff",
        },
    },
    arriba: {
        borderBottom: "1px solid #e0e0e0",
        [theme.breakpoints.down('xs')]: {
            borderRight: "1px solid #ffffff",
        },
        paddingLeft: theme.spacing(1),
    },
    logo: {
        padding: theme.spacing(1),
        height: 60,
        width: 60,

    },

})



class Servicios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurante: false,
            estacionamiento: false,
            tintoreria: false,
            servicio: false,
            limpieza: false,
            comidas: false,
            spa: false,
            gimnasio: false,
            masajes: false,
            tratamiento: false,
            botes: false,
            bicicletas: false,
            autos: false,
            motos: false,
            ski: false,
            Buceo: false,
            eventos: false,
            actividades: false,
        }
    }



    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };


    fechas(fecha) {

        var fechaArray = fecha.split("-");
        var dia = fechaArray[2]
        var mes = fechaArray[1]
        var año = fechaArray[0]
        var fNueva = []
        var fecha2 = fNueva.concat(dia, mes, año)
        return fecha2.join("/")

    }
    pad(n) {
        return n + 1
    }

    fechaNow() {
        var date = new Date()
        var dia = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var fecha = year + "-" + this.pad(month) + "-" + dia;
        return fecha
    }




    render() {
        const { classes } = this.props;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        const fixedHeightPaperDatos = clsx(classes.paper, classes.fixedHeightDatos);
        var now = this.fechaNow()
        var aFecha1 = this.props.CheckIn.split("-");
        var aFecha2 = this.props.CheckOut.split("-");
        var aNow = now.split("-");

        var fFecha1 = Date.UTC(aFecha1[0], aFecha1[1] - 1, aFecha1[2]);
        var fFecha2 = Date.UTC(aFecha2[0], aFecha2[1] - 1, aFecha2[2]);
        var fNow = Date.UTC(aNow[0], aNow[1] - 1, aNow[2]);

        //var dif1 = fFecha1 - fNow;
        var dif2 = fFecha2 - fNow;
        var dif3 = fNow - fFecha1

        // var Inicio = Math.floor(dif1 / (1000 * 60 * 60 * 24));
        var Fin = Math.floor(dif2 / (1000 * 60 * 60 * 24));
        var Dias = Math.floor(dif3 / (1000 * 60 * 60 * 24));
        console.log(Fin)

        if (Dias >= 0 && Fin > 0) {


            return (
                <Grid container spacing={2}>

                    <Grid item xs={12} md={8} lg={9}>
                        <Grid container spacing={2}>

                            <Grid item xs={12} >
                                <Paper className={fixedHeightPaper} elevation={3} >
                                    <Grid container>
                                        <Grid item md={1} className={classes.izq}>
                                            <img src={foto} alt="logo" className={classes.logo} />
                                        </Grid>
                                        <Grid item md={11}>
                                            <Grid container>
                                                <Grid item md={12} className={classes.arriba}>
                                                    <Typography component="h2" variant="h6" color="primary">Estadia Hotel Paihuen #1234567</Typography>
                                                </Grid>
                                                <Grid item md={12}>
                                                    <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                                                        <Grid item md={6} xs={12}>
                                                            <Grid container direction="row" alignItems="center" justify="center">
                                                                <Grid item md={5} xs={6}>
                                                                    <Button
                                                                        size="small"
                                                                        className={classes.botones}
                                                                        startIcon={<AssignmentTurnedInIcon />}
                                                                        onClick={this.props.checkInOpen}
                                                                    >
                                                                        Check-In:
                                                                </Button>
                                                                </Grid>
                                                                <Grid item md={4} xs={4}>
                                                                    <Typography >{this.fechas(this.props.CheckIn)}</Typography>
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
                                                                        onClick={this.props.checkOutOpen}
                                                                    >
                                                                        Check-Out:
                                                                </Button>
                                                                </Grid>
                                                                <Grid item md={4} xs={4}>
                                                                    <Typography >{this.fechas(this.props.CheckOut)}</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper} elevation={3}>
                                    <Typography component="h2" variant="h6" color="primary" gutterBottom>Seleccione sus servicios</Typography>
                                    <Divider />

                                    <TabsServicios
                                        restaurante={this.state.restaurante}
                                        estacionamiento={this.state.estacionamiento}
                                        tintoreria={this.state.tintoreria}
                                        servicio={this.state.servicio}
                                        limpieza={this.state.limpieza}
                                        comidas={this.state.comidas}
                                        spa={this.state.spa}
                                        gimnasio={this.state.gimnasio}
                                        masajes={this.state.masajes}
                                        tratamiento={this.state.tratamiento}
                                        botes={this.state.botes}
                                        bicicletas={this.state.bicicletas}
                                        autos={this.state.autos}
                                        motos={this.state.motos}
                                        ski={this.state.ski}
                                        Buceo={this.state.Buceo}
                                        eventos={this.state.eventos}
                                        actividades={this.state.actividades}
                                        handleChange={this.handleChange}

                                    />
                                </Paper>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaperDatos} elevation={3}>
                            <Typography component="h2" variant="h6" color="primary" gutterBottom>Servicios Solicitados</Typography>
                            <Divider />
                            <Solicitados />
                            <Divider />
                            <Solicitados />
                            <Divider />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8} lg={9}>

                    </Grid>
                </Grid>
            );
        } else {
            return (
                <Grid container spacing={3} justify="center" alignItems="center">
                    <Grid item xs={12} md={8} lg={9}>
                        <Typography variant="h3">Servicios</Typography>
                    </Grid>
                    <Grid item xs={12} md={8} lg={9}>
                        <ReservaRender
                            user={this.props.user}
                            id={this.props.id}
                            nroReserva={"#1234568"}
                            logo={foto}
                            CheckIn={this.props.CheckIn}
                            CheckOut={this.props.CheckOut}
                            huespedes={this.props.huespedes}
                            precio={this.props.precio}
                            checkInOpen={this.props.checkInOpen}
                            checkOutOpen={this.props.checkOutOpen}
                            modo={this.props.modo}

                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={9}>
                        <ReservaRender
                            id={"Four Season"}
                            nroReserva={"#1234567"}
                            logo={foto2}
                            CheckIn={"2020-12-24"}
                            CheckOut={"2020-12-30"}
                            huespedes={4}
                            precio={"1234"}
                            checkInOpen={this.props.checkInOpen}
                            checkOutOpen={this.props.checkOutOpen}
                            modo={this.props.modo}
                        />
                    </Grid>



                </Grid>
            )
        }
    }
}

Servicios.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Servicios);