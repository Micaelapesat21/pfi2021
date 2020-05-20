import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid  } from '@material-ui/core';
import CompletarReserva from '../Componentes/ReservApi/CompletarReserva'
import firebase from '../firebaseConfig'
import DialogLogin from './../Componentes/login/DialogLogin.js'
import { Dialog } from '@material-ui/core';

const styles = theme => ({
   
})

class General extends Component {

    constructor(){
        super();
        this.state={
            id:"",
            CheckIn:"",
            CheckOut:"",
            huespedes:"",
            precio:"",
            showLogin: true,
            user: null,
        }
    }
    

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const id = query.get('id')
        const CheckIn = query.get('CheckIn')
        const CheckOut = query.get('CheckOut')
        const huespedes =query.get('huespedes')
        const precio = query.get('precio')
        
        this.setState({
            id:id,
            CheckIn:CheckIn,
            CheckOut:CheckOut,
            huespedes:huespedes,
            precio:precio,
        })

      
    }

    openDialogLogin = () => {
        this.setState({ showLogin: true });
    }

    closeDialogLogin = () => {
        this.setState({ showLogin: false });
      }

    checkIfUserIsLogged() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user: user,
                showLogin: false,
            });
        });
    }

    showLoginViewIfNeeded() {
        if ( this.state.showLogin ) {
            return (
                <Dialog open= { this.openDialogLogin } onClose= { this.closeDialogLogin } >
                  <DialogLogin closePass={ this.closeDialogLogin.bind() } />
                </Dialog>
            );
        }else {
            return
        }
    }
    
    
    render() {
        //const { classes } = this.props;
      
        
        return (
            <Grid container justify="center" alignItems="center">

                { this.showLoginViewIfNeeded() }

                <Grid item xs={12} md={8} lg={9}>
                    <CompletarReserva
                        id={ this.state.id}
                        CheckIn={this.state.CheckIn}
                        CheckOut={this.state.CheckOut}
                        huespedes={this.state.huespedes}
                        precio={this.state.precio}
                    />
                </Grid>
               
                
                
            </Grid>
        );
    }
}

General.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(General);