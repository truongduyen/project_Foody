import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="/">MónNgon</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" 
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/">TRANG CHỦ</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/posts">CÔNG THỨC</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/Member">THÀNH VIÊN</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/blog">BLOG</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/contact">LIÊN HỆ</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/login">ĐĂNG NHẬP</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;