import React, { Component } from 'react';

class PostSmall extends Component {
    render() {
        return (
            <div className="col-md-3 col-sm-5 portfolio-item">
                <a className="portfolio-link" data-toggle="modal">
                    <img className="img-fluid" src="#" alt />
                </a>
                <div className="portfolio-caption">
                <h4>{this.props.children}</h4>
                </div>
            </div>
        );
    }
}

export default PostSmall;