import React, { Component } from 'react';
import LayoutAdmin from '../../components/Layout/LayoutAdmin';
var dateFormat = require('dateformat');

class Admin_Post extends Component {
    state = {
        items: [],
        id:'',
        title: '',
        content: '',
        image: '',
    }
    getItems() {
        fetch('http://localhost:4000/post', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log("err " + err))
    }
    onChange = e => { this.setState({ [e.target.name]: e.target.value})
    }

    setUpdateItem = (post) => {
        this.setState({ 
            id: post.id,
            title: post.title,
            content: post.content
        })
    }
    submitFormAdd = e => {
        e.preventDefault()
        // console.log(this.state.content)
        fetch('http://localhost:4000/post', {
            method: 'POST',
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
                alert(`Đăng bài viết thành công`)
                location.reload()
            })
            .catch(err => console.log(err))
    }
    deleteItems = id => {
        let confirmDelete = window.confirm('Xóa bài viết này?')
        if (confirmDelete) {
            // console.log(id)
            fetch('http://localhost:4000/post', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id
                })
            })
                .then(() => {
                    alert("Xóa bài viết thành công")
                    location.reload()

                })
                .catch(err => console.log(err))
        }
    }
    submitFormUpdate = e => {
        e.preventDefault()
        console.log(this.state.content)
        fetch('http://localhost:4000/post', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id, 
                title: this.state.title,
                content: this.state.content,
                image: this.state.image
            })
        })
            .then((dt) => {
                console.log(dt)
                alert(`Update thành công bài viết ${this.state.title}`)
                location.reload()
            })
            .catch(err => console.log(err))
    }
    componentDidMount() {
        this.getItems()

        if (this.props.items) {
            const { title, content} = this.props.items
            this.setState({ title, content})
            console.log(this.props.title)
        }
    }    
    render() {
        // console.log(this.state)
        return (
            <LayoutAdmin title="Quản lý bài viết">
                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="float-right">
                                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#Modal_Add"><i className="fas fa-pencil-alt">Thêm bài viết</i></button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h4>Danh sách bài viết</h4>
                                <div className="records_content">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Tiêu đề</th>
                                                <th>Nội dung</th>
                                                <th>Người đăng</th>
                                                <th>Ngày nhập</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.items.map(post =>
                                                <tr key={post.id}>
                                                    <th scope="row">{post.id}</th>
                                                    <td>{post.title}</td>
                                                    <td>{post.content}</td>
                                                    <td>{post.user_id}</td>
                                                    <td>{dateFormat(post.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
                                                    <td>
                                                        <a className="btn btn-info" data-toggle="modal" data-target="#Modal_Update" onClick={() => this.setUpdateItem(post)}><i className="fas fa-edit"></i></a>                                                     
                                                        <a name="btnDelete" className="btn btn-danger" onClick={() => this.deleteItems(post.id)}><i className="fas fa-trash" /></a>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <form className="modal fade" id="Modal_Add" method="POST" onSubmit={this.submitFormAdd} >
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Thêm mới bài viết</h4>
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
                                                <textarea rows={10} cols={100} className="form-control" name="content" onChange={this.onChange} value={this.state.content} maxLength={999} style={{ resize: 'none' }} required />
                                            </div>
                                        </div>
                                        <div className="control-group form-group">
                                            <div className="controls">
                                                <input type="file" name="image" onChange={this.onChange} value={this.state.image} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <a type="button" className="btn btn default" data-dismiss="modal">Hủy bỏ</a>
                                        <button type="submit" className="btn btn-success" >Đăng bài viết</button>
                                    </div>
                                </div>
                            </div>
                        </form>
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
                                                <textarea rows={10} cols={100} className="form-control" name="content" onChange={this.onChange} value={this.state.content} required maxLength={999} style={{ resize: 'none' }} />
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

export default Admin_Post;