import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableAlumnos from './TableAlumnos'

const styles = theme => ({

})

class Alumnos extends Component {
    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableAlumnos titulares = { this.props.titulares } />
            </Grid>
        </Grid>
        );
    }
}

Alumnos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Alumnos);