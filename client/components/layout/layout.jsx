import React, {Component} from 'react';
import Navbar from '../navbar/navbar.jsx';

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }
    
    
    render () {
        return (
            <div className="wrapper">
                <div className="box">
                    <div className="srow row-offcanvas row-offcanvas-left push-down-50">
                                <Navbar/>
                                {this.props.sidebar}
                                {this.props.content} 
                        </div>
                </div>
            </div>               
        )
    }
}


