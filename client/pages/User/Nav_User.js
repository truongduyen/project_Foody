import React, { Component } from 'react';

class Nav_User extends Component {
    state = {
        username: '',
        email: ''
    }
    componentDidMount() {
        const info = JSON.parse(localStorage.getItem("username"))
        this.setState({
            username: info.username,
            email: info.email,
            createdAt: info.createdAt
        })
    }
    logout() {
        localStorage.removeItem("username")
        alert('Đăng xuất thành công')
    }
    render() {
        return (
            <div className="space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="cards">
                                <img src="/static/images/member.jpg" className="rounded-circle" alt="Cinque Terre" />
                                <br />
                                <h4>{this.state.username}</h4>
                                <div className="row text-center">
                                    <span className="heading">Yêu thích: </span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                </div>
                                Lượt xem: 343
                                </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <img className="card" src="/static/images/banner.jpg" alt="Card image cap" />
                            </div>
                        </div>
                    </div>
                    <div className="topnav">
                        <a className="active" href="/user/page">CÔNG THỨC</a>
                        {/* <a href="#news">MÓN YÊU THÍCH</a> */}
                        <a href="/user/addpost">ĐĂNG BÀI VIẾT</a>
                        <a href="/user/user_info">THÔNG TIN</a>
                        <a href="/" onClick={this.logout}>ĐĂNG XUẤT</a>
                    </div>
                </div>
                </div>
        );
    }
}

export default Nav_User;