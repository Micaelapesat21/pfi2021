import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import clsx from 'clsx';
import GuestInfo from '../../Models/Guest/GuestInfo';



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
})

class Resenas extends Component {
    


    boton(){
        const data=GuestInfo.getInstance()
        console.log(data._addressInfo.state.ciudad)
    }


    render() {
        const { classes } = this.props;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return (
            <Grid container spacing={3}>
            
                <Grid item xs={12} md={8} lg={9}>
                    <Paper className={fixedHeightPaper}>
                      <Typography variant="h3">Tus Reseñas </Typography>
                      <Button onClick={this.boton.bind(this)}>hola</Button>
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