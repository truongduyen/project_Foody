import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import Content_Member from '../components/Member/Content_Member';

class Member extends Component {
    render() {
        return (
            <Layout title="Thành viên">
                <Content_Member/>
            </Layout>
        );
    }
}

export default Member;