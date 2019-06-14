import React, { Component } from 'react';
import LayoutAdmin from './components/Layout/LayoutAdmin';

class Admin extends Component {
    render() {
        return (
            <LayoutAdmin title="Trang Admin">
                <section id="services">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">HỆ THỐNG QUẢN LÝ</h2>
                            <h3 className="section-subheading text-muted"></h3>
                        </div>
                        </div>
                        <div className="row text-center">
                        <div className="col-md-6">
                            <span className="fa-stack fa-6x">
                            <i className="fas fa-circle fa-stack-2x text-primary" />
                            <i className="fas fa-book-open fa-stack-1x fa-inverse" />
                            </span>
                            <h4 className="service-heading"><a href="/admin/post">Quản lý bài viết</a></h4>
                            <p className="text-muted">Đăng bài, phê duyệt bài viết</p>
                        </div>
                        <div className="col-md-6">
                            <span className="fa-stack fa-6x">
                            <i className="fas fa-circle fa-stack-2x text-primary" />
                            <i className="fas fa-users fa-stack-1x fa-inverse" />
                            </span>
                            <h4 className="service-heading"><a href="/admin/user">Quản lý thành viên</a></h4>
                            <p className="text-muted">Thông tin thành viên</p>
                        </div>
                        </div>
                    </div>
                </section>
            </LayoutAdmin>
        );
    }
}

export default Admin;