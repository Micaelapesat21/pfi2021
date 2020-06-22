import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';

import ReservaRender from './ReservaRender';
import foto from '../../Imagenes/logoHotel.png'
import foto2 from '../../Imagenes/logoFourSeason.jpg'



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

class CheckOut extends Component {
    
    render() {
        //const { classes } = this.props;

        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} md={8} lg={9}>
                <Typography variant="h3">Check-Out</Typography>
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
                    checkOutOK={this.props.checkOutOK}
                    handleCheckOut={this.props.handleCheckOut}
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
        );
    }
}

CheckOut.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckOut);