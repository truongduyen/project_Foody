import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';

class Page extends Component {
    render() {
        return (
            <LayoutUser title="Trang cá nhân">
                <section id="services">        
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="cards">
                                        <img src="/static/images/member.jpg" className="rounded-circle" alt="Cinque Terre" />
                                        <br />
                                        {/* <h4>{localStorage.getItem('username')}</h4> */}
                                        <div className="row text-center">
                                            <span className="heading">Yêu thích: </span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                        </div>
                                        Lượt xem: 343
                                </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card mb-4">
                                        <img className="card" src="/static/images/banner.jpg" alt="Card image cap" />
                                    </div>
                                </div>
                            </div>
                            <div className="topnav">
                                <a className="active" href="#home">CÔNG THỨC</a>
                                <a href="#news">MÓN YÊU THÍCH</a>
                                <a href="/user/addpost">ĐĂNG BÀI VIẾT</a>
                                <a href="/user/user_info">THÔNG TIN</a>
                                <a href="/">ĐĂNG XUẤT</a>
                            </div>
                            <div className="content">

                            </div>
                        </div>
                </section>
            </LayoutUser>
        );
    }
}
export default Page;