import {Component} from 'react';
import Constants from './../Utils/Constants'
import BPGroup from '../Models/BPGroup'
import BPUserInfo from '../Models/BPUserInfo'

class GuestAPI extends Component {

    loginUser(email, password,handleLogin)
    {
      let url =  Constants.BASE_URL + '/loginUser';
        fetch(url,{
          method: 'POST', 
          headers:{ 'Content-Type': 'application/json'},
          body: JSON.stringify({'mail': email, 'password': password})
      })
       .then ((response) => {
            console.log("response",response);
            return response.json();
        })
        .then (responseData => {
                handleLogin(responseData);
        });
    }

    signUp(userName, email, password,handleSignUpOnClick) {
        let url =  Constants.BASE_URL + '/signUpGuest';
       let  body=JSON.stringify({ 'name':userName,'mail': email, 'password': password });
        console.log(body);
        fetch(url,{
          method: 'POST', 
          headers:{ 'Content-Type': 'application/json'},
          body: body
      })
       .then ((response) => {
            console.log("response",response);
            return response.json();
        })
        .then (responseData => {
          handleSignUpOnClick(responseData);
        });
      }
}

export default new GuestAPI();