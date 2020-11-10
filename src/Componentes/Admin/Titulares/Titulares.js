import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableTitulares from './TableTitulares'
import TitularesAPI from '../../../Network/Titulares/TitularesAPI';

const styles = theme => ({

})

class Titulares extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulares: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.getTitulares();
    }

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