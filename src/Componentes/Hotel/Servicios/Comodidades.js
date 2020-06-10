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

class Comodidades extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    servicio() {
        if (this.props.servicio) {
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
    limpieza() {
        if (this.props.limpieza) {
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
    comidas() {
        if (this.props.comidas) {
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
                    <FormLabel>Servicio a la habitacion</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('servicio')} checked={this.props.servicio} name="servicio" />} label="Servicio" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            {this.servicio()}
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <FormLabel component="legend">Limpieza a la habitacion</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('limpieza')} checked={this.props.limpieza} name="limpieza" />} label="limpieza" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            {this.limpieza()}
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <FormLabel component="legend">Comidas especiales</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('comidas')} checked={this.props.tintoreria} name="comidas" />} label="comidas" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            {this.comidas()}
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>
        )

    }
}

Comodidades.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comodidades);