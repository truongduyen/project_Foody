import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import PostContentSmall from '../../components/Posts/PostContentSmall';

class Content_Post extends Component {
    state = {
        id: ''
    }
    getItems() {
        var query = location.search;
        var id = query.substring(4, 6)
        console.log(id)

        fetch('http://localhost:4000/post/id' + id)
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log("err " + err))
    }
    componentDidMount() {
        this.getItems('')

    }
    render() {
        return (
            <Layout title="bài viết">
                <PostContentSmall />
            </Layout>
        );
    }
}

export default Content_Post;