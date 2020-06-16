import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Divider, ExpansionPanelActions, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, FormControlLabel, Checkbox, FormLabel } from '@material-ui/core';
import Hora from './Hora'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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

class Comodidades extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            especial:false,
        }
    }

    menuOpen = () => {
        this.setState({ menu: true })
    }
    menuClose = () => {
        this.setState({ menu: false })
    }
    especialOpen = () => {
        this.setState({ especial: true })
    }
    especialClose = () => {
        this.setState({ especial: false })
    }





    render() {
        const { classes } = this.props;

        return (
            <Grid container>
                <ExpansionPanel  className={classes.root}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>Servicio a la Habitacion</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Hora label={"Horario"} />
                            </Grid>
                            <Grid item md={3}>
                                <TextField
                                    label="Menu seleccionado"
                                />
                            </Grid>
                            <Grid item md={3}>
                                <Button onClick={this.menuOpen}>Seleccionar </Button>
                                <Dialog open={this.state.menu} onClose={this.menuClose}>
                                    <DialogTitle>Seleccionar Menu</DialogTitle>
                                    <DialogContent>
                                        <FormLabel component="legend">Desayuno</FormLabel>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Desayuno Americano</Typography>
                                                       <Typography variant="body2" style={{color:"#9e9e9e"}}>Jugo de naranja, cafe, huevos revueltos, tostadas</Typography>
                                                   </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Desayuno Porteño</Typography>
                                                       <Typography variant="body2" style={{color:"#9e9e9e"}}>Jugo de naranja, cafe, medialunas</Typography>
                                                   </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Desayuno fit</Typography>
                                                       <Typography variant="body2" style={{color:"#9e9e9e"}}>Jugo de naranja, te, ensalada de frutas</Typography>
                                                   </Grid>
                                                } />
                                        </FormControl>
                                        <FormLabel component="legend">Almuerzo</FormLabel>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Almuerzo 1</Typography>
                                                       <Typography variant="body2" style={{color:"#9e9e9e"}}>Milanesa con pure con Coquita</Typography>
                                                   </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Almuerzo 2</Typography>
                                                       <Typography variant="body2" style={{color:"#9e9e9e"}}>Fideos moñito con manteca y Jugo</Typography>
                                                   </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Almuerzo fit</Typography>
                                                       <Typography variant="body2" style={{color:"#9e9e9e"}}>Ensala premium con agua</Typography>
                                                   </Grid>
                                                } />
                                        </FormControl>
                                        <FormLabel component="legend">Cena</FormLabel>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Cena 1</Typography>
                                                       <Typography variant="body2" style={{color:"#9e9e9e"}}>Lomo wellington con copa de vino tinto toro viejo</Typography>
                                                   </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Cena 2</Typography>
                                                       <Typography variant="body2" style={{color:"#9e9e9e"}}>Sushi premium con uvita blanco</Typography>
                                                   </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Cena fit</Typography>
                                                       <Typography variant="body2" style={{color:"#9e9e9e"}}>Salteado de verduras con agua</Typography>
                                                   </Grid>
                                                } />
                                        </FormControl>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.menuClose}>Cancelar</Button>
                                        <Button onClick={this.menuClose}>Confirmar</Button>
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
                        <Typography>Comidas especiales</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                    <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Hora label={"Horario"} />
                            </Grid>
                            <Grid item md={3}>
                                <TextField
                                    label="Menu especial"
                                />
                            </Grid>
                            <Grid item md={3}>
                                <Button onClick={this.especialOpen}>Seleccionar </Button>
                                <Dialog open={this.state.especial} onClose={this.especialClose}>
                                    <DialogTitle>Seleccionar Menu especial</DialogTitle>
                                    <DialogContent>
                                        <FormLabel component="legend">Desayuno</FormLabel>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Desayuno Kosher</Typography>
                                                       </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Desayuno vegano</Typography>
                                                      
                                                   </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Desayuno Sin tac</Typography>
                                                      
                                                   </Grid>
                                                } />
                                        </FormControl>
                                        <FormLabel component="legend">Almuerzo</FormLabel>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Almuerzo Kosher</Typography>
                                                     
                                                   </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Almuerzo vegano</Typography>
                                                      
                                                   </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Almuerzo Sin tac</Typography>
                                                      
                                                   </Grid>
                                                } />
                                        </FormControl>
                                        <FormLabel component="legend">Cena</FormLabel>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Cena Kosher</Typography>
                                                      </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Cena vegano</Typography>
                                                     
                                                   </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" /*onChange={this.handleChange('alquileres')} checked={this.state.alquileres}*/ name="alquileres" />
                                                }
                                                label={
                                                   <Grid>
                                                       <Typography>Cena Sin tac</Typography>
                                                       
                                                   </Grid>
                                                } />
                                        </FormControl>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.especialClose}>Cancelar</Button>
                                        <Button onClick={this.especialClose}>Confirmar</Button>
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

Comodidades.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comodidades);