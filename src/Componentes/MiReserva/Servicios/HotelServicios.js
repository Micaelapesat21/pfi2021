import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid,FormControlLabel, Checkbox, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails,  Divider, ExpansionPanelActions, Button, TextField } from '@material-ui/core';
import Hora from './Hora'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fecha from '../../ReservApi/Fecha';
import Ropa from './Ropa'

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

class HotelServicios extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

   
   



    render() {
        const { classes } = this.props;

        return (
            <Grid container>
                <ExpansionPanel  className={classes.root}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>Reservar restaurante</Typography>
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
                                    label="Comentarios"
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
                        <Typography>Reservar estacionamiento</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Fecha label={"Desde"} />
                            </Grid>
                            <Grid item md={3}>
                                <Fecha label={"Hasta"} />
                            </Grid>
                            <Grid item md={4}>
                                <FormControlLabel control={<Checkbox color="primary" checked={false} name="checkedE" />} label="Toda la estadia" />
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
                        <Typography>Tintoreria</Typography>
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
                               <Ropa/>
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

HotelServicios.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HotelServicios);