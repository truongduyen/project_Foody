import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import Nav_User from './Nav_User';

class AddPost extends Component {
    state = {
        title: '',
        content: '',
        image: '',
        item: '',
        user_email: '',
        email: ''
    }
    onChange = e => {

        this.setState({ [e.target.name]: e.target.value })
    }
    submitFormAdd = e => {
        e.preventDefault()
        console.log(this.state.user_email)
        fetch('http://localhost:4000/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                title: this.state.title,
                content: this.state.content,
                image: this.state.image,
                item: this.state.item,
                user_email: this.state.email 
            })
        })
            .then(() => {
                alert(`Đăng bài viết thành công`)
                location.reload()
            })
            .catch(err => console.log(err))
    }
    componentDidMount() {
        const info = JSON.parse(localStorage.getItem("username"))
        this.setState({
            email: info.email
        })
    }
    render() {
        return (
            <LayoutUser title="Đăng bài viết">
                <Nav_User />
                <div className="content">
                    <div className="container">
                        <h3>Đăng bài viết mới</h3><br />
                        <form className="form-info" method="POST" onSubmit={this.submitFormAdd}>
                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Mục: </label><br />
                                    <select className="item_post" name="item" 
                                    onChange={this.onChange} 
                                    value= {this.state.item}
                                    defaultValue= {this.state.item}
                                    style={{ height: "40px", width: "1108px" }}
                                     >
                                        <option value="monchay"  >Món chay</option>
                                        <option value="anvat"  >Ăn vặt</option>
                                        <option value="giamcan"  >Giảm cân</option>
                                        <option value="thucuong"  >Thức uống</option>
                                        <option value="monchinh"   selected>Món chính</option>
                                    </select>
                                </div>
                            </div>
                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Tiêu đề: </label>
                                    <input type="text" className="form-control" name="title" onChange={this.onChange} value={this.state.title} required />
                                </div>
                            </div>
                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Nội dung:</label>
                                    <textarea rows={10} cols={100} className="form-control" name="content" onChange={this.onChange} value={this.state.content} maxLength={999} style={{ resize: 'none' }} required />
                                </div>
                            </div>
                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Người đăng:</label>
                                    <input className="form-control" name="user_email" onChange={this.onChange} value={this.state.email} required />
                                </div>
                            </div>
                            <div className="control-group form-group">
                                <div className="controls">
                                    <input type="file" name="image" onChange={this.onChange} value={this.state.image} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success">Đăng bài viết</button>
                        </form>
                    </div>
                </div>
            </LayoutUser>
        );
    }
}
export default AddPost;