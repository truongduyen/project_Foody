import React, { Component } from 'react';
import Footer from '../Footer';
import NavUser from '../Nav/NavUser';

class LayoutUser extends Component {
    render() {
        return (
            <div>
                <meta charSet="utf-8" />
                <title>{this.props.title}</title>
                <link href="/static/stylesheets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/static/stylesheets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
                <link href="/static/stylesheets/css/agency.min.css" rel="stylesheet" />
                <link href="/static/stylesheets/css/agency.css" ref="stylesheet" />
                <link href="/static/stylesheets/style.css" rel="stylesheet" />
                <script src="/static/stylesheets/vendor/jquery/jquery.min.js"></script>
                <script src="/static/stylesheets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="/static/stylesheets/vendor/jquery-easing/jquery.easing.min.js"></script>
                <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
                
                <NavUser />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default LayoutUser;