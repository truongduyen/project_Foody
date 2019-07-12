import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import Content_PostUser from '../../components/Posts/Content_PostUser';

class Post_User extends Component {
    render() {
        return (
            <LayoutUser title="Công thức">
                <Content_PostUser />
            </LayoutUser>
        );
    }
}

export default Post_User;