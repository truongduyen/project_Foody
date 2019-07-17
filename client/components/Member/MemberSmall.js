import React, { Component } from 'react';

class MemberSmall extends Component {
    state = {
        items: [],
        post:[],
        username: '',
        email: '',
        title: '',
        image: '',
        item: ''
    }
    getItems() {
        fetch('http://localhost:4000/admin', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log("err " + err))
    }
    getPost() {
        console.log(this.state.title)
        fetch('http://localhost:4000/post')
            .then(response => response.json())
            .then(post => {
                this.setState({ post })
            })
            .catch(err => console.log("err " + err))
    }
    setItem = (item) => {
        this.setState({
            username: item.username,
            email: item.email,
            title: item.title
        })
    }
    componentDidMount() {
        this.getPost()
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
                                            <img className="img-fluid d-block mx-auto" src="#" alt="image" />
                                            <h2 className="text-uppercase">{this.state.username}</h2>
                                            <p className="text-muted">{this.state.email}</p>
                                            <h3><p>Các công thức đã đăng</p></h3>
                                            <ul className="list-inline">
                                                <div className="portfolio-link" style={{ margin: '10px' }}>
                                                    <img className="img-fluid" src="#" alt="image" />
                                                </div>
                                                <div className="portfolio-caption">
                                                    <h4>{this.state.title}</h4>
                                                    {/* <p className="text-muted">{this.state.item}</p> */}
                                                </div>
                                            </ul>
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