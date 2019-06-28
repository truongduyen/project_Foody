import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import Content_Post from '../../components/Posts/Content_Post';

class Post_User extends Component {
    render() {
        return (
            <LayoutUser title="Công thức">
                <Content_Post />
            </LayoutUser>
        );
    }
}

export default Post_User;