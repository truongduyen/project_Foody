import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';

class Contact_User extends Component {
    render() {
        return (
            <LayoutUser title="Liên hệ">
                <section id="services">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/user">Trang chủ</a>
                            </li>
                            <li className="breadcrumb-item active">Liên hệ</li>
                        </ol>
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <iframe width="100%" height="400px" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="http://maps.google.com/maps?hl=en&ie=UTF8&ll=37.0625,-95.677068&spn=56.506174,79.013672&t=m&z=4&output=embed" />
                            </div>
                            <div className="col-lg-4 mb-4">
                                <h3>Địa chỉ:</h3>
                                <p>345/67 Phường 4
                                <br />Quận 10, TP.HCM
                                <br />
                                </p>
                                <p><abbr title="Phone">SDT</abbr>: (123) 456-7890</p>
                                <p><abbr title="Email">Email</abbr>:
                                <a href="mailto: monngon@gmail.com"> monngon@gmail.com</a>
                                </p>
                                <p><abbr title="Hours">Giờ làm việc</abbr>: Thứ 2 - Thứ 7 từ 9:00 đến 17:00</p>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutUser>
        );
    }
}

export default Contact_User;