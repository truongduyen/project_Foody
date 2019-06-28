import React, { Component } from 'react';

class Member extends Component {
    render() {
        return (
            <section className="bg-light" id="team">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Thành viên</h2>
                        <h3 className="section-subheading text-muted"></h3>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-4">
                        <div className="team-member">
                        <img className="mx-auto rounded-circle" src="/static/images/member1.jpg" alt />
                        <h4>Kay Garland</h4>
                        {/* <p className="text-muted">Lead Designer</p> */}
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#">
                                <i className="fab fa-linkedin-in" />
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="team-member">
                        <img className="mx-auto rounded-circle" src="/static/images/member.jpg" alt />
                        <h4>Larry Parker</h4>
                        {/* <p className="text-muted">Lead Marketer</p> */}
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#">
                                <i className="fab fa-linkedin-in" />
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="team-member">
                        <img className="mx-auto rounded-circle" src="/static/images/member2.jpg" alt />
                        <h4>Diana Pertersen</h4>
                        {/* <p className="text-muted">Lead Developer</p> */}
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#">
                                <i className="fab fa-linkedin-in" />
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-12 text-center">
                    <a className="btn warning" href="/member">Xem thêm >>></a>
                </div>
            </section>

        );
    }
}

export default Member;