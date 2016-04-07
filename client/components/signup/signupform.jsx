import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class Signupform extends Component {
   // mixins:[ReactMeteorData], // voir ce que c'est
    getMeteorData(){
        let data = {};
        data.currentUser = Meteor.user();
        return data;
    }
    
    constructor () {
        super();
        
        
       //  this.setState({message:'', messageClass:''});
        this.state = {
            message : '',
            messageClass : ''
        }

    }
        
    displayError(message){
       this.setState({message:message, messageClass:'alert alert-danger registerError'});
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.setState({message:'', messageClass:'hidden'});
        
        var first_name = this.refs.first_name.value.trim();
        var last_name = this.refs.last_name.value.trim();
        var email = this.refs.email.value.trim();
        var password = this.refs.password.value.trim();
        var user = {email:email, password:password, profile:{fullname:(first_name+last_name).toLowerCase(), firstname:first_name, lastname:last_name, avatar:'http://placehold.it/150x150', friends:[]}};
        console.log(user);
        Accounts.createUser(user, (e) => {
            FlowRouter.go('/dashboard');
            if(e){
                this.displayError(e.reason);
            }
        })
    }
    
    render(){
        return (
            <div className="row">
                <div className="signup">
                    <h1>Sign Up</h1>
                    <p className="text-muted">
                        It's free and always will be
                    </p>
                </div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <input placeholder="First Name" name="first_name" type="text" ref="first_name" className="form-control" />
                            </div>
                            <div className="col-sm-6 form-group">
                                <input placeholder="Last Name" type="text" ref="last_name" className="form-control" />
                            </div>
                         </div>   
                        <div className="form-group">
                            <input placeholder="Email or mobile number" type="text" ref="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input placeholder="Password" type="password" ref="password" className="form-control" />
                        </div> 
                        
                        <button className="btn btn-md btn-success" type="submit">Sign Up</button>
                        <span className={this.state.messageClass}>{this.state.message}</span>                     
                    </div>
                </form>
            </div>
        )
    }
};