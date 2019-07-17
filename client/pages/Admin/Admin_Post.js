import React, { Component } from 'react';
import LayoutAdmin from '../../components/Layout/LayoutAdmin';
var dateFormat = require('dateformat');
import { TablePagination } from 'react-pagination-table'

class Admin_Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            items: [],
            id_post: '',
            title: '',
            content: '',
            image: '',
            item: '',
            user_email: '',
            email: ''
        }
    }
    onSearch = (e) => {
        e.preventDefault();
        this.getItems(this.state.keyword)
    }
    getItems(keyword) {
        var url = 'http://localhost:4000/post'
        if (keyword !== null) {
            url = url + '?keyword=' + keyword;
        }
        fetch(url)
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log("err " + err))
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    setUpdateItem = (post) => {
        this.setState({
            id_post: post.id_post,
            title: post.title,
            content: post.content,
            item: post.item,
            // user_email: post.email
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
    deleteItems = id_post => {
        let confirmDelete = window.confirm('Xóa bài viết này?')
        if (confirmDelete) {
            // console.log(id)
            fetch('http://localhost:4000/post', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id_post
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
                id_post: this.state.id_post,
                title: this.state.title,
                content: this.state.content,
                image: this.state.image,
                item: this.state.item
            })
        })
            .then((dt) => {
                console.log(dt)
                alert(`Cập nhật thành công bài viết ${this.state.title}`)
                location.reload()
            })
            .catch(err => console.log(err))
    }
    componentDidMount() {
        this.getItems('')
        const info = JSON.parse(localStorage.getItem("username"))
        this.setState({
            email: info.email
        })
    }
    actions = (post) => {
        return (
            <div className="btn">
                <a className="btn btn-info" data-toggle="modal" data-target="#Modal_Update" onClick={() => this.setUpdateItem(post)}><i className="fas fa-edit"></i></a>
                <a name="btnDelete" className="btn btn-danger" onClick={() => this.deleteItems(post.id_post)}><i className="fas fa-trash" /></a>
            </div>
        )
    }
    render() {
        const Header = ["ID", "Mục", "Tiêu đề", "Nội dung", "Người đăng", "Ngày đăng bài", " "];
        let { items } = this.state;
        items = items.map(post => {
            return {
                ...post,
                actions: this.actions(post)
            }
        })
        // console.log(this.state)
        return (
            <LayoutAdmin title="Quản lý bài viết">
                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-inline float-right">
                                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#Modal_Add"><i className="fas fa-pencil-alt">Thêm bài viết</i></button>
                                    &nbsp;
                                    <div className="search-container">
                                        <form className="search">
                                            <input type="text" placeholder="Nội dung..." id="keyword" name="keyword" onChange={this.onChange} />
                                            <button type="submit" onClick={this.onSearch}><i className="fas fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h4>Danh sách bài viết</h4>
                                <div className="records_content">
                                    <TablePagination
                                        headers={Header}
                                        data={items}
                                        columns="id_post.item.title.content.user_email.createdAt.actions"
                                        perPageItemCount={5}
                                        totalCount={50}
                                    />
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
                                                <label>Mục: </label><br />
                                                <select className="item_post" name="item"
                                                    onChange={this.onChange}
                                                    value={this.state.item}
                                                    style={{ height: "40px", width: "760px" }}
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
                                                <label>Mục: </label><br />
                                                <select className="item_post" name="item"
                                                    onChange={this.onChange}
                                                    value={this.state.item}
                                                    defaultValue={this.state.item}
                                                    style={{ height: "40px", width: "760px" }}
                                                >
                                                    <option name="Món chay">Món chay</option>
                                                    <option name="Ăn vặt">Ăn vặt</option>
                                                    <option name="Giảm cân">Giảm cân</option>
                                                    <option name="Thức uống">Thức uống</option>
                                                    <option name="Món chính" selected>Món chính</option>
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
                                                <textarea rows={10} cols={100} className="form-control" name="content" onChange={this.onChange} value={this.state.content} required maxLength={999} style={{ resize: 'none' }} />
                                            </div>
                                        </div>
                                        <div className="control-group form-group">
                                            <div className="controls">
                                                <input type="file" onChange={this.onChange} value={this.state.image} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <a type="button" className="btn btn default" data-dismiss="modal">Hủy bỏ</a>
                                        <button type="submit" className="btn btn-primary">Cập nhật bài viết</button>
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