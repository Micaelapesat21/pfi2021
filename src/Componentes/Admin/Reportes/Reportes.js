import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';

const styles = theme => ({

})

class Reportes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            asistencias: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.setState({ asistencias: this.props.asistencias });
    }

    reporteCreado = (asistencia) => {
        var reportesActualizado = this.props.asistencias;
        reportesActualizado.push(asistencia);
        this.setState({ asistencias: reportesActualizado });
        this.props.actualizarAsistencia(reportesActualizado);
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
              
            </Grid>
        </Grid>
        );
    }
}

Reportes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reportes);

