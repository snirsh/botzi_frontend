import { Component, OnInit, Input } from '@angular/core';
declare var FB: any;

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyBZJI-R8jesec4R4H8OyElRNYsc5IGpPQM",
  authDomain: "botzi-19152.firebaseapp.com",
  databaseURL: "https://botzi-19152.firebaseio.com",
  projectId: "botzi-19152",
  storageBucket: "botzi-19152.appspot.com",
  messagingSenderId: "121889252544",
  appId: "1:121889252544:web:a202c9bf93e5f439d53925",
  measurementId: "G-HWZR120LVX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @Input() signUpType: string;
  @Input() signUpHeader: string;

  constructor() { }


  ngOnInit() {

    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '2692356157754889',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

  }

  account = {};

  submitLogin(){
        console.log("submit login to facebook");
        //FB.login();
        FB.login((response)=>
            {
              console.log('submitLogin',response);
              if (response.authResponse)
              {
                //login success    
                console.log('Login succesfully');            
                //login success code here
                //redirect to home page
                document.location.href="/";
               }
               else
               {
               console.log('User login failed');
             }
          });

      }

}
