import React, { Component } from 'react';
import LayoutAdmin from '../../components/Layout/LayoutAdmin';
import { CSVLink } from "react-csv";
var dateFormat = require('dateformat');

class Admin_Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            items: [],
            id: '',
            username: '',
            email: ''
        }
    }
    onSearch = (e) => {
        e.preventDefault();
        this.getItems(this.state.keyword)
    }
    getItems(keyword) {
        var url = 'http://localhost:4000/admin'
        if (keyword !== null) {
            url = url + '?keyword=' + keyword;
        }
        fetch(url)
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log(err))
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
        // console.log(this.state.username)
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
                // console.log(data)
                alert(`Cập nhật thành viên ${this.state.username} thành công`)
                location.reload()
            })
            .catch(err => console.log(err))
    }
    //delete    
    deleteItem = item => {
        let confirmDelete = window.confirm('Xóa thành viên này?') // demo đi bé
        if (confirmDelete) {
            console.log(item)
            fetch('http://localhost:4000/admin', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({  
                    id:item.id,
                    email:item.email
                })
            })
                .then(() => {
                    alert("Xóa thành công")
                    location.reload()
                })
                .catch(err => console.log(err))
        }
    }
    componentDidMount() {
        this.getItems('')
    }

    render() {
        return (
            <LayoutAdmin title="Quản lý thành viên">
                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <form className="form-inline float-right">
                                    <CSVLink
                                        data={this.state.items}
                                        filename={"db_user.csv"}
                                        type="button"
                                        className="btn btn-success"
                                        target="_blank">
                                        <i className="fa fa-file-export"> Xuất file</i>
                                    </CSVLink>
                                    &nbsp;
                                    <div className="search-container">
                                        <form className="search">
                                            <input type="text" id="keyword" name="keyword" onChange={this.onChange} placeholder="Nội dung..." />
                                            <button type="submit" onClick={this.onSearch}><i className="fas fa-search"></i></button>
                                        </form>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h4>Danh sách thành viên</h4>
                                <div className="records_content">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Tên người dùng</th>
                                                <th>Email</th>
                                                <th>Ngày đăng ký</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.items.map(item =>
                                                <tr key={item.id}>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.username}</td>
                                                    <td>{item.email}</td>
                                                    <td>{dateFormat(item.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
                                                    <td>
                                                        <a className="btn btn-info" data-toggle="modal" data-target="#Modal_Update" onClick={() => this.setUpdateItem(item)}><i className="fas fa-edit"></i></a>
                                                        <a name="btnDelete" className="btn btn-danger" onClick={() => this.deleteItem(item)}><i className="fas fa-trash" /></a>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <form className="modal fade" id="Modal_Update" method="POST" onSubmit={this.submitFormUpdate} >
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Chỉnh sửa thông tin thành viên</h4>
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
                </section>
            </LayoutAdmin>
        );
    }
}

export default Admin_Member;