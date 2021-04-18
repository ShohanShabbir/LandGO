import React, { useContext, useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import { useHistory, useLocation } from 'react-router';
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      console.log(email);
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

    return (
        <section>
            <div class="container-fluid">
                <div class="row no-gutter">
                    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                    <div class="col-md-8 col-lg-6">
                        <div class="login d-flex align-items-center py-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-9 col-lg-8 mx-auto">
                                        <h3 class="login-heading mb-4">Welcome back!</h3>
                                        <form>
                                            <div class="form-label-group">
                                                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                                                <label for="inputEmail">Email address</label>
                                            </div>

                                            <div class="form-label-group">
                                                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                                                <label for="inputPassword">Password</label>
                                            </div>

                                            <div class="custom-control custom-checkbox mb-3">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                                <label class="custom-control-label" for="customCheck1">Remember password</label>
                                            </div>
                                            <button class="btn btn-lg btn-danger text-white btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                                            <div class="text-center">
                                                <button class="btn btn-lg btn-danger text-white btn-block btn-login text-uppercase font-weight-bold mb-2" onClick={handleGoogleSignIn} type="submit"> Google Sign in</button>
                                                <a style={{ fontFamily: 'Poppins' }} class="small" href="#">Forgot password?</a></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;