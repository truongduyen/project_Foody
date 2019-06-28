import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import Post from '../components/Post';
import Member from '../components/Member';
import Contact from '../components/Contact';
import Header from '../components/Header';


class index extends Component {
  render() {
    return (
      <Layout title="Trang chủ">
        <Header/>
        <Post/>
        <Member/>
        <Contact/>
      </Layout>
      
    );
  }
} 

export default index