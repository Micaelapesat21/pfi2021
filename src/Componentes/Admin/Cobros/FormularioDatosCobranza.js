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

    edicionOpen() {
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
                                id="correo"
                                name="correo"
                                label="Correo para envío de Factura"
                                fullWidth
                                autoComplete="correo"
                                value={this.state.correo}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="documento"
                                name="documento"
                                label="Documento"
                                fullWidth
                                autoComplete="Documento"
                                value={this.state.documento}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="Telefono"
                                name="telefono"
                                label="Telefono"
                                fullWidth
                                value={this.state.telefono}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="alumni"
                                name="alumni"
                                label="Alumno"
                                fullWidth
                                autoComplete="Alumni"
                                value={this.state.alumno}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="titular"
                                name="titular"
                                label="Titular"
                                fullWidth
                                autoComplete="Titular"
                                value={this.state.titular}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel id="turno-label">Turno</InputLabel>
                            <Select
                            fullWidth
                            labelId="turno-label"
                            id="turnos-open-select"
                            open={ this.state.turnosMenuOpen }
                            onClose={ this.handleTurnosMenuClose.bind(this) }
                            onOpen={ this.handleTurnosMenuOpen.bind(this) }
                            value = { this.state.turnoSeleccionado }
                            onChange={ e => this.handleChangeTurno(e) }
                            >
                            { this.props.turnos.map((turno, index) => (
                                <MenuItem value={ index }> { turno.nombreTurno } , Precio:{  turno.precioTurno } </MenuItem>
                                ))}
                            </Select>
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
                                <option value={10}>Realizado</option>
                                <option value={20}>Pendiente</option>
                          
                            </Select>
                        </Grid> 

                    </Grid>
                </Paper>
                <Button className = { classes.createButton } variant= "contained" onClick={ this.guardar.bind(this) } color="primary" autoFocus>
                    Registrar Pago
                </Button>
            </Grid>
        );
    }
}

FormularioDatosCobranza.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormularioDatosCobranza);