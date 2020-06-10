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

class Actividades extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alquileres:false,
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
    alquileres() {
        if (this.state.alquileres) {
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
    eventos() {
        if (this.props.eventos) {
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
    actividades() {
        if (this.props.actividades) {
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

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };


    render() {
        const { classes } = this.props;

        return (
            <Grid container>
                <Grid item xs={12} >
                    <FormLabel>Alquilerese</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.handleChange('alquileres')} checked={this.state.alquileres} name="alquileres" />} label="alquileres" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            {this.alquileres()}
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <FormLabel component="legend">Eventos Organizados</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('eventos')} checked={this.props.estacionamiento} name="eventos" />} label="eventos" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            {this.eventos()}
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <FormLabel component="legend">Actividades del hotel</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('actividades')} checked={this.props.actividades} name="actividades" />} label="actividades" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            {this.actividades()}
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>
        )

    }
}

Actividades.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Actividades);