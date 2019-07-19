import React, { Component } from 'react';

class PostContentSmall extends Component {
    state = {
        items: [],
        post: [],
        cmt: [],
        id_post: '',
        content_cmt: '',
        name: '',
        cmt_email: '',
        post_id: '',
        test:''
    }
    //comment
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    getPost() {
        fetch('http://localhost:4000/post')
            .then(response => response.json())
            .then(post => this.setState({ post }))
            .catch(err => console.log("err " + err))
    }
    getID = id_post => {
        console.log(id_post)
        window.location.href = ("/posts/content_post?id=" + id_post)
    }
    // get db theo id post
    getItems() {
        var query = location.search;
        var id_post = query.substring(4, 6)
        console.log(id_post)

        fetch('http://localhost:4000/post_id/' + id_post)
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log("err " + err))
    }
    getComment() {
        var query = location.search;
        var id_post = query.substring(4, 6)
        fetch('http://localhost:4000/comment/' + id_post)
            .then(response => response.json())
            .then(cmt => this.setState({ cmt }))
            .catch(err => console.log("err " + err))
    }
    onClick = (c) =>{
        c.preventDefault()
    }
    componentDidMount() {
        this.getItems('')
        this.getPost()
        this.getComment()
    }
    render() {
        return (
            <section id="services">
                <div className="content">
                    {this.state.items.map((post, key) =>
                        <div className="container" key={key}>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">Trang chủ</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="/posts">Công thức</a>
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
                                    <div className="card my-4">
                                        <h5 className="card-header">Bình luận:</h5>
                                        <div className="card-body">
                                            <form className="comment">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="test" onChange={this.onChange}/>
                                                    {this.state.test !==""?"Vui lòng đăng nhập trước khi bình luận":""}
                                                </div>
                                                <button className="btn btn-primary" onClick={this.onClick}>Gửi</button>
                                            </form>
                                        </div>
                                    </div>
                                    <form className="media mb-4 cmt">
                                        {this.state.cmt.map((cmt, key) =>
                                            <div className="media-body form-inline" key={key}>
                                                <img className="d-flex mr-3 rounded-circle itemer" src="http://placehold.it/50x50" alt="image" />
                                                <div>
                                                    <b><a className="mt-0">{cmt.name}</a></b><br />
                                                    <a className="">{cmt.content_cmt}</a>
                                                </div>
                                            </div>
                                        )}
                                    </form>
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

export default PostContentSmall;