import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableFacturas from './TableFacturas'
import FacturasAPI from './../../../Network/Facturas/FacturasAPI'

const styles = theme => ({

})

class Facturas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            facturas: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.getFacturas();
    }

    //Api Calls
    getFacturas() {
        this.setState({ loading: true });
        FacturasAPI.getFacturas(this.handleGetFacturas.bind(this));
    }

     facturaCreada = (factura) => {
        var facturasActualizadas = this.state.facturas;
        facturasActualizadas.push(factura);
        this.setState({ facturas: facturasActualizadas});
    }

    handleGetFacturas(facturas) {
        this.setState({ loading: false });

        if (facturas === undefined || facturas === null) {
            //show error message if needed
        } else {
            this.setState( { facturas: facturas } , this.forceUpdate());
        }
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableFacturas turnos = { this.props.turnos } alumnos = { this.props.alumnos } facturas = { this.state.facturas } />
            </Grid>
        </Grid>
        );
    }
}

Facturas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Facturas);