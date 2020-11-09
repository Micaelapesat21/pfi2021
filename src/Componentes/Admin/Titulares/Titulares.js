import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableTitulares from './TableTitulares'

const styles = theme => ({

})

class Titulares extends Component {
    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableTitulares/>
            </Grid>
        </Grid>
        );
    }
}

Titulares.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Titulares);