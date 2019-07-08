import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';

class Login extends Component {
    state = {
        username: '',
        password: '',
        salt: '',
        email: '',
        role:'',
        check: true
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    submitFormLogin = e => {
        e.preventDefault()
        console.log(this.state.password)
        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(result => {
                // console.log(result)
                if (result === null) {
                    alert('Email hoặc mật khẩu sai. Vui lòng nhập lại.')
                    location.reload()
                }
                else {
                    var rs = result.role;
                    // console.log(rs);
                    if (rs === 1) {
                        alert("Đăng nhập thành công");
                        window.location.href = '/admin';
                        localStorage.setItem("username",JSON.stringify(result))    
                    }
                    else{
                        alert("Đăng nhập thành công");
                        window.location.href = '/user';
                        localStorage.setItem("username",JSON.stringify(result))
                    }
                }
            })
            .catch(err => console.log(err))
    }
    submitFormAdd = e => {
        e.preventDefault()
        console.log(this.state.username)
        fetch('http://localhost:4000/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                salt: this.state.salt,
                email: this.state.email
            })
        })            
            .then((user) => {
                alert(`${this.state.username} đăng ký thành công`);
                location.reload()
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Layout title="Đăng nhập">
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
                                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Đăng ký</label>
                                <div className="login-form">
                                    <form className="form-signin" method="POST" onSubmit={this.submitFormLogin}>
                                        <div className="sign-in-htm">
                                            <div className="group">
                                                <label htmlFor="email" className="label">Email</label>
                                                <input name="email" type="email" className="input" onChange={this.onChange} value={this.state.email} required />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">Mật khẩu</label>    
                                                <input name="password" type="password" className="input" data-type="password" onChange={this.onChange} value={this.state.password} required />
                                            </div>
                                            <div className="group">
                                                <input type="checkbox" name="vehicle3" defaultValue="Boat" className="check" defaultChecked />
                                                <label htmlFor="check"><span className="icon"></span> Ghi nhớ</label>
                                            </div>
                                            <div className="group" >
                                                <input type="submit" className=" button" value="Đăng nhập" />
                                            </div>
                                            <div className="hr" />
                                            <div className="foot-lnk">
                                                <a href="#forgot">Quên Mật khẩu?</a>
                                            </div>
                                        </div>
                                    </form>
                                    <form className="form-signup" method="POST" onSubmit={this.submitFormAdd}>
                                        <div className="sign-up-htm">
                                            <div className="group">
                                                <label htmlFor="user" className="label">Tên người dùng</label>
                                                <input type="text" className="input" name="username" onChange={this.onChange} value={this.state.username} required />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">Mật khẩu</label>
                                                <input type="password" className="input" data-type="password" name="password" onChange={this.onChange} value={this.state.password} required />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">Nhập lại mật khẩu</label>
                                                <input type="password" className="input" data-type="password" name="salt" onChange={this.onChange} value={this.state.salt} required />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">Email</label>
                                                <input type="email" className="input" name="email" onChange={this.onChange} value={this.state.email} required />
                                            </div>
                                            <div className="group">
                                                <input type="submit" className="button" value="Đăng ký" />
                                            </div>
                                            <div className="hr" />
                                            <div className="foot-lnk">
                                                <label htmlFor="tab-1">Đã là thành viên?</label>
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