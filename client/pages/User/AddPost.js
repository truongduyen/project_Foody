import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import ConverBase64 from './../../helpers/ConverBase64'
import Nav_User from './Nav_User';

class AddPost extends Component {
    state = {
        title: '',
        content: '',
        image: '',
        item: '',
        img: '',
        user_email: '',
        email: ''
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log(this.state)
    }
    submitFormAdd = e => {
        e.preventDefault()
        // console.log(this.state.user_email)
        fetch('http://localhost:4000/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                title: this.state.title,
                content: this.state.content,
                image: this.state.img,
                item: this.state.item,
                user_email: this.state.email
            })
        })
            .then(() => {
                alert(`Đăng bài viết thành công`)
                window.location.href = '/user/page';
            })
            .catch(err => console.log(err))
    }
    handleFilesImg = async (e) => {
        e.preventDefault();
        ConverBase64(e.target.files, (result) => {
            this.setState({
                img: result.base64
            })
            console.log(this.state)
        })
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
                                        value={this.state.item}
                                        style={{ height: "40px", width: "1108px" }}
                                    >
                                        <option name="Món chay" value="Món chay">Món chay</option>
                                        <option name="Ăn vặt" value="Ăn vặt">Ăn vặt</option>
                                        <option name="Giảm cân" value="Giảm cân">Giảm cân</option>
                                        <option name="Thức uống" value="Thức uống">Thức uống</option>
                                        <option name="Món chính" value="Món chính" >Món chính</option>
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
                                    <textarea rows={10} cols={100} className="form-control" name="content" onChange={this.onChange} value={this.state.content} maxLength={9999} style={{ resize: 'none' }} required />
                                </div>
                            </div>
                            <div className="control-group form-group">
                                <div className="controls">
                                    <input type="file" name="file" id="file" onChange={this.handleFilesImg} />
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