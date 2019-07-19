import React, { Component } from 'react';

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
        // email_answer: ''
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
        fetch('http://localhost:4000/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content_cmt: this.state.content_cmt,
                cmt_email: this.state.email,
                post_id: this.state.id_post,
                name: this.state.username
            })
        })
            .then(() => {
                alert("Bình luận thành công")
                location.reload()
            })
            .catch(err => console.log(err))
    }
    //answer comment
    // submitAddCommentAnswer = e => {
    //     console.log(id_post)
    //     e.preventDefault()
    //     fetch('http://localhost:4000/comment_answer/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             content_cmt: this.state.content_cmt,
    //             cmt_email: this.state.cmt_email,
    //             post_id: this.state.id_post,
    //             name: this.state.username,
    //             email_answer: this.state.email
    //         })
    //     })
    //         .then(() => {
    //             alert("Trả lời bình luận thành công")
    //             location.reload()
    //         })
    //         .catch(err => console.log(err))
    // }

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
            username: info.username
        })
    }
    displayActionCmt = (item) => {
        let { email } = this.state;
        if (email === item.cmt_email) {
            return (
                <div>
                    <a href="" onClick={() => this.deleteCmt(item.id_cmt)}>Xóa</a>
                    &nbsp; &nbsp;&nbsp;
                    <a href="">Chỉnh sửa</a>
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
                                    <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="image" />
                                    <hr />
                                    <p>Đăng ngày: {post.createdAt}</p>
                                    <hr />
                                    <p>{post.content}</p>
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
                                                        <img className="d-flex mr-3 rounded-circle itemer" src="http://placehold.it/50x50" alt="image" />
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
                                                    <img className="d-flex mr-3 rounded-circle itemer" src="http://placehold.it/50x50" alt="image" />
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
                                        {/* <form className="media mt-4 cmt" id="answer" style={{ paddingLeft: "80px" }}>
                                            {this.state.cmt.map((cmt, key) =>
                                                <div className="media-body form-inline" key={key}>
                                                    <img className="d-flex mr-3 rounded-circle itemer" src="http://placehold.it/50x50" alt="image" />
                                                    <div>
                                                        <b><a className="mt-0">{this.state.username}</a></b><br />
                                                        <div className="form-inline">
                                                            <textarea rows={2} style={{ width: "495px" }} name="content_cmt" onChange={this.onChange} value={this.state.content_cmt} onClick={() => this.getIDcmt(cmt.id_cmt)}/> &nbsp;
                                                            <button type="submit" className="btn btn-primary"><i className="fas fa-paper-plane"></i></button>
                                                        </div>
                                                        <div className="text-muted float-left">
                                                            {this.displayActionCmt(cmt)}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </form> */}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <h5 className="card-header">Bài viết khác</h5>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-12 cmt ">
                                                    {this.state.post.map((post, key) =>
                                                        <div className="teamsmall form-inline" key={key} style={{ marginRight: "auto" }}>
                                                            <img className="mx-auto rounded-circle" src="/static/images/member.jpg" alt="image" onClick={() => this.getID(post.id_post)} />
                                                            <div className="title_post" onClick={() => this.getID(post.id_post)}>{post.title}</div>
                                                        </div>
                                                    )}
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