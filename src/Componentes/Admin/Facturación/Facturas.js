import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableFacturas from './TableFacturas'

const styles = theme => ({

})

class Facturas extends Component {
    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableFacturas/>
            </Grid>
        </Grid>
        );
    }
}

Facturas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Facturas);