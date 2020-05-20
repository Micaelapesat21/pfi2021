import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import clsx from 'clsx';
import ReservaHelper from './../Utils/ReservaHelper.js'


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
})

class General extends Component {

     getTotalPrice(checkIn,checkOut,precio) {
        return ReservaHelper.total(checkIn,checkOut,precio);
      }

    reserva() {
        if (this.props.id !== "") {
            return (
                <Grid>
                    <Typography>Nombre: {this.props.id}</Typography>
                    <Typography>Fecha de entrada: {this.props.CheckIn}</Typography>
                    <Typography>Fecha de Salida: {this.props.CheckOut}</Typography>
                    <Typography>Cantidad Huespedes: {this.props.huespedes}</Typography>
                    <Typography>Precio por noche: {this.props.precio}</Typography>
                    <Typography>Precio Total: ${this.getTotalPrice(this.props.CheckIn,this.props.CheckOut)*parseInt(this.props.precio)}</Typography>
                </Grid>
            )
        } else
            return(
                <div>

                </div>
            )
    }

    render() {
        const { classes } = this.props;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return (
            <Grid container spacing={3}>

                <Grid item xs={12} md={8} lg={9}>
                    <Paper className={fixedHeightPaper}>
                        <Typography variant="h4">Tus Reservas</Typography>
                        {this.reserva()}
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                        <Typography variant="h4">Tus Datos</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4">Tus Preferencias</Typography>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

General.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(General);