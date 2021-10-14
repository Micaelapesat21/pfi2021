import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TablaCertificados from './TablaCertificados'
import Constantes from './Constantes';

const styles = theme => ({

})

class Certificados extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alumnos: [],
            loading: false,
        }
    }

    async componentDidMount() {
        console.log("componentDidMount");
    }

    alumnoCreado = (alumno) => {
        var alumnosActualizado = this.props.alumnos;
        alumnosActualizado.push(alumno);
        this.setState({ alumnos: alumnosActualizado });
        this.props.actualizarAlumnos(alumnosActualizado);
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TablaCertificados alumnos = { this.props.alumnos }  titulares = { this.props.titulares }
                turnos = { this.props.turnos } cursos = { this.props.cursos } 
                alumnoCreado = { this.alumnoCreado.bind(this)}/>
            </Grid>
        </Grid>
        );
    }
}

Certificados.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Certificados);