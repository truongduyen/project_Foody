import React, { Component } from 'react';
import Layout from '../Layout/Layout';

class Post_item extends Component {
    render() {
        return (
            <Layout title="#">
                <section id="services">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/">Trang chủ</a>
                                <a href="/">Công thức</a>
                            </li>
                            <li className="breadcrumb-item active">Công thức</li>
                        </ol>
                        <div className="row">
                            <div className="col-lg-8">
                                <img className="img-fluid rounded" src="http://placehold.it/900x300" alt />
                                <hr />
                                <p>Posted on January 1, 2017 at 12:00 PM</p>
                                <hr />
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>
                                <blockquote className="blockquote">
                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer">Someone famous in
<cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>
                                <hr />
                                {/* Comments Form */}
                                <div className="card my-4">
                                    <h5 className="card-header">Leave a Comment:</h5>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <textarea className="form-control" rows={3} defaultValue={""} />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form> 
                                    </div>
                                </div>
                                {/* Single Comment */}
                                <div className="media mb-4">
                                    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt />
                                    <div className="media-body">
                                        <h5 className="mt-0">Commenter Name</h5>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
                                </div>
                                {/* Comment with nested comments */}
                                <div className="media mb-4">
                                    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt />
                                    <div className="media-body">
                                        <h5 className="mt-0">Commenter Name</h5>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        <div className="media mt-4">
                                            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt />
                                            <div className="media-body">
                                                <h5 className="mt-0">Commenter Name</h5>
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
                                        </div>
                                        <div className="media mt-4">
                                            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt />
                                            <div className="media-body">
                                                <h5 className="mt-0">Commenter Name</h5>
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Sidebar Widgets Column */}
                            <div className="col-md-4">
                                {/* Search Widget */}
                                <div className="card mb-4">
                                    <h5 className="card-header">Search</h5>
                                    <div className="card-body">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search for..." />
                                            <span className="input-group-btn">
                                                <button className="btn btn-secondary" type="button">Go!</button>
                                            </span>
                                        </div>
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
                        {/* /.row */}

                    </div>
                </section>
            </Layout>
        );
    }
}

export default Post_item;