import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import MemberSmall from './MemberSmall';

class Member extends Component {
    render() {
        return (
            <Layout title="Thành viên">
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
                                        <img className="mx-auto rounded-circle" src="images/cuondiepchay.jpg" alt />
                                        <h8></h8>
                                        <br/>
                                        <span className="heading">Yêu thích: </span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>
                                    <br/>
                                    <div className="teamsmall">
                                        <img className="mx-auto rounded-circle" src="images/suachua.jpg" alt />
                                        <h8>dff</h8>
                                        <br/>
                                        <span class="heading">Yêu thích: </span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                    <br/>
                                    <div className="teamsmall">
                                        <img className="mx-auto rounded-circle" src="images/suahatsen.jpg" alt />
                                        <h8>dff</h8>
                                        <br/>
                                        <span class="heading">Yêu thích: </span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                    <br/>
                                    <div className="teamsmall">
                                        <img className="mx-auto rounded-circle" src="images/sup.jpg" alt />
                                        <h8>dff</h8>
                                        <br/>
                                        <span class="heading">Yêu thích: </span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                    <br/>
                                    <div className="teamsmall">
                                        <img className="mx-auto rounded-circle" src="images/sup.jpg" alt />
                                        <h8>dff</h8>
                                        <br/>
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
            </Layout>
        );
    }
}

export default Member;