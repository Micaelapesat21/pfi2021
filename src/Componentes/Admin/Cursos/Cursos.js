import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableCursos from './TableCursos'

const styles = theme => ({

})

class Cursos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cursos: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.setState({ cursos: this.props.cursos });
    }

    cursoCreado = (cursos) => {
        var cursosActualizado = this.props.cursos;
        cursosActualizado.push(cursos);
        this.setState({ cursos: cursosActualizado });
        this.props.actualizarCursos(cursosActualizado);
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableCursos cursos = { this.props.cursos }  titulares = { this.props.titulares }
                turnos = { this.props.turnos } 
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