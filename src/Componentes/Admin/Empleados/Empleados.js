import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableEmpleados from './TableEmpleados'

const styles = theme => ({

})

class Empleados extends Component {
    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableEmpleados/>
            </Grid>
        </Grid>
        );
    }
}

Empleados.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Empleados);