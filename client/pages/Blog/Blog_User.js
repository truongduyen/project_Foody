import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import Item_blog from '../../components/Blog/Item_blog';

class Blog_User extends Component {
    render() {
        return (
            <LayoutUser>
                <Item_blog/>
            </LayoutUser>
        );
    }
}

export default Blog_User;