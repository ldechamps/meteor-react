import React from 'react';

export default class Header extends React.Component {
    render(){
        return (
            <div>
                <span className="navbar-react">
                    <i className="fa fa-facebook"></i>akebook
                </span>
                <div className="collapse navbar-collapse" id="navbar">
                    <form role="form" id="signin" className="navbar-form navbar-right">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-user"></i>
                            </span>
                            <input placeholder="Email Address" type="text" ref="email" id="email" className="form-control"/>
                        </div>
                         <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-lock"></i>
                            </span>
                            <input placeholder="Password" type="password" ref="password" id="password" className="form-control"/>
                        </div> 
                        <button type="submit" className="btn btn-primary">Login</button>                      
                    </form>
                </div>
             </div> 
        )
    }
};