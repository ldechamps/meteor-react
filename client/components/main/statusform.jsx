import React, {Component} from 'react';
//import { FS } from 'meteor/cfs:standard-packages';
import { Images } from '../../../both/collections/images';

export default class Statusform extends Component {
    constructor(){
        super();
        
        this.state = {
            imageurl:'',
            filename:''
        }
    }
    
    submitForm(){
        
    }
    
    uploadFile(e){
        e.preventDefault();
       // var that = this;
        FS.Utility.eachFile(e, (file) => {
            Images.insert(file, (err, fileObj) => {
                this.setState({image:fileObj._id, filename:fileObj.data.blob.name})
            })
        })
    }
    
    render(){

        return (
            <div className="panel panel-default">
                <div className="panel-content">
                    <div className="panel-heading">
                        Update Status
                    </div>
                    <form onSubmit={this.submitForm} className="form center-block">
                        <input type="hidden" ref="imagepath" value={this.state.imageurl}/>
                        <div className="panel-body">
                            <div className="form-group">
                                <textarea ref="sharing" className="form-control input-lg"
                                          autofocus=""
                                          placeholder="What do you want to share?"></textarea>
                            </div>
                            <h3>{this.state.filename||''}</h3>
                        </div>
                        <div className="panel-footer">
                            <div>
                                <ul className="pull-left list-inline">
                                    <li><input onChange={this.uploadFile.bind(this)} ref="file" className='filepicker' id="file" type="file"/></li>
                                </ul>
                                <button type="submit" className="btn btn-primary btn-sm postbutton">Post</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}
