import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import ContentUser from '../../components/Blog/ContentUser';

class Blog_User extends Component {
    render() {
        return (
            <LayoutUser title="Blog">
                <ContentUser/>
            </LayoutUser>
        );
    }
}

export default Blog_User;