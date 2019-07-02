import React, { Component } from 'react';
import LayoutAdmin from '../components/Layout/LayoutAdmin';

class Edit extends Component {
    state = {
        items: [],
        title: '',
        content: '',
        image: ''
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitFormUpdate = e => {
        e.preventDefault()
        fetch('http://localhost:4000/post/' + this.state.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                content: this.state.content,
                image: this.state.image
            })
        })
            .then(() => {
                alert(`Update thành công bài viết ${this.state.title}`)
                location.reload()
            })
            .catch(err => console.log(err))
    }
    componentDidMount() {
        if (this.props.items) {
            const { title, content } = this.props.items
            this.setState({ title, content })
            console.log(this.props.title)
        }
    }
    render() {
        return (
            <LayoutAdmin>
                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="float-right">
                                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#Modal_Update"><i className="fas fa-pencil-alt">Sửa bài viết</i></button>
                                </div>
                            </div>
                        </div>
                        <form className="modal fade" id="Modal_Update" method="POST" onSubmit={this.submitFormUpdate} >
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Chỉnh sửa bài viết</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="control-group form-group">
                                            <div className="controls">
                                                <label>Tiêu đề: </label>
                                                <input type="text" className="form-control" name="title" onChange={this.onChange} value={this.state.title} required autoFocus />
                                            </div>
                                        </div>
                                        <div className="control-group form-group">
                                            <div className="controls">
                                                <label>Nội dung:</label>
                                                <input rows={10} cols={100} className="form-control" name="content" onChange={this.onChange} value={this.state.content} required maxLength={999} style={{ resize: 'none' }} />
                                            </div>
                                        </div>
                                        <div className="control-group form-group">
                                            <div className="controls">
                                                <input type="file" name="images" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <a type="button" className="btn btn default" data-dismiss="modal">Hủy bỏ</a>
                                        <button type="submit" className="btn btn-primary">Đăng bài viết</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </LayoutAdmin>
        );
    }
}

export default Edit;