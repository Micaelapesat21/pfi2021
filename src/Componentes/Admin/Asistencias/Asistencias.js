import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableAsistencias from './TableAsistencias'

const styles = theme => ({

})

class Asistencias extends Component {

    constructor(props) {
        super(props);
        this.state = {
            asistencias: [],
            cursos:[],
            alumnos:[],
            loading: false,
        }
    }

    componentDidMount() {
        this.setState({ asistencias: this.props.asistencias });
      // this.setState({ alumnos: this.props.alumnos });
    }

    asistenciaCreado = (asistencia) => {
        var asistenciasActualizado = this.props.asistencias;
        asistenciasActualizado.push(asistencia);
        this.setState({ asistencias: asistenciasActualizado });
        this.props.actualizarAsistencias(asistenciasActualizado);
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableAsistencias asistencias = { this.props.asistencias }  titulares = { this.props.titulares }
                turnos = { this.props.turnos }  alumnos = { this.props.alumnos } cursos = { this.props.cursos } 
                asistenciaCreado = { this.asistenciaCreado.bind(this)}/>
            </Grid>
        </Grid>
        );
    }
}

Asistencias.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Asistencias);

