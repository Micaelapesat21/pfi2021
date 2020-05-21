import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography, FormControl, FormLabel, FormControlLabel, Checkbox, FormHelperText } from '@material-ui/core';


const styles = theme => ({
    formControl: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(2),
      },
})

class SeleccionPerfil extends Component {

    constructor(props){
        super(props);
        this.state={
            bienvenida:"A eleccion",
            acompañamiento:"A eleccion",
            limpieza:"A eleccion",
            tintoreria:"A eleccion",
        }
    }
    
    componentWillMount(){
        const { aguaFria, champagne, gaseosa, vino,chocolates,golosinas,fiambres,pasteleria } = this.props.bienvenida;
        const { siete, nueve, once,trece } = this.props.houseKeeping;
        const { uno, dos, tres,cuatro } = this.props.tintoreria;
    
        if(aguaFria){
            this.setState({bienvenida:"Agua fria"})
        }else{
            if(champagne){
                this.setState({bienvenida:"Champagne"})
            }else{
                if(gaseosa){
                    this.setState({bienvenida:"Gaseosa"})
                }else{
                    if(vino){
                        this.setState({bienvenida:"Vino"})
                    }
                }
            }
        }
        
        if(chocolates){
            this.setState({acompañamiento:"Chocolates"})
        }else{
            if(golosinas){
                this.setState({acompañamiento:"Golosinas"})
            }else{
                if(fiambres){
                    this.setState({acompañamiento:"Tabla de fiambres"})
                }else{
                    if(pasteleria){
                        this.setState({acompañamiento:"Pasteleria"})
                    }
                }
            }
        }



        if(siete){
            this.setState({limpieza:"07:00 - 09:00 Hs"})
        }else{
            if(nueve){
                this.setState({limpieza:"09:00 - 11:00 Hs"})
            }else{
                if(once){
                    this.setState({limpieza:"11:00 - 13:00 Hs"})
                }else{
                    if(trece){
                        this.setState({limpieza:"13:00 - 15:00 Hs"})
                    }
                }
            }
        }

        if(uno){
            this.setState({tintoreria:"1 Vez a la semana"})
        }else{
            if(dos){
                this.setState({tintoreria:"2 Veces a la semana"})
            }else{
                if(tres){
                    this.setState({tintoreria:"3 Veces a la semana"})
                }else{
                    if(cuatro){
                        this.setState({tintoreria:"4 Veces a la semana"})
                    }
                }
            }
        }
    }



    render() {
        const { classes } = this.props;
        if (this.props.romantico) {
            return (
                <Grid container>
                    <Grid item xs={12} >
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel >Bebida de bienvenida</FormLabel>
                            <FormControlLabel  control={<Checkbox color="primary" checked name="checkedE" />} label="Champagne" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} >
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Acompañamiento</FormLabel>
                            <FormControlLabel  control={<Checkbox color="primary" checked name="checkedE" />} label="Chocolates" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Horario de limpieza</FormLabel>
                            <FormControlLabel  control={<Checkbox color="primary" checked name="checkedE" />} label="13:00 - 15:00" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Dias a la semana</FormLabel>
                            <FormControlLabel  control={<Checkbox color="primary" checked name="checkedE" />} label="1 Vez a la semana" />
                            <FormHelperText>*Sujeto a disponibilidad del Hotel </FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
            )
        } else {
            if (this.props.ejecutivo) {
                return (
                    <Grid container>
                        <Grid item xs={12}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Bebida de bienvenida</FormLabel>
                                <FormControlLabel  control={<Checkbox color="primary" checked name="checkedE" />} label="Vino" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Acompañamiento</FormLabel>
                                <FormControlLabel  control={<Checkbox color="primary" checked name="checkedE" />} label="Tabla de fiambres" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} >
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Horario de limpieza</FormLabel>
                                <FormControlLabel  control={<Checkbox color="primary" checked name="checkedE" />} label="07:00 - 09:00" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Dias a la semana</FormLabel>
                                <FormControlLabel  control={<Checkbox  color="primary" checked name="checkedE" />} label="4 Veces a la semana" />
                                <FormHelperText>*Sujeto a disponibilidad del Hotel </FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                )
            } else {
                if (this.props.familia) {
                    return (
                        <Grid container>
                            <Grid item xs={12}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Bebida de bienvenida</FormLabel>
                                    <FormControlLabel  control={<Checkbox color="primary" checked name="checkedE" />} label="Gaseosa" />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Acompañamiento</FormLabel>
                                    <FormControlLabel  control={<Checkbox color="primary" checked name="checkedE" />} label="Golosinas" />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Horario de limpieza</FormLabel>
                                    <FormControlLabel  control={<Checkbox color="primary" checked name="checkedE" />} label="09:00 - 11:00 Hs" />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} >
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Dias a la semana</FormLabel>
                                    <FormControlLabel  control={<Checkbox color="primary" checked name="checkedE" />} label="2 Veces a la semana" />
                                    <FormHelperText>*Sujeto a disponibilidad del Hotel </FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>
                    )
                } else {
                    if (this.props.preferencias) {
                        return (
                            <Grid container>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Bebida de bienvenida</FormLabel>
                                        <FormControlLabel  control={<Checkbox color="primary" checked name="checkedE" />} label={this.state.bienvenida}/>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} >
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Acompañamiento</FormLabel>
                                        <FormControlLabel  control={<Checkbox color="primary" checked name="checkedE" />} label={this.state.acompañamiento}  />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Horario de limpieza</FormLabel>
                                        <FormControlLabel  control={<Checkbox color="primary" checked name="checkedE" />} label={this.state.limpieza}  />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} >
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Dias a la semana</FormLabel>
                                        <FormControlLabel  control={<Checkbox checked color="primary" name="checkedE" />} label={this.state.tintoreria}  />
                                        <FormHelperText>*Sujeto a disponibilidad del Hotel </FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        )
                    } else {
                        return (
                            <Grid container justify="center" alignItems="center">
                                <Grid item xs>
                                    <Typography align="center" variant="h6">
                                        Seleccione un Perfil predeterminado <br/> Ó <br/> Arme el
                                        suyo seleccionando en Mis Preferencias y
                                        configurelo en la seccion PREFERENCIAS
                                </Typography>
                                </Grid>
                            </Grid>
                        )
                    }
                }
            }
        }
    }
}

SeleccionPerfil.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SeleccionPerfil);