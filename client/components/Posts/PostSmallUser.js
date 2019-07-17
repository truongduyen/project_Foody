import React, { Component } from 'react';

class PostSmallUser extends Component {
    state = {
        items: [],
        id_post:''
    }
    getItems() {
        fetch('http://localhost:4000/post_id')
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log("err " + err))    
    }
    getID = id_post =>{
        console.log(id_post)
        window.location.href = ("/posts/content_postuser?id=" + id_post)
    }
    componentDidMount() {
        this.getItems()   
    }
    render() {
        return (
            <div className="portfolio-item showpost">
                {this.state.items.map((post, key) =>
                    <div className="portfolio-link" key={key} style={{ margin: '10px' }}>
                        <img className="img-fluid" src="/static/images/nammo.jpg" alt="image" onClick = {()=>this.getID(post.id_post)} />
                        <div className="portfolio-caption" onClick = {()=>this.getID(post.id_post)}><h4>{post.title}</h4>
                        <p className="text-muted">{post.item}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default PostSmallUser;