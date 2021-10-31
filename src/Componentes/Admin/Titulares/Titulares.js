import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableTitulares from './TableTitulares'
import TitularesAPI from '../../../Network/Titulares/TitularesAPI';
import TurrnosAPI from './../../../Network/Turnos/TurnosAPI'
import AlumnosAPI from './../../../Network/Alumnos/AlumnosAPI'
import CursosAPI from './../../../Network/Cursos/CursosAPI'
import AsistenciasAPI from './../../../Network/Asistencias/AsistenciasAPI'
import MensajesAPI from './../../../Network/Mensajes/MensajesAPI'
import CuotasAPI from './../../../Network/Cobranzas/CobranzasAPI'

const styles = theme => ({

})

class Titulares extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            titulares: [],
            turnos: [],
            alumnos: [],
            cursos: [],
            asistencias: [],
            mensajes: [],
            pagos: [],
            loading: false,
        }
    }

    componentDidMount() {
        this._isMounted = true;

        if (this._isMounted) {
            this.getTitulares();
            this.getTurnos();
            this.getAlumnos();
            this.getCursos();
            this.getAsistencias();
            this.getMensajes();
            this.getPagos();
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    //Api Calls
    getTitulares() {
        this.setState({ loading: true });
        TitularesAPI.getTitulares(this.handleGetTitulares.bind(this));
    }

     titularCreado = (titular) => {
        var titularesActualizado = this.state.titulares;
        titularesActualizado.push(titular);
        this.setState({ titulares: titularesActualizado});
    }

    handleGetTitulares(titulares) {
        this.setState({ loading: false });

        if (titulares === undefined || titulares === null) {
            //show error message if needed
        } else {
            this.setState( { titulares: titulares } , this.forceUpdate());
            this.props.actualizarTitulares(titulares);
        }
    }

    getTurnos() {
        this.setState({ loading: true });
        TurrnosAPI.getTurnos(this.handleGetTurnos.bind(this));
    }

    handleGetTurnos(turnos) {
        this.setState({ loading: false });

        if (turnos === undefined || turnos === null) {
            //show error message if needed
        } else {
            this.setState( { turnos: turnos } , this.forceUpdate());
            this.props.actualizarTurnos(turnos);
        }
    }

    getCursos() {
        console.log("getcursos");
        this.setState({ loading: true });
        CursosAPI.getCursos(this.handleGetCursos.bind(this));
    }

    handleGetCursos(cursos) {
        this.setState({ loading: false });
        console.log("CURSOS: " + cursos);
        if (cursos === undefined || cursos === null) {
            //show error message if needed
        } else {
            this.setState( { cursos: cursos } , this.forceUpdate());
            //this.props.actualizarCursos(cursos);
        }
    }

    getMensajes() {
        console.log("getMensajes");
        this.setState({ loading: true });
        MensajesAPI.getMensajes(this.handleGetMensajes.bind(this));
    }

    handleGetMensajes(mensajes) {
        this.setState({ loading: false });
        console.log("MENSAJES: " + mensajes);
        if (mensajes === undefined || mensajes === null) {
            //show error message if needed
        } else {
            this.setState( { mensajes: mensajes } , this.forceUpdate());
            //this.props.actualizarCursos(cursos);
        }
    }

    getPagos() {
        console.log("getPagos");
        this.setState({ loading: true });
        CuotasAPI.getPagos(this.handleGetPagos.bind(this));
    }

    handleGetPagos(pagos) {
        this.setState({ loading: false });
        console.log("Pagos: " + pagos);
        if (pagos === undefined || pagos === null) {
            //no hay pagos
        } else {
            this.setState( { pagos: pagos } , this.forceUpdate());
        }
    }

    getAsistencias() {
        this.setState({ loading: true });
        console.log("getAsistencias");
        AsistenciasAPI.getAsistencias(this.handleGetAsistencias.bind(this));
    }

    handleGetAsistencias(asistencias) {
        this.setState({ loading: false });
        console.log("Asistencias: " + asistencias);
        if (asistencias === undefined || asistencias === null) {
            //show error message if needed
        } else {
            this.setState( { asistencias: asistencias } , this.forceUpdate());
            this.props.actualizarAsistencias(asistencias);
        }
    }

    getAlumnos() {
        this.setState({ loading: true });
        AlumnosAPI.getAlumnos(this.handleGetAlumnos.bind(this));
    }

    handleGetAlumnos(alumnos) {
        this.setState({ loading: false });
        console.log("Alumnos en TITULARES: " + alumnos);
        if (alumnos === undefined || alumnos === null) {
            //show error message if needed
        } else {
            this.setState( { alumnos: alumnos } , this.forceUpdate());
            this.props.actualizarAlumnos(alumnos);
        }
    }
    
       //Api Calls Cursos
    getCursos() {
        this.setState({ loading: true });
        CursosAPI.getCursos(this.handleGetCursos.bind(this));
    }

     cursosCreado = (curso) => {
        var cursosActualizado = this.state.cursos;
        cursosActualizado.push(curso);
        this.setState({ cursos: cursosActualizado});
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
               <TableTitulares titulares = { this.state.titulares } titularCreado = { this.titularCreado.bind(this)} />
            </Grid>
        </Grid>
        );
    }
}

Titulares.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Titulares);