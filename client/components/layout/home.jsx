import React, {Component} from 'react';

//Homelayout = React.createClass({
export default class Homelayout extends Component {
    render(){
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Featurelist/>
                        </div>
                        <div className="col-md-5 col-md-offset-1">
                            <Signupform/>
                        </div>
                     </div>
                 </div>
             </div>
        )
    }
}//)