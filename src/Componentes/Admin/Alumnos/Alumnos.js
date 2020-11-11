import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableAlumnos from './TableAlumnos'
import AlumnosAPI from './../../../Network/Alumnos/AlumnosAPI'

const styles = theme => ({

})

class Alumnos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alumnos: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.getAlumnos();
    }

    alumnoCreado = (alumno) => {
        var alumnosActualizado = this.state.titulares;
        alumnosActualizado.push(alumno);
        this.setState({ alumnos: alumnosActualizado});
    }

    //API Calls
    getAlumnos() {
        this.setState({ loading: true });
        AlumnosAPI.getAlumnos(this.handleGetAlumnos.bind(this));
    }

    handleGetAlumnos(alumnos) {
        this.setState({ loading: false });

        if (alumnos === undefined || alumnos === null) {
            //show error message if needed
        } else {
            this.setState( { alumnos: alumnos } , this.forceUpdate());
        }
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableAlumnos alumnos = { this.state.alumnos }  titulares = { this.props.titulares }
                turnos = { this.props.turnos } 
                alumnoCreado = { this.alumnoCreado.bind(this)}/>
            </Grid>
        </Grid>
        );
    }
}

Alumnos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Alumnos);