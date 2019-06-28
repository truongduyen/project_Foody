import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import Content_Post from '../components/Posts/Content_Post';

class Posts extends Component {

  // handleTitleChange(e) {
  //   this.setState({ title: e.target.value })
  // }
  // handleSubjectChange(e) {
  //   this.setState({ body: e.target.value })
  // }
  render() {
    return (
      <Layout title="Công thức">
        <Content_Post />
      </Layout>
    );
  }
}

export default Posts;