import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import Nav_User from './Nav_User';

class Page extends Component {
    render() {
        return (
            <LayoutUser title="Trang cá nhân">
                <Nav_User />
                <div className="content">

                </div>

            </LayoutUser>
        );
    }
}
export default Page;