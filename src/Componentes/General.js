import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Paper, Typography, Button, Divider, FormControl, FormLabel, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import clsx from 'clsx';
import ReservaRender from './MiReserva/ReservaRender.js';
import foto from '../Imagenes/logoHotel.png'



const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 260,
        [theme.breakpoints.down('xs')]: {
            height: 400,
        },
    },
    fixedHeightDatos: {
        height: 380,
        [theme.breakpoints.down('xs')]: {
            height: 380,
        },
    },
})



class General extends Component {



    perfil() {
        if (this.props.romantico) {
            return (
                <FormControlLabel
                    control={<Switch color="primary" checked={true} /*onChange={romanticoOpen}*/ name="romantico" />}
                    label="Romantico"
                />
            )
        } else {
            if (this.props.ejecutivo) {
                return (
                    <FormControlLabel
                        control={<Switch color="primary" checked={true} /*onChange={romanticoOpen}*/ name="ejecutivo" />}
                        label="Ejecutivo"
                    />
                )
            } else {
                if (this.props.familia) {
                    return (
                        <FormControlLabel
                            control={<Switch color="primary" checked={true} /*onChange={romanticoOpen}*/ name="familia" />}
                            label="Familia"
                        />
                    )
                } else {
                    if (this.props.preferencias) {
                        return (
                            <FormControlLabel
                                control={<Switch color="primary" checked={true} /*onChange={romanticoOpen}*/ name="preferencias" />}
                                label="Mis Preferencias"
                            />
                        )
                    } else {
                        return (
                            <Typography align="center" color="error" variant="body2">No se ha seleccionado un perfil</Typography>
                        )
                    }
                }
            }
        }
    }

    datosCompletados(){
        if(this.props.perfilCompletado){
            return(
                <Typography align="center" style={{ color: "#4caf50" }}  variant="subtitle2">Completado!</Typography>
            )
        }else{
            return(
                <Typography align="center" color="error" variant="subtitle2">Faltan datos por completar</Typography>
            )
        }
    }


    render() {
        const { classes } = this.props;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        const fixedHeightPaperDatos = clsx(classes.paper, classes.fixedHeightDatos);


        return (
            <Grid container spacing={3}>

                <Grid item xs={12} md={8} lg={9}>
                    <Grid container spacing={3}>

                        <Grid item xs={12} >
                            <Paper className={fixedHeightPaper} elevation={3} >
                                <Grid container direction="row" >
                                    <Grid item md={10} xs={10}>
                                        <Typography align="left" variant="h4">Reserva actual</Typography>
                                    </Grid>
                                    <Grid item md={2} xs={10}>
                                        <Button color="primary" onClick={this.props.reservasOpen}>ver todas</Button>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <ReservaRender
                                    id={this.props.id}
                                    logo={foto}
                                    CheckIn={this.props.CheckIn}
                                    CheckOut={this.props.CheckOut}
                                    huespedes={this.props.huespedes}
                                    precio={this.props.precio}
                                    checkInOpen={this.props.checkInOpen}
                                    checkOutOpen={this.props.checkOutOpen}
                                    modo={this.props.modo}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper} elevation={3}>
                                <Typography variant="h4">Avisos</Typography>
                                <Divider />

                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaperDatos} elevation={3}>
                        <Typography variant="h4">Mi Perfil</Typography>
                        <Divider />
                        <br />
                        <Typography style={{ fontWeight: "bold" }}>Nombre y apellido: </Typography>
                        <Typography >{this.props.user.displayName}</Typography>
                        <Typography style={{ fontWeight: "bold" }}>Email: </Typography>
                        <Typography >{this.props.user.email}</Typography>
                       {this.datosCompletados()}
                        <Button variant="outlined" onClick={this.props.perfilOpen}>Editar Datos</Button>
                        <br />
                        <Divider />
                        <Typography variant="h5">Perfil</Typography>
                        <FormControl component="fieldset" className={classes.formControl}>
                            {/*PERFILES*/}
                            <FormLabel component="legend">Perfil seleccionado</FormLabel>
                            <FormGroup tag="div">
                                {this.perfil()}
                            </FormGroup>
                        </FormControl>

                        <Button variant="outlined" onClick={this.props.perfilOpenPerfil}>Editar </Button>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8} lg={9}>

                </Grid>
            </Grid>
        );
    }
}

General.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(General);