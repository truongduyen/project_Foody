import React, { Component } from 'react';
import Layout from '../Layout/Layout';

class Blog extends Component {
    render() {
        return (
            <Layout title="Blog">
                <section id="services">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Trang chủ</a>
                            </li>
                            <li className="breadcrumb-item active">Blog</li>
                        </ol>
                        <div className="row">
                            <div className="col-md-8">
                                {/* Blog Post */}
                                <div className="card mb-4">
                                    <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap" />
                                    <div className="card-body">
                                        <h2 className="card-title"><a href="">Post Title</a></h2>
                                        <p className="card-text">Lorem ipsum dolonporis animi vero vssimus, veniam magni quis!</p>
                                    </div>
                                    <div className="card-footer text-muted">
                                        Posted on January 1, 2017 by
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Widgets Column */}
                            <div className="col-md-4">
                                {/* Search Widget */}
                                <div className="mb-3">
                                    <div className="search-container"> 
                                        <form action="/sss">
                                            <input type="text" placeholder="Nội dung..." name="search" />
                                            <button type="submit"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>

                                {/* Categories Widget */}
                                <div className="card my-4">
                                <h5 className="card-header">Categories</h5>
                                <div className="card-body">
                                    <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#">Web Design</a>
                                        </li>
                                        <li>
                                            <a href="#">HTML</a>
                                        </li>
                                        <li>
                                            <a href="#">Freebies</a>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#">JavaScript</a>
                                        </li>
                                        <li>
                                            <a href="#">CSS</a>
                                        </li>
                                        <li>
                                            <a href="#">Tutorials</a>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                {/* Side Widget */}
                                <div className="card my-4">
                                <h5 className="card-header">Side Widget</h5>
                                <div className="card-body">
                                    You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                                </div>
                                </div>
                            </div>
                            </div>



                            <h3 className="my-4">Related Projects</h3>
                            <div className="row">
                                <div className="col-lg-6 portfolio-item">
                                    <div className="card h-100">
                                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                                    <div className="card-body">
                                        <h4 className="card-title">
                                        <a href="#">Project One</a>
                                        </h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 portfolio-item">
                                    <div className="card h-100">
                                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                                    <div className="card-body">
                                        <h4 className="card-title">
                                        <a href="#">Project Two</a>
                                        </h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquam aperiam nulla perferendis dolor nobis numquam, rem expedita, aliquid optio, alias illum eaque. Non magni, voluptates quae, necessitatibus unde temporibus.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 portfolio-item">
                                    <div className="card h-100">
                                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                                    <div className="card-body">
                                        <h4 className="card-title">
                                        <a href="#">Project One</a>
                                        </h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 portfolio-item">
                                    <div className="card h-100">
                                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                                    <div className="card-body">
                                        <h4 className="card-title">
                                        <a href="#">Project Two</a>
                                        </h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquam aperiam nulla perferendis dolor nobis numquam, rem expedita, aliquid optio, alias illum eaque. Non magni, voluptates quae, necessitatibus unde temporibus.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pagination */}
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
            </Layout>
        );
    }
}

export default Blog;