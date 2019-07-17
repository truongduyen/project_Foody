import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import Nav_User from './Nav_User';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            items: [],
            user_email: '',
            email: ''
        }
    }
    onSearch = (e) => {
        e.preventDefault();
        this.getItems(this.state.keyword)
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
    getItems(keyword) {
        // console.log(this.state.email)
        let url = 'http://localhost:4000/post/' + this.state.email
        if (keyword !== null) {
            url = url + "?keyword" + keyword;
        }
        fetch(url)
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log("err " + err))
    }
    setPostItem = (post) => {
        this.setState({
            id_post: post.id_post,
            title: post.title,
            content: post.content,
            item: post.item,
            user_email: post.user_email,
            createdAt: post.createdAt
        })
        
    }
    submitFormUpdate = e => {
        e.preventDefault()
        // console.log(this.state.content)
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
    componentDidMount() {
        const info = JSON.parse(localStorage.getItem("username"))
        this.setState({
            email: info.email
        }, () => this.getItems(''))
    }
    render() {
        return (
            <LayoutUser title="Trang cá nhân">
                <Nav_User />
                <div className="content">
                    <div className="container">
                        <div className="post" id="portfolio">
                            <div className="portfolio-item showpost">
                                {this.state.items.map((post, key) =>
                                    <div className="item" key={key}>
                                        <div className="portfolio-link" data-toggle="modal" href="#portfolioModal" onClick = {()=>this.setPostItem(post)} style={{ margin: '10px' }}>
                                            <div className="portfolio-hover">
                                                <div className="portfolio-hover-content">
                                                    <i className="fas fa-plus fa-3x"></i>
                                                </div>
                                            </div>
                                            <img className="img-fluid" src="/static/images/suachua.jpg" alt="image" />
                                        </div>
                                        <div className="portfolio-caption">
                                            <h4>{post.title}</h4>
                                            <p className="text-muted">{post.item}</p>
                                        </div>
                                        <div className="button_post row">
                                            <a className="btn btn-success" data-toggle="modal" data-target="#Modal_Update" onClick={() => this.setUpdateItem(post)}><i className="fas fa-edit"></i></a>
                                            <a name="btnDelete" className="btn btn-danger" onClick={() => this.deleteItems(post.id_post)}><i className="fas fa-trash" /></a>
                                        </div>
                                    </div>
                                )}
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
                        <form className="portfolio-modal modal fade" id="portfolioModal" tabIndex="-1" role="dialog" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="close-modal" data-dismiss="modal">
                                        <div className="lr">
                                            <div className="rl" />
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8 mx-auto">
                                                <div className="modal-body">
                                                    <h2 className="text-uppercase">{this.state.title}</h2>
                                                    <h3><p className="text-muted">{this.state.item}</p></h3>
                                                    <img className="img-fluid d-block mx-auto" src="#" alt="image" />
                                                    <p>{this.state.content}</p>
                                                    <ul className="list-inline">
                                                        <li>Ngày đăng: {this.state.createdAt}</li>
                                                        <li>Người đăng: {this.state.user_email}</li>
                                                    </ul>
                                                    <button className="btn btn-primary" data-dismiss="modal" type="button">Đóng bài viết</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </LayoutUser>
        );
    }
}
export default Page;