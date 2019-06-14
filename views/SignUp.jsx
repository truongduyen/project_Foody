import React, { Component } from 'react';
import Layout from './components/Layout/Layout';

class SignUp extends Component {
    render() {
        return (
            <Layout title="Đăng ký">
                <section id="services">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/">Trang chủ</a>
                            </li>
                            <li className="breadcrumb-item active">Đăng ký</li>
                        </ol>
                        <div className="login-wrap">
                            <div className="login-html">
                                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Đăng ký</label>
                                <div className="login-form">
                                    <form className="form-signup" method="POST">
                                        <div className="sign-up-htm">
                                            <div className="group">
                                                <label htmlFor="user" className="label">Tên người dùng</label>
                                                <input id="user" type="text" className="input" name="ten" required />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">Mật khẩu</label>
                                                <input id="pass" type="password" className="input" data-type="password" name="pass" required />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">Nhập lại mật khẩu</label>
                                                <input id="pass" type="password" className="input" data-type="password" name="salt" required />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">Email</label>
                                                <input id="email" type="text" className="input" name="mail" required />
                                            </div>
                                            <div className="group">
                                                <input type="submit" className="button" value="Đăng ký" />
                                            </div>
                                            <div className="hr" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
                    );
                }
            }
            
export default SignUp;