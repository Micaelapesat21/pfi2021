import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableCursos from './TableCursos';
import Curso from './Curso';
import CursosAPI from './../../../Network/Cursos/CursosAPI'

const styles = theme => ({

})

class Cursos extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            cursos: [],
            alumnos:[],
            asistencias:[],
            loading: false,
        }
    }

    componentDidMount() {
        this._isMounted = true;

        if (this._isMounted) {
            this.getCursos();
            this.setState({ alumnos: this.props.alumnos });
            this.setState({ asistencias: this.props.asistencias });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    //Api Calls
    getCursos() {
        this.setState({ loading: true });
        CursosAPI.getCursos(this.handleGetCursos.bind(this));
    }

     cursoCreado = (curso) => {
        var cursosActualizado = this.props.cursos;
        cursosActualizado.push(curso);
        this.setState({ cursos: cursosActualizado});
        this.props.actualizarCursos(cursosActualizado);
    }

    handleGetCursos(cursos) {
        this.setState({ loading: false });

        if (cursos === undefined || cursos === null) {
            //show error message if needed
        } else {
            this.setState( { cursos: cursos } , this.forceUpdate());
            this.props.actualizarCursos(cursos);
        }
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableCursos cursos = { this.props.cursos }  titulares = { this.props.titulares }
                turnos = { this.props.turnos }   alumnos = { this.props.alumnos } asistencias = { this.props.asistencias }
                cursoCreado = { this.cursoCreado.bind(this)}/>
            </Grid>
        </Grid>
        );
    }
}

Cursos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cursos);