import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography, Button, Paper } from '@material-ui/core';
import foto from '../../Imagenes/logoHotel.png'



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
    izq: {
        borderRight: "1px solid #e0e0e0",
        [theme.breakpoints.down('xs')]: {
            borderRight: "1px solid #ffffff",
        },
    },
    arriba: {
        borderBottom: "1px solid #e0e0e0",
        [theme.breakpoints.down('xs')]: {
            borderRight: "1px solid #ffffff",
        },
        paddingLeft: theme.spacing(1),
    },
    logo: {
        padding: theme.spacing(1),
        height: 60,
        width: 60,
    },
})

class Resenas extends Component {





    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={12} md={8} lg={9}>
                    <Typography variant="h3">Tus Reseñas</Typography>
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <Paper elevation={3} className={classes.paper} >
                        <Grid container>
                            <Grid item md={1} xs={2} className={classes.izq}>
                                <img src={foto} alt="logo" className={classes.logo} />
                            </Grid>
                            <Grid item md={11} xs={10}>
                                <Grid container>
                                    <Grid item md={12} className={classes.arriba}>
                                        <Typography component="h2" variant="h6" color="primary">Estadia Hotel Paihuen #1234567</Typography>
                                    </Grid>
                                    <Grid item md={12}>
                                        <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                                            

                                          
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

Resenas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resenas);