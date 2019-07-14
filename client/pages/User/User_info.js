import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import Nav_User from './Nav_User';
var dateFormat = require('dateformat');

class User_info extends Component {
    state = {
        items: [],
        id: '',
        username: '',
        email: ''
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    //====update
    setUpdateItem = (item) => {
        this.setState({
            id: item.id,
            username: item.username,
            email: item.email
        })
    }
    submitFormUpdate = e => {
        e.preventDefault()
        const info = JSON.parse(localStorage.getItem("username"))

        console.log(this.state.id)
        fetch('http://localhost:4000/admin', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:info.id,
                username: this.state.username,
                email: this.state.email
            })
        })
            .then(() => {
                // console.log(this.state.email)
                alert(`Cập nhật thành viên ${this.state.username} thành công`)
                info.username = this.state.username;
                localStorage.setItem("username",JSON.stringify(info))
                location.reload()
            })
            .catch(err => console.log(err))
    }
    componentDidMount() {
        const info = JSON.parse(localStorage.getItem("username"))
        this.setState({
            id:info.id,
            username: info.username,
            email: info.email,
            createdAt: info.createdAt
        })
    }
    render() {
        return (
            <LayoutUser title="Thông tin người dùng">
                <Nav_User />
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <h3>Thông tin người dùng</h3>
                            <table className="table">
                                <tr>
                                    <td>Tên người dùng:</td>
                                    <td><input type='text' name="username" value={this.state.username} /></td>
                                    <td><a className="btn btn-success" data-toggle="modal" data-target="#Modal_Update" ><i className="fas fa-edit"></i></a></td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td><input type="text" name="email" value={this.state.email} /></td>
                                </tr>
                                <tr>
                                    <td>Ngày tham gia:</td>
                                    <td><input value={dateFormat(this.state.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")} /></td>
                                </tr>
                            </table>
                        </div>
                        <form className="modal fade" id="Modal_Update" method="POST" onSubmit={this.submitFormUpdate} >
                    
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title">Chỉnh sửa thông tin</h4>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="control-group form-group">
                                                <div className="controls">
                                                    <label>Tên người dùng: </label>
                                                    <input type="text" className="form-control" name="username" onChange={this.onChange} value={this.state.username} required autoFocus />
                                                </div>
                                            </div>
                                            <div className="control-group form-group">
                                                <div className="controls">
                                                    <label>Email: </label>
                                                    <input type="text" className="form-control" name="email" onChange={this.onChange} value={this.state.email} required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <a type="button" className="btn btn default" data-dismiss="modal">Hủy bỏ</a>
                                            <button type="submit" className="btn btn-success">Cập nhật thông tin</button>
                                        </div>
                                    </div>
                                </div>
                            
                        </form>
                    </div>
                </div>
            </LayoutUser>
        );
    }
}

export default User_info;