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

class Bienestar extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
   

    spa() {
        if (this.props.spa) {
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
    gimnasio() {
        if (this.props.gimnasio) {
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
    masajes() {
        if (this.props.masajes) {
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
    tratamiento() {
        if (this.props.tratamiento) {
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
                    <FormLabel>Reserva de spa</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('spa')} checked={this.props.restaurante} name="spa" />} label="Spa" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            {this.spa()}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <FormLabel component="legend">Pedido de gimnasio</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('gimnasio')} checked={this.props.estacionamiento} name="gimnasio" />} label="Gimnasio" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            {this.gimnasio()}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component="legend">Pedido de masajes</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('masajes')} checked={this.props.masajes} name="masajes" />} label="Masajes" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            {this.masajes()}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component="legend">Tratamiento corporales</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('tratamiento')} checked={this.props.tratamiento} name="tratamiento" />} label="Tratamientos" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            {this.tratamiento()}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )

    }
}

Bienestar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bienestar);