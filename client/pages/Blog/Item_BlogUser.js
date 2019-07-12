import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import Item from '../../components/Blog/Item';

class Item_BlogUser extends Component {
    render() {
        return (
            <LayoutUser title="dcd">
                <Item/>
            </LayoutUser>
        );
    }
}

export default Item_BlogUser;