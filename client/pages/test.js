import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import ReactFileReader from 'react-file-reader';;
import ConverBase64 from '../helpers/ConverBase64';
import { Base64 } from 'js-base64';

class test extends Component {
    constructor(props){
        super(props);
        this.state ={
            img:''
        }
    }
    handleFiles =  (e) => {
        ConverBase64(e.target.files,(result)=>{
            this.setState({
                img:result.base64
            })
            console.log(this.state)
        })
    }
    handleFilesImg = async (e) => {
        e.preventDefault();
        ConverBase64(e.target.files, (result) => {
            this.setState({
                img: result.base64
            })
            console.log(this.state)
        })
    }
    render() {
        return (
            <div>
                <input type="file" onChange={this.handleFiles}/>     
                <input type="file" onChange={this.handleFilesImg}></input>    
            </div>
            
        );
    }
}

export default test;