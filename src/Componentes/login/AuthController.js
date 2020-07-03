import { Component } from 'react';
//import GuestAPI from '../../Network/Guest/GuestAPI'
//import GuestInfo from '../../Models/Guest/GuestInfo'

//import HotelAPI from '../../Network/Hotel/HotelAPI'
//import HotelInfo from '../../Models/Hotel/HotelInfo'

const firebase = require("firebase/app");
require("firebase/auth");


class AuthController extends Component {


  handleAuthGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().languageCode = 'es_ES';
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesion`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }
  handleAuthFace() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().languageCode = 'es_ES';
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesion`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha cerrado sesion`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleIniciar(correo, contrasena) {
    firebase.auth().languageCode = 'es_ES';
    firebase.auth().signInWithEmailAndPassword(correo, contrasena)
      .then(result => 
        console.log(`${result.user.email} ha iniciado sesion`))
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          alert(errorMessage);
        } else {
          alert('Contrasena Incorrecta o Usuario inexistente');
        }
        console.log(error);
      });
  }

  signup(nombre, apellido, correo, contrasena) {
    var user = null;
    var nom = nombre;
    var ape = apellido;
    //let handlePostGuestInfo = this.handlePostGuestInfo
    firebase.auth().languageCode = 'es_ES';
    firebase.auth().createUserWithEmailAndPassword(correo, contrasena)
      .then(result => console.log(`${result.user.email} se ha registrado`))
      .then(function () {
        user = firebase.auth().currentUser;
        user.sendEmailVerification();
        user.updateProfile({ displayName: nom + " " + ape, });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/invalid-email') {
          alert(errorMessage);
        } else {
          alert('Correo electronico Existente y/o Invalido');
        }

        console.log(error);
      });
  }

  handleRecupero(correo) {
    firebase.auth().languageCode = 'es_ES';
    firebase.auth().sendPasswordResetEmail(correo)
      .then(result => console.log(`${correo} Se ha enviado el mail`))
      .then(function () {
        alert('Se ha enviado el mail a ' + correo + ', ingese para recuperar su contraseña')
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/user-not-found') {
          alert(errorMessage);
        } else {
          alert('Correo electronico no encontrado');
        }
        console.log(error);
      });


  }

}

export default new AuthController();