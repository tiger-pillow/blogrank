import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation'
import { Navigate } from "react-router-dom";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          password:null,
          confirmedPassword:null,
        };
      }
    
    handleChangePassword(e) {
        this.setState({ password: e.target.value});
    }
    handleChangeConfirmedPassword(e) {
        this.setState({ confirmedPassword: e.target.value});
    }

    checkPassword(){
        if (this.state.password == null || this.state.confirmedPassword == null){
            alert("Please fill out password / confirmed password!");
        } else if (this.state.password != this.state.confirmedPassword) {
            alert("Password and confirmed password is not the same.");
        } else {
            return <Navigate to="/"></Navigate>
        }
    }

    render(){
        return (
            <div>
                <Navigation></Navigation>
                <div class="container-md py-600">
                    <h3>Sign Up</h3>

                    <form method="POST" action="/api/signup">
                        <div class="mb-3">
                        <label class="form-label"> Email </label>
                        <input name="email" class="form-control" type="text" placeholder="xyz@gmail.com"></input>
                        </div>

                        <div class="mb-3">
                        <label class="form-label"> Username </label>
                        <input name="name" class="form-control" type="text" placeholder="xyz"></input>
                        </div>

                        <div class="mb-3">
                        <label class="form-label"> Password </label>
                        <input name="password" class="form-control" type="password" placeholder='******' onChange={(e)=>this.handleChangePassword(e)}></input>
                        </div>

                        <div class="mb-3">
                        <label class="form-label"> Confirm Password </label>
                        <input name="confirmedPassword" class="form-control" type="password" placeholder='******' onChange={(e)=>this.handleChangeConfirmedPassword(e)}></input>
                        </div>

                        <button type="submit" class="btn btn-primary" onClick={this.checkPassword}>Sign Up</button>
                    </form>
                    </div>
            </div>
        )
    }
}

export default SignUp; 