import React, { Component } from 'react';
import LayoutUser from '../Layout/LayoutUser';
import Page from './Page';

class AddPost extends Component {
    render() {
        return (
            <LayoutUser title="Đăng bài viết">
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
                            <a href="#">ĐĂNG XUẤT</a>
                        </div>
                        <div className="content">
                            <div className="container">
                                <h3>Đăng bài viết mới</h3><br />
                                <form name="sentMessage" id="contactForm" noValidate>
                                    <div className="control-group form-group">
                                        <div className="controls">
                                            <label>Tiêu đề: </label>
                                            <textarea type="text" className="form-control" id="name" required data-validation-required-message="Vui lòng nhập tên" />
                                            <p className="help-block" />
                                        </div>
                                    </div>
                                    <div className="control-group form-group">
                                        <div className="controls">
                                            <label>Nội dung:</label>
                                            <textarea rows={10} cols={100} className="form-control" id="message" required data-validation-required-message="Vui lòng nhập nội dung" maxLength={999} style={{ resize: 'none' }} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="control-group form-group">
                                        <div className="controls">
                                            <input type="file" value="Chọn ảnh" />
                                        </div>
                                    </div>
                                    <div id="success" />
                                    <a type="button" className="btn btn default" >Hủy bỏ</a>
                                    <button type="submit" className="btn btn-primary" id="sendMessageButton">Đăng bài viết</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutUser>
        );
    }
}

export default AddPost;