import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import PostContentSmall from '../../components/Posts/PostContentSmall';

class Content_PostUser extends Component {
    render() {
        return (
            <LayoutUser title="dcd">
                <PostContentSmall/>
            </LayoutUser>
        );
    }
}

export default Content_PostUser;