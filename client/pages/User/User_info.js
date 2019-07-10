import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import Nav_User from './Nav_User';
var dateFormat = require('dateformat');

class User_info extends Component {
    state = {
        id: '',
        username: '',
        email: ''
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    submitFormUpdate = e => {
        e.preventDefault()
        console.log(this.state.username)
        fetch('http://localhost:4000/admin', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                username: this.state.username,
                email: this.state.email
            })
        })
            .then((data) => {
                console.log(data)
                alert(`Cập nhật thành viên ${this.state.username} thành công`)
                location.reload()
            })
            .catch(err => console.log(err))
    }
    componentDidMount() {
        const info = JSON.parse(localStorage.getItem("username"))
        this.setState({
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
                                    <td><input type='text' name="username" onChange={this.onChange} value={this.state.username} /></td>
                                    <td><i className="far fa-edit" /></td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td><input type="text" name="email" onChange={this.onChange} value={this.state.email} /></td>
                                    <td><i className="far fa-edit" /></td>
                                </tr>
                                <tr>
                                    <td>Ngày tham gia:</td>
                                    <td><input value={dateFormat(this.state.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")} /></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </LayoutUser>
        );
    }
}

export default User_info;