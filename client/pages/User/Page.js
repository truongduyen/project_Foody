import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import Nav_User from './Nav_User';
import PostSmall from '../../components/Posts/PostSmall';

class Page extends Component {
    state = {
        items: []
    }
    getItems() {
        fetch('http://localhost:4000/post', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log("err " + err))
    }
    componentDidMount() {
        this.getItems()
        // console.log(this.state.items)
    }
    render() {
        return (
            <LayoutUser title="Trang cá nhân">
                <Nav_User />
                <div className="content">
                    <div className="container">
                        <div className="post" id="portfolio">
                            <div className="row">
                                <PostSmall href="/static/images/thitheo.jpg">Thịt heo xào tiêu</PostSmall>
                                <PostSmall href="/static/images/thitheo.jpg">Thịt heo xào tiêu</PostSmall>
                                <PostSmall href="/static/images/thitheo.jpg">Thịt heo xào tiêu</PostSmall>
                                <PostSmall href="/static/images/thitheo.jpg">Thịt heo xào tiêu</PostSmall>
                                <PostSmall href="/static/images/thitheo.jpg">Thịt heo xào tiêu</PostSmall>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutUser>
        );
    }
}
export default Page;