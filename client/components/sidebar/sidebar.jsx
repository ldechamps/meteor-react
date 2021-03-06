import React, {Component} from 'react';



export default class Sidebar extends Component {
    getLinks() {
        return [
            {_id:1,href:'/profile',icon:'fa fa-user fa-2x',text:'Profile'},
            {_id:2,href:'/dashboard',icon:'fa fa-rss fa-2x',text:'News Feed'},
            {_id:3,href:'/messages',icon:'fa fa-comment fa-2x',text:'Messages'},
            {_id:4,href:'/friends',icon:'fa fa-users fa-2x',text:'Friends'}
        ]
    }
    
    renderLinks(){
        return this.getLinks().map( (link) => (
                <li key={link._id}>
                    <a href={link.href}><i className={link.icon}></i> {link.text}</a>
                </li>
            ));
    }
    
    render() {
        return (
            <div className="column col-sm-2 col-xs-1 sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li>
                        <a href="#" data-toggle="offcanvas" className="visible-xs text-center">
                            <i className="fa fa-list-alt"></i>
                        </a>
                    </li>
                </ul>
                <ul className="nav hidden-xs" id="lg-menu">
                    {this.renderLinks()}
                </ul>
            </div>
        )
    }
    
}