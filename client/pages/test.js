import React, { Component } from 'react';

class test extends Component {
    add(){
        
    }
    render() {
        return (
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
                        <input type="file" name="images" />
                    </div>
                </div>
                <div id="success" />
                <a type="button" className="btn btn default" href='#'>Hủy bỏ</a>
                <button type="submit" className="btn btn-primary">Đăng bài viết</button>
            </form>
        );
    }
}   

export default test;