import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import PostContentSmallUser from '../../components/Posts/PostContentSmallUser';

class Content_PostUser extends Component {
    render() {
        return (
            <LayoutUser title="Bài viết">
                <PostContentSmallUser/>
            </LayoutUser>
        );
    }
}

export default Content_PostUser;