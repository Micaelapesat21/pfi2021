import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, FormControl, FormLabel, FormControlLabel, Checkbox } from '@material-ui/core';
import Hora from './Hora'

const styles = theme => ({
    formControl: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
})

class HotelServicios extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    restaurante() {
        if (this.props.restaurante) {
            return (
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <Hora label={"Desde"} />
                    </Grid>
                    <Grid item md={3}>
                        <Hora label={"Hasta"} />
                    </Grid>
                    <Grid item md={3}>
                        <FormControlLabel control={<Checkbox color="primary" checked={false} name="checkedE" />} label="24 Horas" />
                    </Grid>
                </Grid>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    estacionamiento() {
        if (this.props.estacionamiento) {
            return (
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <Hora label={"Desde"} />
                    </Grid>
                    <Grid item md={3}>
                        <Hora label={"Hasta"} />
                    </Grid>
                    <Grid item md={3}>
                        <FormControlLabel control={<Checkbox color="primary" checked={false} name="checkedE" />} label="24 Horas" />
                    </Grid>
                </Grid>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    tintoreria() {
        if (this.props.tintoreria) {
            return (
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <Hora label={"Desde"} />
                    </Grid>
                    <Grid item md={3}>
                        <Hora label={"Hasta"} />
                    </Grid>
                    <Grid item md={3}>
                        <FormControlLabel control={<Checkbox color="primary" checked={false} name="checkedE" />} label="24 Horas" />
                    </Grid>
                </Grid>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

  

    render() {
        const { classes } = this.props;

        return (
            <Grid container>
                <Grid item xs={12} >
                    <FormLabel>Reserva de restaurante</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('restaurante')} checked={this.props.restaurante} name="restaurante" />} label="Restaurante" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            {this.restaurante()}
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <FormLabel component="legend">Reserva de Estacionamiento</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('estacionamiento')} checked={this.props.estacionamiento} name="estacionamiento" />} label="Estacionamiento" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            {this.estacionamiento()}
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <FormLabel component="legend">Pedido de Tintoreria</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('tintoreria')} checked={this.props.tintoreria} name="tintoreria" />} label="Tintoreria" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            {this.tintoreria()}
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>
        )

    }
}

HotelServicios.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HotelServicios);