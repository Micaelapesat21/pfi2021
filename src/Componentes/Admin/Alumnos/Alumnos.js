import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableAlumnos from './TableAlumnos'
import Constantes from './Constantes';

const styles = theme => ({

})

class Alumnos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alumnos: [],
            videojuegos:[],
            loading: false,
        }
    }

    async componentDidMount() {
        console.log("llamar a php");
         
        //const respuesta = fetch("http://192.168.0.132/TEST/api-php-react-main/obtener_videojuegos.php");
        //console.log("RESPUESTA FETCH" + respuesta );
        //const videojuegos = respuesta.json();
        //let url = "http://192.168.0.132/TEST/api-php-react-main/obtener_videojuegos.php";
       /*{ await fetch(url,{
            method: 'GET', 
            headers:{ 'Content-Type': 'application/json'}
        })
          .then ((response) => {
              console.log("response",response.json());
              if(response.headers.status !== 404) {
                console.log("RESPUESTA FETCH error" + response.json() );
                const videojuegos = response.json();
                
              } else {
                //return null;
              }
          })
          .then (responseData => {
            console.log("RESPUESTA FETCH" + responseData.json() );
                this.setState({
                    videojuegos: responseData.json(),
                });
          });
        }*/

    
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
               <TableAlumnos alumnos = { this.props.alumnos }  titulares = { this.props.titulares }
                turnos = { this.props.turnos } cursos = { this.props.cursos } videojuegos = {this.props.videojuegos}
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