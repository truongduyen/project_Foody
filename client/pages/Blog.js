import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import Content from '../components/Blog/Content';

class Blog extends Component {
    render() {
        return (
            <Layout title="Blog">
                <Content/>
            </Layout>
        );
    }
}

export default Blog;