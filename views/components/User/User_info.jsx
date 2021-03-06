import React, { Component } from 'react';
import LayoutUser from '../Layout/LayoutUser';
import Page from './Page';
var dateFormat = require('dateformat');

class User_info extends Component {
    render() {
        return (
            <LayoutUser title="Thông tin người dùng">
                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="cards">
                                    <img src="/images/member.jpg" className="rounded-circle" alt="Cinque Terre" />
                                    <br />
                                    <h4>ten</h4>
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
                                    <img className="card" src="/images/banner.jpg" alt="Card image cap" />
                                </div>
                            </div>
                        </div>
                        <div className="topnav">
                            <a className="active" href="#home">CÔNG THỨC</a>
                            <a href="#news">MÓN YÊU THÍCH</a>
                            <a href="/user/page/add_post">ĐĂNG BÀI VIẾT</a>
                            <a href="/user/page/user_info">THÔNG TIN</a>
                            <a href="/user/page/user_info">ĐĂNG XUẤT</a>
                        </div>
                        <div className="content">
                            <div className="row">
                                <h3>Thông tin người dùng</h3>
                                {this.props.result.map((item, key) =>
                                    <table className="table">
                                        <tr key={key}>
                                            <td>Tên người dùng:</td>
                                            <td><input type='text' name="username" defaultValue={item.username} /></td>
                                        </tr>
                                        <tr>
                                            <td>Email:</td>
                                            <td><input type="text" name="email" defaultValue={item.email} /></td>
                                        </tr>
                                        <tr>
                                            <td>Ngày tham gia:</td>
                                            <td><input defaultValue={dateFormat(item.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")} /></td>
                                        </tr>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutUser>
        );
    }
}
    
export default User_info;