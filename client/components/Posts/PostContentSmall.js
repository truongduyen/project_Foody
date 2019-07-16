import React, { Component } from 'react';

class PostContentSmall extends Component {
    state = {
        items: [],
        cmt:[],
        id_post:'',
        content_cmt: '',
        user_id: '',
        post_id: ''
    }
    //comment
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
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
    componentDidMount() {
        this.getItems('')
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
                                            <form className="comment" method="POST" >
                                                <div className="form-group">
                                                    <textarea className="form-control" value={}/>

                                                </div>
                                                <button type="submit" className="btn btn-primary" >Gửi</button>
                                            </form>
                                        </div>
                                    </div>
                                    {/* <form className="media mb-4">
                                        <img className="d-flex mr-3 rounded-circle itemer" src="http://placehold.it/50x50" alt="" />
                                        <div className="media-body">
                                            <a className="mt-0">{this.state.username}</a>
                                            {this.state.content}
                                        </div>
                                    </form> */}
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <div className="search-container">
                                            <form action="/sss">
                                                <input type="text" placeholder="Nội dung..." name="search" />
                                                <button type="submit"><i className="fa fa-search"></i></button>
                                            </form>
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