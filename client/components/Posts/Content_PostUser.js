import React, { Component } from 'react';
import PostSmallUser from './PostSmallUser';

class Content_PostUser extends Component {
    render() {
        return (
            <section id="services">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/user">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item active">Công thức</li>
                    </ol>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Công thức</h2>
                            <h3 className="section-subheading text-muted">Còn tình cảm nào chân thành hơn tình yêu dành cho thức ăn</h3>
                        </div>
                    </div>
                    <div className="post" id="portfolio">
                        <PostSmallUser />
                    </div>
                </div>
            </section>
        );
    }
}

export default Content_PostUser;