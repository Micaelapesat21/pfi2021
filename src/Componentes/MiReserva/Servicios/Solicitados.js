import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';

const styles = theme => ({

})

class Solicitados extends Component {
    render() {
        //const { classes } = this.props;
        return (
            <Grid container>
                <Grid item md={12}>
                    <Typography variant="body1" style={{ fontWeight: "bold" }} >Reserva de restaurante </Typography>
                </Grid>               
                <Grid item md={12}>
                    <Typography variant="body2" style={{ color: "#9e9e9e" }}>Servicios de Hotel</Typography>
                </Grid>

                <Grid item md={3}>
                    <Typography variant="body2" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                </Grid>
                <Grid item md={8}>
                    <Typography variant="body2" >14 de Junio</Typography>
                </Grid>
                <Grid item md={3}>
                    <Typography variant="body2" style={{ color: "#9e9e9e" }}>Hora:</Typography>
                </Grid>
                <Grid item md={8}>
                    <Typography variant="body2">21:00Hs</Typography>
                </Grid>
                <Grid item md={12}>
                    <Typography variant="body2" style={{ color: "#4caf50" }}>Estado: Confirmado</Typography>
                </Grid>
            </Grid>
        );
    }
}

Solicitados.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Solicitados);