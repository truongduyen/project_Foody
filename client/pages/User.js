import React, { Component } from 'react';
import LayoutUser from '../components/Layout/LayoutUser';
import Post from '../components/Post';
import Contact from '../components/Contact';
import Member from '../components/Member';
import Header from '../components/Header';


class User extends Component {
    render() {
        return (
            <LayoutUser>
                <Header/>
                <Post/>
                <Member/>
                <Contact/>
            </LayoutUser>
        );
    }
}

export default User;