import React, { Component } from 'react';

class PostSmall extends Component {
    state = {
        items: [],
        id:''
    }
    getItems() {
        fetch('http://localhost:4000/post_id')
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log("err " + err))    
    }
    getID = id =>{
        console.log(id)
        window.location.href = ("/posts/content_post?id=" + id)
    }
    componentDidMount() {
        this.getItems()   
    }
    render() {
        return (
            <div className="portfolio-item showpost">
                {this.state.items.map((post, key) =>
                    <div className="portfolio-link" key={key} style={{ margin: '10px' }}>
                        <img className="img-fluid" src="/static/images/nammo.jpg" alt="image" onClick = {()=>this.getID(post.id)} />
                        <div className="portfolio-caption"><h4>{post.title}</h4>
                        <p className="text-muted">{post.item}</p>
                        </div>
                    </div>
                )}  
            </div>
        );
    }
}

export default PostSmall;