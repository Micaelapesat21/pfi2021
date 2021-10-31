import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableCobros from './TableCobros'
import CuotasAPI from './../../../Network/Cobranzas/CobranzasAPI'

const styles = theme => ({

})

class Cobros extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            pagos: []
        }
    }

    componentDidMount() {
        this._isMounted = true;

        if (this._isMounted) {
            this.getPagos();
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
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
            console.log("state pagos: " + this.state.pagos)
            this.props.actualizarPagos(pagos);
        }
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableCobros turnos = { this.props.turnos } titulares = { this.props.titulares } pagos = {this.state.pagos} />
            </Grid>
        </Grid>
        );
    }
}

Cobros.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cobros);