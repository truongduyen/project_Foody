import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import Nav_User from './Nav_User';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            items: [],
            user_email: '',
            email: ''
        }
    }
    onSearch = (e) => {
        e.preventDefault();
        this.getItems(this.state.keyword)
    }
    getItems(keyword) {
        // console.log(this.state.email)
        let url = 'http://localhost:4000/post/' + this.state.email
        if (keyword !== null) {
            url = url + "?keyword" + keyword;
        }
        fetch(url)
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log("err " + err))
    }
    componentDidMount() {
        const info = JSON.parse(localStorage.getItem("username"))
        this.setState({
            email: info.email
        }, () => this.getItems(''))
    }
    render() {
        return (
            <LayoutUser title="Trang cá nhân">
                <Nav_User />
                <div className="content">
                    <div className="container">
                        <div className="post" id="portfolio">
                            <div className="portfolio-item showpost">
                                {this.state.items.map((post, key) =>
                                    <div className="portfolio-link" key={key} style={{ margin: '10px' }}>
                                        <img className="img-fluid" src="/static/images/nammo.jpg" alt />
                                        <div className="portfolio-caption"><a href="/"><h4>{post.title}</h4></a>
                                            <p className="text-muted">{post.item}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </LayoutUser>
        );
    }
}
export default Page;