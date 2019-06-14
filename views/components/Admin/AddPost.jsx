import React, { Component } from 'react';
import LayoutAdmin from '../Layout/LayoutAdmin';

class AddPost extends Component {
    render() {
        return (
            <LayoutAdmin>
                <section id="services">
                    <div className="container">z
                        <div className="row">
                            <div className="col-md-11">
                                <h4>Thêm mới bài viết</h4>
                            </div>
                            <form name="sentMessage" id="contactForm" method="POST" noValidate>
                                <div className="control-group form-group">
                                    <div className="controls">
                                        <label>Tiêu đề: </label>
                                        <textarea type="text" className="form-control" name="title" required data-validation-required-message="Vui lòng nhập tên" />
                                        <p className="help-block" />
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
                                        <input type="file" name="images" />
                                    </div>
                                </div>
                                <div id="success" />
                                <a type="button" className="btn btn default" href='#'>Hủy bỏ</a>
                                <button type="submit" className="btn btn-primary" id="sendMessageButton">Đăng bài viết</button>
                            </form>
                        </div>
                    </div>
                </section>
            </LayoutAdmin>
        );
    }
}

export default AddPost;