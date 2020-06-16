import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography, Paper, ButtonBase, Divider, Button } from '@material-ui/core';
import visa from '../../Imagenes/Visa.png'
import mp from '../../Imagenes/mercadopago-logo.png'
import TarjetaCheta from '../TarjetaCheta/TarjetaCheta';






const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    cardArea: {
        padding: theme.spacing(1),
        width: "100%",
        minHeight: 60,
    },
    logoVisa: {
        width: 100,
        height: 50,
        [theme.breakpoints.down('xs')]: {
            width: 80,
            height: 40,
        },
    },
    logoMp: {
        width: 100,
        height: 35,
        [theme.breakpoints.down('xs')]: {
            width: 75,
            height: 25,
        },
    },

    image: {
        position: 'relative',
        padding: theme.spacing(1),
        width: "100%",
        minHeight: 60,
        [theme.breakpoints.down('xs')]: {
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.1,
                borderLeft: "6px solid #01579b",
            },            
        },
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0,       
        transition: theme.transitions.create('opacity'),
        borderLeft: "6px solid #01579b",

    }, 
})

class Tarjetas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }



    agregarTarjeta() {
        if (this.state.open)
            return (
                <Grid>
                    <TarjetaCheta />
                    <Grid container alignItems="flex-end" justify="flex-end">
                        <Grid item md={4} xs={5}>
                            <Button variant="contained" color="primary">Agregar</Button>
                        </Grid>
                    </Grid>

                </Grid>
            )
        else
            return (
                <div></div>
            )

    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={12} md={8} lg={9}>

                    <Typography variant="h4">Tarjetas</Typography>

                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                    <Paper>

                        <ButtonBase className={classes.image} focusRipple >
                            <Grid container justify="center" alignItems="center" >
                                <Grid item md={3} xs={3}>
                                    <img src={visa} alt="visa" className={classes.logoVisa} />
                                </Grid>
                                <Grid item md={9} xs={9}>
                                    <Typography variant="h6">Visa Débito terminada en 4787</Typography>
                                </Grid>
                            </Grid>
                            <span className={classes.imageBackdrop} /> 
                        </ButtonBase>
                        <Divider />
                        <ButtonBase className={classes.image} >
                            <Grid container justify="center" alignItems="center" >
                                <Grid item md={3} xs={3}>
                                    <img src={mp} alt="visa" className={classes.logoMp} />
                                </Grid>
                                <Grid item md={9} xs={9}>
                                    <Typography variant="body1" style={{ color: "#009ee3" }}>Pague con su cuenta de MercadoPago</Typography>
                                </Grid>
                            </Grid>
                            <span className={classes.imageBackdrop} /> 
                        </ButtonBase>
                        <Divider />
                        <ButtonBase className={classes.image} onClick={() => this.setState({ open: true })}>
                            <Grid container justify="center" alignItems="center" >
                                <Grid item md={11} xs={10}>
                                    <Typography variant="body1" color="primary" align="left">Agregar otra tarjeta</Typography>
                                </Grid>
                            </Grid>
                            <span className={classes.imageBackdrop} /> 
                        </ButtonBase>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                    {this.agregarTarjeta()}
                </Grid>
            </Grid>
        );
    }
}

Tarjetas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tarjetas);