import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import Content from '../../components/Blog/Content';

class Blog_User extends Component {
    render() {
        return (
            <LayoutUser title="Blog">
                <Content/>
            </LayoutUser>
        );
    }
}

export default Blog_User;