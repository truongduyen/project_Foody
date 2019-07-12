import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import Content_Post from '../components/Posts/Content_Post';

class Posts extends Component {
  render() {
    return (
      <Layout title="Công thức">
        <Content_Post />
      </Layout>
    );
  }
}

export default Posts;