import React, { Component } from 'react';
import LayoutAdmin from '../Layout/LayoutAdmin';

class UpdatePost extends Component {
    render() {
        return (
            <LayoutAdmin>
                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="cards">
                                    <img src="/static/images/member.jpg" className="rounded-circle" alt="Cinque Terre" />
                                    <br />
                                    <h4></h4>
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
                            <a href="/user/page/add_post">ĐĂNG BÀI VIẾT</a>
                            <a href="/user/page/user_info">THÔNG TIN</a>
                            <a href="/">ĐĂNG XUẤT</a>
                        </div>
                        <div className="content">
                            <div className="container">
                                <h3>Đăng bài viết mới</h3><br />
                                {this.props.result.map((item, key) =>
                                <form className="form-info" method="POST">
                                    <div className="control-group form-group">
                                        <div className="controls">
                                            <label>Tiêu đề: </label>
                                            <input type="text" className="form-control" name="title" defaultValue={item.title} />
                                        </div>
                                    </div>
                                    <div className="control-group form-group">
                                        <div className="controls">
                                            <label>Nội dung:</label>
                                            <input rows={10} cols={100} className="form-control" name="content" defaultValue={item.content} maxLength={999} style={{ resize: 'none' }} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="control-group form-group">
                                        <div className="controls">
                                            <input type="file" value="Chọn ảnh" />
                                        </div>
                                    </div>
                                    <div id="success" />
                                    <a type="button" className="btn btn default" >Hủy bỏ</a>
                                    <button type="submit" className="btn btn-primary" >Đăng chình sửa</button>
                                </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutAdmin>
        );
    }
}

export default UpdatePost;