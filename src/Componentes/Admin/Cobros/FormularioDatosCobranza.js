import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Grid, ButtonBase, Typography, Avatar, Button, Paper } from '@material-ui/core';
import HotelInfo from '../../../Models/Hotel/HotelInfo'
import HotelAPI from '../../../Network/Hotel/HotelAPI'
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../../Commons/ErrorMessageModal';
import Select from '@material-ui/core/Select';

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
            codigoCobro: "",
            nombrePago: "",
            emailPago: "",
            documento: "",
            telefono: "",
            alumno: "",
            estrellas: "",
            edicion: true,
            redOnly: false,
            lastResponse: null,
            titular: "",
            jornada: "",
            loading: false,
            errorMessageIsOpen: false,
            errorMessage: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.edicionOpen = this.edicionOpen.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    componentDidMount() {
        //  this.getHotelInfo()
    }

    guardar() {
        if (this.state.codigoCobro !== "" &&
            this.state.nombrePago !== "" &&
            this.state.emailPago !== "" &&
            this.state.documento !== "" &&
            this.state.telefono !== "" &&
            this.state.alumno !== "" &&
            this.state.titular !== "" && 
            this.state.jornada !=="" 
        ) {
            var dict = this.getCobroModel();
            this.props.cobroRegistrado(dict);

            this.postAlumnoInfo()
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

    //Api Calls
    getCobroInfo(email) {
        this.setState({ loading: true });
        let cobroInfo = cobroInfo.getInstance().getCobroData()         
        this.handleGetCobroInfo(cobroInfo)
    }

    handleGetCobroInfo(cobroInfo) {
        this.setState({ loading: false });

        if (cobroInfo === undefined || cobroInfo === null) {
            //show error message if needed
        } else {
            let cobroData = cobroInfo.state;

            if (cobroData !== null) {
                this.setState({
                    codigoCobro: cobroData.codigoCobro,
                    nombrePago: cobroData.nombrePago,
                    emailPago: cobroData.emailPago,
                    documento: cobroData.documento,
                    telefono: cobroData.telefono,
                    alumno: cobroData.alumno,
                    titular: cobroData.titular,
                    jornada: cobroData.jornada,
                });            
            }
        }
    }

    postAlumnoInfo = () => {
        this.setState({ loading: true });
        HotelAPI.postHotelInfo(this.handlePostCobroInfo);
    }

    handlePostAlumnoInfo = async (CobroInfo) => {
    
    }

    getHotelModel() {
        return {
            codigoCobro: this.state.codigoCobro,
            nombrePago: this.state.nombrePago,
            emailPago: this.state.emailPago,
            documento: this.state.documento,
            telefono: this.state.telefono,
            alumno: this.state.alumno,
            titular:this.state.titular,
            jornada:this.state.jornada,
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
                                id="Codigo Pago"
                                name="codigo"
                                label="Código de Pago"
                                fullWidth
                                autoComplete="Código de Pago"
                                value={this.state.codigoCobro}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Nombre de quien realizó el Pago"
                                name="nombrePago"
                                label="Quien Pagó"
                                fullWidth
                                autoComplete="nombrePago"
                                value={this.state.nombrePago}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Correo"
                                name="email"
                                label="Correo Electronico de quien pagó"
                                fullWidth
                                autoComplete="Correo"
                                value={this.state.emailPago}
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
                            <Select
                                native
                                value={this.state.jornada}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'jornada',
                                    id: 'jornada',
                                }}
                                >
                                <option value={10}>Turno mañana</option>
                                <option value={20}>Turno tarde</option>
                                <option value={30}>Jornada Completa</option>
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