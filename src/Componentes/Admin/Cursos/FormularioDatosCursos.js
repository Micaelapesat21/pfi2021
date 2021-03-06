import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Grid, ButtonBase, Typography, Avatar, Button, Paper } from '@material-ui/core';
import CursosAPI from '../../../Network/Cursos/CursosAPI'
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../../Commons/ErrorMessageModal';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

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

class FormularioDatosCursos extends Component {

    constructor(props) {
        super(props);
       
        this.state = {
            numero: "",
            dvision: "",
            redOnly: false,
            lastResponse: null,
            titular: "",
            loading: false,
            errorMessageIsOpen: false,
            successMessageIsOpen: false,
            cursoInfo: null,
            errorMessage: ""
         }
        this.handleChange = this.handleChange.bind(this);
        this.edicionOpen = this.edicionOpen.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    componentDidMount() {
        //  this.get()
    }

 


    //API Calls
    guardar() {
        console.log("estoy en guardar");
        {console.log(this.state.gimnasio)}
        if (
            this.state.numero !== "" &&
            this.state.division !== ""
         ) {
            var dict = this.getCursoModel();
            this.postCursoInfo(dict);
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

    handleCheck = () => {
        this.setState({gimnasio: true});
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    //Api Calls 


    postCursoInfo = (cursoInfo) => {
        this.setState({ loading: true });
        console.log("CURSO INFO:" + cursoInfo);
        CursosAPI.createCurso(cursoInfo, this.handlePostCursoInfo.bind(this));
    }

    handlePostCursoInfo = async (cursoInfo) => {
        this.setState({ loading: false });
        if (cursoInfo.error == null) {
            //post was successful
            this.setState({ 
                cursoInfo: cursoInfo,
                edicion: false, 
                redOnly: true,
                successMessageIsOpen: true
            })
        } else {
            //get user with email failed
        }
    }

    getCursoModel() {
        return {
            numero: this.state.numero,
            division: this.state.division,
            alumnos: [{}]
        };

    }

    //Modal handlers
    closeErrorModal() {
        this.setState({ errorMessageIsOpen: false }, this.forceUpdate());
    }

    closeSuccessModal() {
        this.props.cursoCreado(this.state.cursoInfo);
        this.setState({ successMessageIsOpen: false }, this.forceUpdate());
    }

    getSuccessMessage() {
        if(this.state.gimnasio) {
            return "Ya estas Inscripto en el Gimnasio B \n Usuario: ESCB_" + this.state.dni + "\n password: 123456"
        } else {
            return "Curso creado"
        }
    }
    
    render() {
        const { classes } = this.props;
        return (
            <Grid >
                {this.showLoaderIfNeeded()}
                
                <ErrorMessageModal title={'Algo sali?? mal'} errorMessage={this.state.errorMessage} isOpen={this.state.errorMessageIsOpen} closeErrorModal={this.closeErrorModal.bind(this)} />
                <ErrorMessageModal title={'Curso generado con ??xito'} errorMessage= { this.getSuccessMessage() } isOpen={this.state.successMessageIsOpen} closeErrorModal={this.closeSuccessModal.bind(this)} />
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        {/*
                        <Grid item xs={12} sm={6}>
                            <InputLabel id="demo-mutiple-name-label">Nombre Titular</InputLabel>
                            <Select
                            fullWidth
                            labelId="demo-mutiple-name-label"
                            id="demo-controlled-open-select"
                            open={ this.state.titularesMenuOpen }
                            onClose={ this.handleTitularesMenuClose.bind(this) }
                            onOpen={ this.handleTitularesMenuOpen.bind(this) }
                            value = { this.state.titularSeleccionado }
                            onChange={ e => this.handleChangeTitular(e) }
                            >
                            { this.props.titulares.map((titular, index) => (
                                <MenuItem value={index}> { titular.nombre } { titular.apellido} </MenuItem>
                            ))}
                            </Select>
                        </Grid>
                         */}       
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Nombre"
                                name="numero"
                                label="A??o del curso: 4"
                                fullWidth
                                autoComplete="A??o"
                                value={this.state.numero}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Apellido"
                                name="division"
                                label="Division: A"
                                fullWidth
                                autoComplete="Division"
                                value={this.state.division}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly
                                }}
                            />
                        </Grid>
                        {/* 
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Correo"
                                name="email"
                                label="Correo Electronico"
                                fullWidth
                                autoComplete="Correo"
                                value={this.state.email}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Dni"
                                name="dni"
                                label="DNI"
                                fullWidth
                                autoComplete="Dni"
                                value={this.state.dni}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Pa??s"
                                name="pais"
                                label="Pa??s"
                                fullWidth
                                autoComplete="Pa??s"
                                value={this.state.pais}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="Estado"
                                name="estado"
                                label="Estado/Provincia/Regi??n"
                                fullWidth
                                value={this.state.estado}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Ciudad"
                                name="ciudad"
                                label="Ciudad"
                                fullWidth
                                autoComplete="Ciudad"
                                value={this.state.ciudad}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="C??digo Postal"
                                name="codigoPostal"
                                label="C??digo Postal"
                                fullWidth
                                autoComplete="C??digo Postal"
                                value={this.state.codigoPostal}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}> 
                            <TextField
                                required
                                id="Direccion"
                                name="direccion"
                                label="Direccion"
                                fullWidth
                                autoComplete="Direccion"
                                value={this.state.direccion}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Telefono1"
                                name="telefono1"
                                label="Telefono 1"
                                fullWidth
                                autoComplete="Telefono1"
                                value={this.state.telefono1}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="telefono2"
                                name="telefono2"
                                label="Telefono 2"
                                fullWidth
                                autoComplete="Telefono 2"
                                value={this.state.telefono2}
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
                        <ListItem>
                        <Checkbox id='gimnasio' onChange={this.handleCheck} color='primary'/>
                        <ListItemText primary={'Inscribir a Gimnasio'}/></ListItem>
                        </Grid>
                        
                        */}
                    </Grid>
                </Paper>
                
                <Button className = { classes.createButton } variant= "contained" onClick={ this.guardar.bind(this) } color="primary" autoFocus>
                                
                    Crear Curso
                </Button>
            </Grid>
        );
    }
}

FormularioDatosCursos.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormularioDatosCursos);

/*
<Grid xs = {12} sm={8}>
          <ListItem>
            <Checkbox id='gimnasio' color='primary'/>
            <ListItemText primary={'Gimnasio'}/>
            <Checkbox  id='futbol' color='primary'/>
            <ListItemText primary={'F??tbol'}/>
            <Checkbox id ='hockey' color='primary'/>
            <ListItemText primary={'Hockey'}/>
            <Checkbox id ='tenis' color='primary'/>
            <ListItemText primary={'Tenis'}/>
          </ListItem></Grid>
          <Grid xs = {12} sm={6}>
          <ListItem>
            <Checkbox id ='ingles' color='primary'/>
            <ListItemText primary={'Ingl??s'}/>
            <Checkbox id = 'portugues' color='primary'/>
            <ListItemText primary={'Portugu??s'}/>
            <Checkbox id ='frances' color='primary'/>
            <ListItemText primary={'Franc??s'}/>
          </ListItem></Grid>
          <Grid xs = {12} sm={8}>
          <ListItem>
            <Checkbox id ='danza' color='primary'/>
            <ListItemText primary={'Danza'}/>
            <Checkbox id ='teatro' color='primary'/>
            <ListItemText primary={'Teatro'}/>
            <Checkbox id ='pintura' color='primary'/>
            <ListItemText primary={'Pintura'}/>
            <Checkbox id ='musica' color='primary'/>
            <ListItemText primary={'M??sica'}/>
          </ListItem></Grid>
          <Grid xs = {12} sm={8}>
          <ListItem>
            <Checkbox id ='transporte' color='primary'/>
            <ListItemText primary={'Transporte'}/>
            <Checkbox id ='desayuno' color='primary'/>
            <ListItemText primary={'Desayuno'}/>
            <Checkbox id ='almuerzo' color='primary'/>
            <ListItemText primary={'Almuerzo'}/>
            <Checkbox id ='merienda' onChange={this.handleCheck} color='primary'/>
            <ListItemText primary={'Merienda'}/>
          </ListItem></Grid> */