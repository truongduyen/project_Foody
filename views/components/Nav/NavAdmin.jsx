import React, { Component } from 'react';

class NavAdmin extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="/admin">MónNgon</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" 
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/admin">TRANG CHỦ</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/admin/post">QUẢN LÝ BÀI VIẾT</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/admin/user">QUẢN LÝ THÀNH VIÊN</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#team">ĐĂNG XUẤT</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#contact">LIÊN HỆ</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavAdmin;