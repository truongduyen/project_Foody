import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import Nav_User from './Nav_User';

// localStorage.setItem("username", email)
// console.log(localStorage.getItem("username"));

class AddPost extends Component {
    render() {
        return (
            <LayoutUser title="Đăng bài viết">
                <Nav_User />
                <div className="content">
                    <div className="container">
                        <h3>Đăng bài viết mới</h3><br />
                        <form className="form-info" method="POST" noValidate>
                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Tiêu đề: </label>
                                    <textarea type="text" className="form-control" name="title" required data-validation-required-message="Vui lòng nhập tên" />
                                </div>
                            </div>
                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Nội dung:</label>
                                    <textarea rows={10} cols={100} className="form-control" name="content" required data-validation-required-message="Vui lòng nhập nội dung" maxLength={999} style={{ resize: 'none' }} defaultValue={""} />
                                </div>
                            </div>
                            <div className="control-group form-group">
                                <div className="controls">
                                    <input type="file" value="Chọn ảnh" />
                                </div>
                            </div>
                            <div id="success" />
                            <a type="button" className="btn btn default" >Hủy bỏ</a>
                            <button type="submit" className="btn btn-primary" >Đăng bài viết</button>
                        </form>
                    </div>
                </div>
            </LayoutUser>
        );
    }
}
export default AddPost;