import React, { Component } from 'react';

class MemberSmall extends Component {
    state = {
        items: [],
        post: [],
        email:''
    }
    getItems() {
        fetch('http://localhost:4000/admin')
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log("err " + err))
    }
    setItem = (item) => {
        this.setState({
            username: item.username,
            email: item.email
        }, () =>  this.getPost(''))
    }
    getPost(keyword) {
        let url = 'http://localhost:4000/post_user/' + this.state.email
        if (keyword !== null) {
            url = url + "?keyword" + keyword;
        }   
        fetch(url)
            .then(response => response.json())
            .then(post => this.setState({ post }))
            .catch(err => console.log("err " + err))
    }
    componentDidMount() {
        this.getItems()
       
    }
    render() {
        return (
            <div className="container">
                <div className="show">
                    {this.state.items.map((item, key) =>
                        <div className="team" key={key}>
                            <div><img className="mx-auto rounded-circle" data-toggle="modal" href="#portfolioModal" onClick={() => this.setItem(item)} src="/static/images/member1.jpg" alt="image" /></div>
                            <h6>{item.username}</h6>
                        </div>
                    )}
                </div>
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
                                            <img className="img-fluid d-block mx-auto" src="/static/images/member.jpg" alt="image" style={{ width: "250px", height: "250px" }} />
                                            <h2 className="text-uppercase">{this.state.username}</h2>
                                            <p className="text-muted">{this.state.email}</p>
                                            <h3><p>Các công thức đã đăng</p></h3>
                                            <div className="form-inline showitem row">
                                                {this.state.post.map((post, key) =>
                                                    <div className="menu_item" key={key}>
                                                        <div className="portfolio-link" style={{ margin: '10px' }}>
                                                            <img className="img-fluid" src="/static/images/suachua.jpg" alt="image" />
                                                        </div>
                                                        <div className="portfolio-caption">
                                                            <h4>{post.title}</h4>
                                                            <p className="text-muted">{post.item}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <button className="btn btn-primary" data-dismiss="modal" type="button">Đóng</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default MemberSmall;