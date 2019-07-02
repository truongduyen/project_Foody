import React, { Component } from 'react';
import LayoutAdmin from '../../components/Layout/LayoutAdmin';
import { CSVLink } from "react-csv";
var dateFormat = require('dateformat');

class Admin_Member extends Component {
    state = {
        items: []
    }
    getItems() {
        fetch('http://localhost:4000/admin', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }    
        }) 
        .then(response => response.json())
        .then(items => this.setState({items}))
        .catch(err => console.log("err "+ err))
    }
    deleteItem = id => {
        let confirmDelete = window.confirm('Xóa thành viên này?')
        if (confirmDelete) {
            // console.log(id)
            fetch('http://localhost:4000/admin', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id
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
        this.getItems()
        console.log(this.state.items)
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
                                        <form action="/sss">
                                            <input type="text" placeholder="Nội dung..." name="search" />
                                            <button type="submit"><i className="fa fa-search"></i></button>
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
                                                <th>UpdatedAT</th>
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
                                                    <td>{dateFormat(item.updatedAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
                                                    <td>
                                                        <a name="btnDelete" className="btn btn-danger" onClick={()=>this.deleteItem(item.id)}><i className="fa fa-trash" /></a>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutAdmin>
        );
    }
}

export default Admin_Member;