import React, { Component } from 'react';
import Layout from './components/Layout/Layout';

class Login extends Component {
    // myFunction(){
    //     alert('sai')
    // }
    // componentWillMount(){
       
    
    // }
    // componentWillReceiveProps(nextProp){
    //     //alert(nextProp.mess)
    //     //console.log(nextProp.mess)
    // }
    render() {
        // console.log(this.props.mess);
        return (
            <Layout title="Đăng nhập">
                {/* <h1>{this.props.mess?this.props.mess:""}</h1> */}
                <section id="services">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/">Trang chủ</a>
                            </li>
                            <li className="breadcrumb-item active">Đăng nhập</li>
                        </ol>
                        <div className="login-wrap">
                            <div className="login-html">
                                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Đăng nhập</label>
                                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab"></label>
                                <div className="login-form">
                                    <form className="form-signin" method="POST">
                                        <div className="sign-in-htm">
                                            <div className="group">
                                                <label htmlFor="email" className="label">Email</label>
                                                <input id="email" name="email" type="text" className="input" required autoFocus />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">Mật khẩu</label>
                                                <input id="pass" name="password" type="password" className="input" data-type="password" required />
                                            </div>
                                            <div className="group">
                                                <input id="check" type="checkbox" className="check" defaultChecked />
                                                <label htmlFor="check"><span className="icon" /> Ghi nhớ</label>
                                            </div>
                                            <div className="group" >
                                                <input type="submit" className=" button"  onClick="myFunction()" value="Đăng nhập" />               
                                            </div>
                                            <div className="hr" />
                                            <div className="foot-lnk">
                                                  <label htmlFor="tab-1">Chưa có tài khoản, mời bạn Đăng ký tại đây</label><br/>
                                                <p><a className="btn btn-success" href="/signup">Đăng ký</a></p><br/>
                                                <a href="#forgot">Quên Mật khẩu?</a>
                                            </div>
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

export default Login;