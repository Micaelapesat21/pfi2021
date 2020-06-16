import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid,FormControlLabel, Checkbox, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails,  Divider, ExpansionPanelActions, Button, TextField, Dialog, DialogTitle, DialogContent, FormLabel, FormControl, DialogActions } from '@material-ui/core';
import Hora from './Hora'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fecha from '../../ReservApi/Fecha';

const styles = theme => ({
    formControl: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
    root: {
        width: '100%',
    },
})

class Actividades extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alquiler:false,
            actividades:false,
        }
    }

    alquilerOpen = () => {
        this.setState({ alquiler: true })
    }
    alquilerClose = () => {
        this.setState({ alquiler: false })
    }
    actividadesOpen = () => {
        this.setState({ actividades: true })
    }
    actividadesClose = () => {
        this.setState({ actividades: false })
    }

   
   



    render() {
        const { classes } = this.props;

        return (
            <Grid container>
                <ExpansionPanel  className={classes.root}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>Alquileres</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Fecha label={"Selecionar dia"} />
                            </Grid>
                            <Grid item md={3}>
                                <Hora label={"Horario"} />
                            </Grid>
                            <Grid item md={3}>
                                <TextField
                                    label="Alquiler seleccionado"
                                />
                            </Grid>
                            <Grid item md={3}>
                                <Button onClick={this.alquilerOpen}>Seleccionar </Button>
                                <Dialog open={this.state.alquiler} onClose={this.alquilerClose}>
                                    <DialogTitle>Seleccionar tipo de alquiler</DialogTitle>
                                    <DialogContent>
                                        <FormLabel component="legend">Alquiler de</FormLabel>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={"Botes"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                        <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={"Bicicletas"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                        <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={"Autos"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                        <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={"Motos"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                        <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={"Ski"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                        <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={"Buceo"} />
                                        </FormControl>
                                                                                
                                  
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.alquilerClose}>Cancelar</Button>
                                        <Button onClick={this.alquilerClose}>Confirmar</Button>
                                    </DialogActions>
                                </Dialog>
                            </Grid>
                        </Grid>

                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>

                        <Button size="small" color="primary">
                            Solicitar
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
                <ExpansionPanel  className={classes.root}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>Eventos Organizados</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Fecha label={"Seleccionar dia"} />
                            </Grid>
                            <Grid item md={3}>
                                <Hora label={"Horario"} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    label="Detalles de su evento"
                                />
                            </Grid>
                        </Grid>

                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>

                        <Button size="small" color="primary">
                            Solicitar
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
                <ExpansionPanel  className={classes.root}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>Actividades del hotel</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Fecha label={"Selecionar dia"} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    label="Actividad seleccionada"
                                />
                            </Grid>
                            <Grid item md={3}>
                                <Button onClick={this.actividadesOpen}>Seleccionar </Button>
                                <Dialog open={this.state.actividades} onClose={this.actividadesClose}>
                                    <DialogTitle>Seleccionar tipo de alquiler</DialogTitle>
                                    <DialogContent>
                                        <FormLabel component="legend">Actividades del Hotel</FormLabel>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={"Clase de Zumba"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                        <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={"Evento acuatico"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                        <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={"Clase de boxeo"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                        <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={"Magia en el salon principal"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                        <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={"Recital"} />
                                        </FormControl>
                                       
                                      
                                                                                
                                  
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.actividadesClose}>Cancelar</Button>
                                        <Button onClick={this.actividadesClose}>Confirmar</Button>
                                    </DialogActions>
                                </Dialog>
                            </Grid>
                        </Grid>


                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>

                        <Button size="small" color="primary">
                            Solicitar
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>

            </Grid>
        )

    }
}

Actividades.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Actividades);