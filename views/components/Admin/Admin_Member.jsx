import React, { Component } from 'react';
import LayoutAdmin from '../Layout/LayoutAdmin';
var dateFormat = require('dateformat');

class Admin_Member extends Component {
    render() {
        return (
            <LayoutAdmin title="Quản lý thành viên">
                <section id="services">
                    <div className="container">
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
                                            {this.props.result.map((item, key) =>
                                                <tr key={key}>
                                                    <td>{item.id}</td>
                                                    <td>{item.username}</td>
                                                    <td>{item.email}</td>
                                                    <td>{dateFormat(item.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
                                                    <td>{dateFormat(item.updatedAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
                                                    <td>
                                                        <a name="btnDelete" className="btn btn-danger" href={"/admin/user/delete/" + item.id}><i class="fa fa-trash" /></a>
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