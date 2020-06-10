import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, FormControl, FormLabel, FormControlLabel, Checkbox, TextField } from '@material-ui/core';
import Hora from './Hora'
import Fecha from './Fecha'

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
            alquileres: false,
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
        const { classes } = this.props;
        if (this.state.alquileres) {
            return (
                <Grid container spacing={2}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormControlLabel control={<Checkbox color="primary" onChange={this.handleChange('botes')} checked={this.state.botes} name="botes" />} label="De Botes" />
                        <FormControlLabel control={<Checkbox color="primary" onChange={this.handleChange('bicicletas')} checked={this.state.bicicletas} name="bicicletas" />} label="De Bicicletas" />
                        <FormControlLabel control={<Checkbox color="primary" onChange={this.handleChange('autos')} checked={this.state.autos} name="autos" />} label="De Autos" />
                        <FormControlLabel control={<Checkbox color="primary" onChange={this.handleChange('motos')} checked={this.state.motos} name="motos" />} label="De Motos" />
                        <FormControlLabel control={<Checkbox color="primary" onChange={this.handleChange('ski')} checked={this.state.ski} name="ski" />} label="De Ski" />
                        <FormControlLabel control={<Checkbox color="primary" onChange={this.handleChange('Buceo')} checked={this.state.Buceo} name="Buceo" />} label="De Buceo" />
                    </FormControl>
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
                        <Fecha label={"Dia"} />
                    </Grid>
                    <Grid item md={3}>
                        <Hora label={"A las"} />
                    </Grid>
                    <Grid item md={3}>
                        <TextField
                        label="Nombre del evento"
                        />
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
                        <Fecha label={"Dia"} />
                    </Grid>
                    <Grid item md={3}>
                        <Hora label={"A las"} />
                    </Grid>
                    <Grid item md={3}>
                        <TextField
                        label="Nombre de la actividad"
                        />
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
                    <FormLabel>Alquileres</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.handleChange('alquileres')} checked={this.state.alquileres} name="alquileres" />} label="Alquileres" />
                            </FormControl>
                        </Grid>
                        <Grid item md={11}>
                            {this.alquileres()}
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <FormLabel component="legend">Eventos Organizados</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('eventos')} checked={this.props.estacionamiento} name="eventos" />} label="Eventos" />
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
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('actividades')} checked={this.props.actividades} name="actividades" />} label="Actividades" />
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