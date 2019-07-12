import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import Item from '../../components/Blog/Item';

class Item_blog extends Component {
    render() {
        return (
            <Layout title="dd">
                <Item/>
            </Layout>
        );
    }
}

export default Item_blog;