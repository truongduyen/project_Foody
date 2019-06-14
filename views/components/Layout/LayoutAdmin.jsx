import React, { Component } from 'react';
import NavAdmin from '../Nav/NavAdmin';
import Footer from '../Footer';

class LayoutAdmin extends Component {
    render() {
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                      <title>{this.props.title}</title>
                      <link href="/stylesheets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                      <link href="/stylesheets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
                      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
                      <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" type="text/css" />
                      <link href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
                      <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
                      <link href="/stylesheets/css/agency.min.css" rel="stylesheet" />
                      <link href="/stylesheets/style.css" rel="stylesheet" />
                      <script src="/stylesheets/vendor/jquery/jquery.min.js"></script>
                      <script src="/stylesheets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                      <script src="/stylesheets/vendor/jquery-easing/jquery.easing.min.js"></script>
                      <script src="/stylesheets/js/jqBootstrapValidation.js"></script>
                      <script src="/stylesheets/js/contact_me.js"></script>
                      <script src="/stylesheets/js/agency.min.js"></script>
                      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
                      
                </head>
                <NavAdmin/>
                {this.props.children}
                <Footer/>
            </html>
        );
    }
}

export default LayoutAdmin;