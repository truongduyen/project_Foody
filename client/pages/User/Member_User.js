import React, { Component } from 'react';
import LayoutUser from '../../components/Layout/LayoutUser';
import Content_Member from '../../components/Member/Content_Member';

class Member_User extends Component {
    render() {
        return (
            <LayoutUser title="Thành viên">
                <Content_Member/>
            </LayoutUser>
        );
    }
}

export default Member_User;