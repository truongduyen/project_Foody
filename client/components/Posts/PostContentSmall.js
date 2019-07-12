import React, { Component } from 'react';

class PostContentSmall extends Component {
    state = {
        items:[],
        id: ''
    }
    getItems() {
        var query = location.search;
        var id = query.substring(4, 6)
        console.log(id)

        fetch('http://localhost:4000/post_id/' + id)
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
                                        <h5 className="card-header">Bình luận: </h5>
                                        <div className="card-body">
                                            <form>
                                                <div className="form-group">
                                                    <textarea className="form-control" rows={3} />
                                                </div>
                                                <button type="submit" className="btn btn-primary">Gửi</button>
                                            </form>
                                        </div>
                                    </div>
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