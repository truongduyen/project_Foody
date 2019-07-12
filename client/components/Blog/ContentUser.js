import React, { Component } from 'react';
import Item_Blogsmall from './Item_Blogsmall';

class ContentUser extends Component {
    render() {
        return (
            <section id="services">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item active">Blog</li>
                    </ol>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <img className="card-img-top" src="/static/images/mangcut.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h2 className="card-title"><a href="/blog/blog_user">9 loại trái cây mùa hè đặc sản Việt Nam nhất định phải thưởng thức ngay kẻo lỡ</a></h2>
                                    <p className="card-text">Ngày đăng: 03/06/2019</p>
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
                            <div className="card my-4">

                            </div>
                            <div className="card my-4">

                            </div>
                        </div>
                    </div>
                    <h3 className="my-4">Tin nổi bật</h3>
                    <div className="row">
                        <Item_Blogsmall link="/blog/item_bloguser" />
                    </div>
                    <ul class="pagination justify-content-center">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default ContentUser;