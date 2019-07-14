import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <section className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Công thức</h2>
                            <h3 className="section-subheading text-muted">Còn tình cảm nào chân thành hơn tình yêu dành cho thức ăn</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a className="portfolio-link">
                                <img className="img-fluid" src="/static/images/gasotchanh.jpg" alt="image" />
                            </a>
                            <div className="portfolio-caption" style={{textAlign:'center'}}>
                                <a href="/posts/content_post"><h4>Gà sốt chanh</h4></a>
                                <p className="text-muted">Món chính</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a className="portfolio-link" data-toggle="modal">
                                <img className="img-fluid" src="/static/images/cuondiepchay.jpg" alt="image" />
                            </a>
                            <div className="portfolio-caption" style={{textAlign:'center'}}>
                                <a href="#"><h4>Cuốn diếp chay</h4></a>
                                <p className="text-muted">Món chay</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a className="portfolio-link" data-toggle="modal">
                                <img className="img-fluid" src="/static/images/banhduc.jpg" alt="image" />
                            </a>
                            <div className="portfolio-caption" style={{textAlign:'center'}}>
                                <a href=""><h4>Bánh đúc lá dứa</h4></a>
                                <p className="text-muted">Bánh ngọt</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a className="portfolio-link" data-toggle="modal">
                                <img className="img-fluid" src="/static/images/suachua.jpg" alt="image" />
                            </a>
                            <div className="portfolio-caption" style={{textAlign:'center'}}>
                                <a href=""><h4>Sữa chua nếp cẩm</h4></a>
                                <p className="text-muted">Ăn vặt</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a className="portfolio-link" data-toggle="modal">
                                <img className="img-fluid" src="/static/images/suahatsen.jpg" alt="image" />
                            </a>
                            <div className="portfolio-caption" style={{textAlign:'center'}}>
                                <a href=""><h4>Sữa hạt sen</h4></a>
                                <p className="text-muted">Thức uống</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a className="portfolio-link" data-toggle="modal">
                                <img className="img-fluid" src="/static/images/sup.jpg" alt="image" />
                            </a>
                            <div className="portfolio-caption" style={{textAlign:'center'}}>
                                <a href=""><h4>Súp khoai tây</h4></a>
                                <p className="text-muted">Giảm cân</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-12 text-center">
                    <a className="btn warning" href="/user/post_user">Xem thêm >>></a>
                </div> */}
            </section>
        );
    }
}

export default Post;