import React, { Component } from 'react';
import MemberSmall from './MemberSmall';

class Content_Member extends Component {
    render() {
        return (
            <section id="services">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item active">Thành viên</li>
                    </ol>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Thành viên</h2>
                            <h3 className="section-subheading text-muted"></h3>
                        </div>
                    </div>
                    <div className="col-md-3 sidenav">
                        <h5>Thành viên tích cực</h5>
                        <div className="teamsmall">
                            <img className="mx-auto rounded-circle" src="/static/images/member.jpg" alt />
                            <h8>Phương Dung</h8>
                            <br />
                            <span className="heading">Yêu thích: </span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        <br />
                        <div className="teamsmall">
                            <img className="mx-auto rounded-circle" src="/static/images/member1.jpg" alt />
                            <h8>Thúy Hằng</h8>
                            <br />
                            <span class="heading">Yêu thích: </span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <br />
                        <div className="teamsmall">
                            <img className="mx-auto rounded-circle" src="/static/images/member2.jpg" alt />
                            <h8>Thúy Kiều</h8>
                            <br />
                            <span class="heading">Yêu thích: </span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <br />
                        <div className="teamsmall">
                            <img className="mx-auto rounded-circle" src="/static/images/member.jpg" alt />
                            <h8>Anh Thư</h8>
                            <br />
                            <span class="heading">Yêu thích: </span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <br />
                        <div className="teamsmall">
                            <img className="mx-auto rounded-circle" src="/static/images/member1.jpg" alt />
                            <h8>Thiên Kỳ</h8>
                            <br />
                            <span class="heading">Yêu thích: </span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                    <div className="col-md-9 row">
                        <MemberSmall></MemberSmall>
                        <MemberSmall></MemberSmall>
                        <MemberSmall></MemberSmall>
                        <MemberSmall></MemberSmall>
                        <MemberSmall></MemberSmall>
                        <MemberSmall></MemberSmall>
                        <MemberSmall></MemberSmall>
                        <MemberSmall></MemberSmall>
                        <MemberSmall></MemberSmall>
                    </div>
                </div>
                <div className="col-lg-12 text-center">
                    <a className="btn warning" href="/member">Xem thêm >>></a>
                </div>
            </section>
        );
    }
}

export default Content_Member;