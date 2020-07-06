import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';
import TableSolicitud from './TableSolicitud'

const styles = theme => ({

})

class Solicitudes extends Component {
    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} md={8} lg={9}>
                <Typography variant="h4">Solicitudes</Typography>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
               <TableSolicitud/>
            </Grid>
            
           



        </Grid>
        );
    }
}

Solicitudes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Solicitudes);