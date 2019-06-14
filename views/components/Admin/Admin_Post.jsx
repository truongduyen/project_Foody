import React, { Component } from 'react';
import LayoutAdmin from '../Layout/LayoutAdmin';
var dateFormat = require('dateformat');

class Admin_Post extends Component {
    render() {
        return (
            <LayoutAdmin title="Quản lý bài viết">
                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="float-right">
                                    <a className="btn btn-success" href="/admin/post/add"><i className="fas fa-pencil-alt"></i> Thêm bài viết</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h4>Danh sách bài viết</h4>
                                <div className="records_content">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Tiêu đề</th>
                                                <th>Nội dung</th>
                                                <th>Người đăng</th>
                                                <th>Ngày nhập</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.result.map((post,key) =>
                                                <tr key={key}>
                                                    <td>{post.id}</td>
                                                    <td>{post.title}</td>
                                                    <td>{post.content}</td>
                                                    <td>{post.user_id}</td>
                                                    <td>{dateFormat(post.createdAt,"dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
                                                    <td>
                                                        <a type="button" className="btn btn info" ><i className="fas fa-edit"></i></a>
                                                        <a type="button" className="btn btn danger" href={"/admin/user/delete/" + post.id}><i className="fas fa-trash"></i></a>
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

export default Admin_Post;