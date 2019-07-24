import React, { Component } from 'react';
var dateFormat = require('dateformat');

class PostContentSmallUser extends Component {
    state = {
        items: [],
        post: [],
        cmt: [],
        id_cmt: '',
        id_post: '',
        content_cmt: '',
        name: '',
        cmt_email: '',
        post_id: '',
        img: ''
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log(this.state)
    }
    getPost() {
        fetch('http://localhost:4000/post')
            .then(response => response.json())
            .then(post => this.setState({ post }))
            .catch(err => console.log("err " + err))
    }
    //get post theo id
    getItems() {
        var query = location.search;
        var id_post = query.substring(4, 6)
        this.setState({ id_post });
        // console.log(id_post)
        fetch('http://localhost:4000/post_id/' + id_post)
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log("err " + err))
    }
    //get cmt con
    // getCmt() {
    //     // console.log(id_cmt)
    //     fetch('http://localhost:4000/comment_answer')
    //         .then(response => response.json())
    //         .then(cmt => this.setState({ cmt }))
    //         .catch(err => console.log("err " + err))
    // }
    // getIDcmt = id_cmt => {
    //     console.log(id_cmt)
    // }

    //menu con
    getID = id_post => {
        console.log(id_post)
        window.location.href = ("/posts/content_postuser?id=" + id_post)
    }
    //add comment
    submitAddComment = e => {
        e.preventDefault()
        // console.log(this.state.content_cmt)
        const info = JSON.parse(localStorage.getItem("username"))
        fetch('http://localhost:4000/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content_cmt: this.state.content_cmt,
                cmt_email: this.state.email,
                post_id: this.state.id_post,
                name: this.state.username,
                img: info.images
            })
        })
            .then(() => {
                alert("Bình luận thành công")
                location.reload()
            })
            .catch(err => console.log(err))
    }
    //update comment
    setUpdateCmt = id_cmt => {
        // console.log(id_cmt)
        this.setState({ id_cmt })
        fetch('http://localhost:4000/comment_update/' + id_cmt)
            .then(response => response.json())
            .then(cmt => {
                console.log(cmt[0].content_cmt)
                this.setState({ content_cmt: cmt[0].content_cmt })
            })
            .catch(err => console.log("err " + err))
    }
    submitFormUpdate = e => {
        e.preventDefault()
        // console.log(this.state.id_cmt)
        fetch('http://localhost:4000/comment_update/' + this.state.id_cmt, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // id_cmt: this.state.id_cmt,
                content_cmt: this.state.content_cmt
            })
        })
            .then((dt) => {
                alert(`Chỉnh sửa bình luận thành công`)
                location.reload()
            })
            .catch(err => console.log(err))
    }
    // get comment
    getComment() {
        var query = location.search;
        var id_post = query.substring(4, 6)
        fetch('http://localhost:4000/comment/' + id_post)
            .then(response => response.json())
            .then(cmt => this.setState({ cmt }))
            .catch(err => console.log("err " + err))
    }
    deleteCmt = id_cmt => {
        let confirmDelete = window.confirm('Xóa bình luận này?')
        console.log(id_cmt)
        if (confirmDelete) {
            // console.log(id)
            fetch('http://localhost:4000/comment', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id_cmt
                })
            })
                .then(() => {
                    // alert("Xóa bình luận thành công")
                    location.reload()
                })
                .catch(err => console.log(err))
        }
    }
    componentDidMount() {
        this.getItems('')
        this.getPost()
        this.getComment()
        // this.getCmt()
        const info = JSON.parse(localStorage.getItem("username"))
        this.setState({
            email: info.email,
            username: info.username,
            images: info.images
        })
    }
    displayActionCmt = (item) => {
        let { email } = this.state;
        if (email === item.cmt_email) {
            return (
                <div>
                    <a href="" onClick={() => this.deleteCmt(item.id_cmt)}>Xóa</a>
                    &nbsp; &nbsp;&nbsp;
                    <a href="" data-toggle="modal" data-target="#Modal_Update" onClick={() => this.setUpdateCmt(item.id_cmt)}>Chỉnh sửa</a>
                </div>
            )
        }
    }
    render() {
        return (
            <section id="services">
                <div className="content">
                    {this.state.items.map((post, key) =>
                        <div className="container" key={key}>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/user">Trang chủ</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="/user/post_user">Công thức</a>
                                </li>
                                <li className="breadcrumb-item active">{post.title}</li>
                            </ol>
                            <div className="row">
                                <div className="col-lg-8">
                                    <img className="img-fluid rounded" src={post.image !== null ? post.image : "http://placehold.it/900x300"} alt="image" style={{ width: "900px", height: "400px" }} />
                                    <hr />
                                    <p>Đăng ngày: {dateFormat(post.createdAt, "isoDate")}</p>
                                    <hr />
                                    <h2 className="text-uppercase row">{post.title}</h2>
                                    {post.content.split("\n").map(function (item, key) {
                                        return (
                                            <div key={key}>{item}</div>
                                        )
                                    })
                                    }
                                    <blockquote className="blockquote">
                                        <footer className="blockquote-footer">Người đăng:
                                    <cite title="Source Title">{post.user_email}</cite>
                                        </footer>
                                    </blockquote>
                                    <hr />
                                    <div className=" card my-4">
                                        <h5 className="card-header">Bình luận:</h5>
                                        <div className="card-body">
                                            <form className="comment" method="POST" onSubmit={this.submitAddComment}>
                                                <div className="media mb-2">
                                                    <div className="media-body form-inline">
                                                        <img className="d-flex mr-3 rounded-circle itemer" src={this.state.images !== null ? this.state.images : "https://ssl.gstatic.com/accounts/ui/avatar_2x.png"} alt="image" />
                                                        <b><a className="mt-0">{this.state.username}</a></b>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <textarea className="form-control" name="content_cmt" onChange={this.onChange} value={this.state.content_cmt} />
                                                </div>
                                                <button type="submit" className="btn btn-primary">Gửi</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="comment">
                                        <form className="media mb-4 cmt">
                                            {this.state.cmt.map((cmt, key) =>
                                                <div className="media-body form-inline" key={key}>
                                                    <img className="d-flex mr-3 rounded-circle itemer" src={cmt.img !== null ? cmt.img : "https://ssl.gstatic.com/accounts/ui/avatar_2x.png"} alt="image" />
                                                    <div>
                                                        <b><a className="mt-0">{cmt.name}</a></b><br />
                                                        <a>{cmt.content_cmt}</a><br />
                                                        <div className="text-muted float-left form-inline">
                                                            {this.displayActionCmt(cmt)}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </form>
                                    </div>
                                    <form className="modal fade" id="Modal_Update" method="POST" onSubmit={this.submitFormUpdate} >
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Chỉnh sửa bình luận</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="control-group form-group">
                                                        <div className="controls">
                                                            <label>Nội dung: </label>
                                                            <input type="text" className="form-control" name="content_cmt" onChange={this.onChange} value={this.state.content_cmt} required autoFocus />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <a type="button" className="btn btn default" data-dismiss="modal">Hủy bỏ</a>
                                                    <button type="submit" className="btn btn-success">Chỉnh sửa</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <h5 className="card-header">Bài viết khác</h5>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-12 cmt ">
                                                    {this.state.post.map((post, key) => {
                                                        if (key < 5) {
                                                            return (
                                                                <div className="teamsmall form-inline" key={key} style={{ marginRight: "auto" }}>
                                                                <img className="mx-auto rounded-circle" src={post.image !== null ? post.image : "https://ssl.gstatic.com/50x50"} alt="image" onClick={() => this.getID(post.id_post)} />
                                                                <div className="title_post" onClick={() => this.getID(post.id_post)}>{post.title}</div>
                                                            </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export default PostContentSmallUser;