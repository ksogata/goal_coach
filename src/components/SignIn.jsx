import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            },
        };
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    signIn() {
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error});
            });
    }
    
    render() {
        return (
            <div className="form-inline">
                <h2>Sign In</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="email"
                        name="email"
                        onChange={ this.handleChange }
                    />
                    
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        name="password"
                        onChange={ this.handleChange }
                    />
                    
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.signIn()}
                    >
                        Sign In
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'signup'}>Not a user? Sign up!</Link></div>
            </div>
        )
    }
}

export default SignIn;