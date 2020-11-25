import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Grid, ButtonBase, Typography, Avatar, Button, Paper } from '@material-ui/core';
import HotelInfo from '../../../Models/Hotel/HotelInfo'
import HotelAPI from '../../../Network/Hotel/HotelAPI'
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../../Commons/ErrorMessageModal';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import CobranzasAPI from '../../../Network/Cobranzas/CobranzasAPI'
import FormularioDatosTarjeta from './FormularioDatosTarjeta';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
    paper: {
        padding: theme.spacing(5),
        marginTop: theme.spacing(2)
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    container: {
        backgroundColor: 'red',
        fullWidth: true,
    },
    input: {
        display: 'none',
    },
    createButton: {
        marginTop: 20,
        marginLeft: '80%'
    }, 
    buttonTarjeta:{
        margin: theme.spacing(1),
    }
})

class FormularioDatosCobranza extends Component {

    constructor(props) {
        super(props);
        this.state = {
            turnoSeleccionado: null,
            turnosMenuOpen: false,
            numeroFactura: "",
            titular: "",
            correo: "",
            documento: "",
            telefono: "",
            alumno: "",
            edicion: true,
            redOnly: false,
            lastResponse: null,
            titular: "",
            turno: "",
            loading: false,
            errorMessageIsOpen: false,
            errorMessage: "",
            mes:"",
            anio:"",
            pagada:false,
            valorTurno:"",
            valorServicios:"",
            totalCuota:"",
            numeroTransaccion:"",
            servicios:[],
            tarjetaIsOpen: false,



        }
        this.handleChange = this.handleChange.bind(this);
        this.edicionOpen = this.edicionOpen.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    componentDidMount() {
        //  this.getHotelInfo()
    }


    guardar() {
        if (this.state.turnoSeleccionado !== null &&
            this.state.numeroFactura !== "" &&
            this.state.titular !== "" &&
            //this.state.correo !== "" &&
            //this.state.documento !== "" &&
            //this.state.telefono !== "" &&
            this.state.alumno !== "" &&
            this.state.titular !== "" && 
            this.state.turno !=="" 
        ) {
            this.postCobranzaInfo(this.getCobranzaModel())
        } else {
            this.setState({
                errorMessageIsOpen: true,
                errorMessage: "Verifique si lleno todos los datos."
            });
        }
    }

    addButtonTarjeta = () => {
        this.setState({ tarjetaIsOpen: true })
    }

    handleCloseModal = () => {
        this.setState({ tarjetaIsOpen: false})
    }
    edicionOpen = () => {
        this.setState({ edicion: true, redOnly: false })
    }

    showLoaderIfNeeded() {
        if (this.state.loading) {
            return (
                <div className="loader">
                    <CircularProgress />
                    <CircularProgress color="secondary" />
                </div>
            )
        } else {
            return (
                <div />
            )
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    //Menu
    handleChangeTurno(e) {
        let titular = this.props.turnos[ e.target.value ];
        this.setState({ turnoSeleccionado: e.target.value });
    }

    handleTurnosMenuOpen() {
        this.setState({ turnosMenuOpen: true });
    }

    handleTurnosMenuClose() {
        this.setState({ turnosMenuOpen: false });
    }

    //Api Calls

    postCobranzaInfo = (cobranzaData) => {
        this.setState({ loading: true });
        CobranzasAPI.createCobranza(cobranzaData, this.handlePostCobranzaInfo.bind(this));
    }

    handlePostCobranzaInfo = async (cobranzaInfo) => {
        this.setState({ loading: false });
        if (cobranzaInfo.error == null) {
            //post was successful
            this.setState({ edicion: false, redOnly: true })
            var dict = this.getCobranzaModel();
            this.props.cobranzaCreado(dict);
        } else {
            //get user with email failed
        }
    }
    

    getCobranzaModel() {
        return {
            numeroFactura: this.state.numeroFactura,
            nombrePago: this.state.titular,
            //emailPago: this.state.correo,
            //documento: this.state.documento,
            //telefono: this.state.telefono,
            alumno: this.state.alumno,
            titular:this.state.titular,
            turno:this.state.turno,
            mes: this.state.mes,
            anio:this.state.anio,
            pagada:this.state.pagada,
            fechaEmision:this.state.fechaEmision,
            fechaVencimiento:this.state.fechaVencimiento,
            valorTurno:this.state.valorTurno,
            valorServicios:this.state.valorServicios,
            totalCuota:this.state.totalCuota,
            numeroTransaccion:this.state.numeroTransaccion,
            servicios:this.state.servicios,
        };

    }

    //Modal handlers
    closeErrorModal() {
        this.setState({ errorMessageIsOpen: false }, this.forceUpdate());
    }

    render() {
        const { classes } = this.props;

        return (

            
            <Grid >
                <Dialog
                    maxWidth="lg"
                    fullWidth={true}
                    open={this.state.tarjetaIsOpen}
                    onClose={this.handleCloseModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent className="dialogContent">
                        <FormularioDatosTarjeta handleCloseModal={this.handleCloseModal.bind(this)}/>
                    </DialogContent>
                    <DialogActions>
                    </DialogActions>
                </Dialog>
                {this.showLoaderIfNeeded()}
                <ErrorMessageModal title={'Algo salió mal'} errorMessage={this.state.errorMessage} isOpen={this.state.errorMessageIsOpen} closeErrorModal={this.closeErrorModal.bind(this)} />
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="nroFactura"
                                name="nroFactura"
                                label="Número de Factura a pagar"
                                fullWidth
                                autoComplete="nroFactura"
                                value={this.state.numeroFactura}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="titular"
                                name="titular"
                                label="Titular que realiza el pago "
                                fullWidth
                                autoComplete="titular"
                                value={this.state.titular}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="alumno"
                                name="alumno"
                                label="Alumno"
                                fullWidth
                                autoComplete="alumno"
                                value={this.state.alumno}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                            
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="totalcuota"
                                name="totalcuota"
                                label="Monto total a Pagar"
                                fullWidth
                                autoComplete="totalcuota"
                                value={this.state.totalCuota}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="fechaEmision"
                                name="fechaEmision"
                                label="Fecha Emisión"
                                fullWidth
                                value={this.state.fechaEmision}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="mes"
                                name="mes"
                                label="Mes a pagar"
                                fullWidth
                                autoComplete="mes"
                                value={this.state.mes}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="anio"
                                name="anio"
                                label="Año"
                                fullWidth
                                autoComplete="anio"
                                value={this.state.anio}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Select
                                native
                                value={this.state.pago}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'pago',
                                    id: 'pago',
                                }}
                                >

                                <option value='' selected>Seleccionar opción</option>
                                <option value={10}>Tarjeta de crédito</option>
                                <option value={20}>Tarjeta de débito</option>
                                <option value={30}>Efectivo</option>
                                <option value={40}>Cheque</option>
                          
                            </Select>
                        </Grid> 
                        <Grid item xs={12} sm={6}>
                        {(this.state.pago==10 || this.state.pago==20) ? <Button 
                         variant="outlined" color="primary" 
                                                   onClick={ this.addButtonTarjeta }>
                             COMPLETAR DATOS DE TARJETA
                        </Button> : <Button variant="outlined" color="primary" disabled>
                             COMPLETAR DATOS DE TARJETA
                        </Button>}
                        
                        </Grid> 
                       

                    </Grid>
                </Paper>
                <Button className = { classes.createButton } variant= "contained" onClick={ this.guardar.bind(this) } color="primary" autoFocus>
                    Confirmar Pago
                </Button>
            </Grid>
        );
    }
}

FormularioDatosCobranza.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormularioDatosCobranza);