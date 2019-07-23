import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import PostContentSmall from '../../components/Posts/PostContentSmall';

class Content_Post extends Component {
    render() {
        return (
            <Layout title="Bài viết">
                <PostContentSmall />
            </Layout>
        );
    }
}

export default Content_Post;