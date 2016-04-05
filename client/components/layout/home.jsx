import React from 'react';
import Header from '../header/header.jsx';
import Featurelist from '../features/featurelist.jsx';
import Signupform from '../signup/signupform.jsx';

//Homelayout = React.createClass({
export const Homelayout = () => (
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
);