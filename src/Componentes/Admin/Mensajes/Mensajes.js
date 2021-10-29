import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableMensajes from './TableMensajes'
import TitularesAPI from '../../../Network/Titulares/TitularesAPI';
import TurrnosAPI from '../../../Network/Turnos/TurnosAPI'
import AlumnosAPI from '../../../Network/Alumnos/AlumnosAPI'
import CursosAPI from '../../../Network/Cursos/CursosAPI'
import MensajesAPI from '../../../Network/Mensajes/MensajesAPI'
import AsistenciasAPI from '../../../Network/Asistencias/AsistenciasAPI'

const styles = theme => ({

})

class Mensajes extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            titulares: [],
            turnos: [],
            alumnos: [],
            cursos: [],
            asistencias: [],
            loading: false,
            mensajes: [],
            mensajesActualizados: [],
            cursoMensaje: null,
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
        }
    }

    getMensajes() {
        console.log("getMensajes ")
        this.setState({ loading: true });
        console.log("getMensajes luego del loading")
        MensajesAPI.getMensajes(this.handleGetMensajes.bind(this));
    }

    handleGetMensajes(listmensajes) {
        this.setState({ loading: false });

        if (listmensajes === undefined || listmensajes === null) {
            console.log("handleGetMensajes: " + listmensajes)
            //show error message if needed
        } else {
            console.log("Actualiza los mensajes: " + JSON.stringify(listmensajes))
            this.setState( { mensajes: listmensajes } , this.forceUpdate());
            this.props.actualizarMensaje(listmensajes);
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
            //this.props.actualizarAsistencias(asistencias);
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
           // this.props.actualizarAlumnos(alumnos);
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
          //  this.props.actualizarCursos(cursos);
        }
    }

    cursoMensaje = (mensaje) => {
        console.log("cursoMensaje de Mensajes.js:" + mensaje.id) 
        console.log("listMensajes: " + JSON.stringify(this.props.mensajes)) 
        var mensajesActualizados = this.props.mensajes;
        const indice =  mensajesActualizados.findIndex(obj => obj.id == mensaje.id);
        mensajesActualizados.splice(indice, 1);
        console.log("listMensajesActualizada: " + JSON.stringify(mensajesActualizados)) 
       //agrego el curso que se agrego.
      // mensajesActualizados.push(curso);
       this.setState({ mensajes: mensajesActualizados});
       //le paso el arreglo de mensajes actualizado
       this.props.actualizarMensaje(mensajesActualizados);
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
           
               <TableMensajes titulares = { this.state.titulares } titularCreado = { this.titularCreado.bind(this)}  mensajes={this.props.mensajes} cursoMensaje = { this.cursoMensaje.bind(this)}/>
            
            </Grid>
        </Grid>
        );
    }
}

Mensajes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Mensajes);