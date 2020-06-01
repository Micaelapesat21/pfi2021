import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';

import ReservaRender from './ReservaRender';
import foto from '../../Imagenes/logoHotel.png'
import foto3 from '../../Imagenes/logoHilton.png'







const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 400,
    },
})

class Historial extends Component {

    render() {
        //const { classes } = this.props;
       
        return (
            <Grid container spacing={3} justify="center" alignItems="center">

                <Grid item xs={12} md={8} lg={9}>
                    <Typography variant="h3">Su Historial</Typography>
                   
                        <ReservaRender
                            id={this.props.id}
                            logo={foto}
                            CheckIn={this.props.CheckIn}
                            CheckOut={this.props.CheckOut}
                            huespedes={this.props.huespedes}
                            precio={this.props.precio}
                            checkInOpen={this.props.checkInOpen}
                            checkOutOpen={this.props.checkOutOpen}
                            modo={this.props.modo}
                        />
                        <Divider />
                        {<ReservaRender
                            id={"Hilton"}
                            logo={foto3}
                            CheckIn={"2020-04-20"}
                            CheckOut={"2020-04-24"}
                            huespedes={3}
                            precio={2000}
                            modo={this.props.modo}
                        />}
                   
                </Grid>



            </Grid>
        );
    }
}

Historial.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Historial);