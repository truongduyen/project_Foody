import React, { Component } from 'react';

class NavUser extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="/user">MónNgon</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" 
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/user">TRANG CHỦ</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/user/post_user">CÔNG THỨC</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/user/member_user">THÀNH VIÊN</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/user/blog_user">BLOG</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/user/page">TRANG CÁ NHÂN</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/user/contact_user">LIÊN HỆ</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavUser;