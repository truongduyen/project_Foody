import React, { Component } from 'react';

class PostSmall extends Component {
    state = {
        items: []
    }
    getItems() {
        fetch('http://localhost:4000/post', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log("err " + err))
    }
    componentDidMount() {
        this.getItems()
    }
    render() {
        return (
            <div className="portfolio-item showpost">
                {this.state.items.map((post, key) =>
                    <div className="portfolio-link"  key={key} style={{ margin: '10px' }}>
                        <img className="img-fluid" src="/static/images/nammo.jpg" alt />
                        <div className="portfolio-caption"><a href={this.props.link}><h4>{post.title}</h4></a>
                        <p className="text-muted">{post.item}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default PostSmall;