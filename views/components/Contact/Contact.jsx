import React, { Component } from 'react';
import Layout from '../Layout/Layout';

class Contact extends Component {
    render() {
        return (
            <Layout title="Liên hệ">
                <section id="services">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/">Trang chủ</a>
                            </li>
                            <li className="breadcrumb-item active">Liên hệ</li>
                        </ol>
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <iframe width="100%" height="400px" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="http://maps.google.com/maps?hl=en&ie=UTF8&ll=37.0625,-95.677068&spn=56.506174,79.013672&t=m&z=4&output=embed" />
                            </div>
                            <div className="col-lg-4 mb-4">
                                <h3>Địa chỉ:</h3>
                                <p>
                                    3481 Melrose Place
                                <br />Beverly Hills, CA 90210
                                <br />
                                </p>
                                <p>
                                    <abbr title="Phone">SDT</abbr>: (123) 456-7890
                            </p>
                                <p>
                                    <abbr title="Email">Email</abbr>:
                                <a href="mailto: monngon@gmail.com"> monngon@gmail.com
                                </a>
                                </p>
                                <p>
                                    <abbr title="Hours">Giờ làm việc</abbr>: Thứ 2 - Thứ 7 từ 9:00 đến 17:00
                            </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mb-4">
                                <h3>Liên hệ với chúng tôi</h3>
                                <form name="sentMessage" id="contactForm" noValidate>
                                    <div className="control-group form-group">
                                        <div className="controls">
                                            <label>Tên: </label>
                                            <input type="text" className="form-control" id="name" required data-validation-required-message="Please enter your name." />
                                            <p className="help-block" />
                                        </div>
                                    </div>
                                    <div className="control-group form-group">
                                        <div className="controls">
                                            <label>Số điện thoại::</label>
                                            <input type="tel" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number." />
                                        </div>
                                    </div>
                                    <div className="control-group form-group">
                                        <div className="controls">
                                            <label>Email:</label>
                                            <input type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address." />
                                        </div>
                                    </div>
                                    <div className="control-group form-group">
                                        <div className="controls">
                                            <label>Nội dung:</label>
                                            <textarea rows={10} cols={100} className="form-control" id="message" required data-validation-required-message="Please enter your message" maxLength={999} style={{ resize: 'none' }} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div id="success" />
                                    {/* For success/fail messages */}
                                    <button type="submit" className="btn btn-primary" id="sendMessageButton">Gửi tin nhắn</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Contact;