import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <section id="services">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/posts">Blog</a>
                        </li>
                        <li className="breadcrumb-item active">Công thức</li>
                    </ol>
                    <div className="row">
                        <div className="col-lg-8">
                            <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="image" />
                            <hr />
                            <p>Posted on: {}</p>
                            <hr />
                            <p>noidung</p>
                            <blockquote className="blockquote">
                                <footer className="blockquote-footer">Người đăng:
                                    <cite title="Source Title">{}</cite>
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
            </section>
        );
    }
}

export default Item;