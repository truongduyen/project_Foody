import React, { Component } from 'react';

class  MemberSmall extends Component {
    state = {
        items: []
    }
    getItems() {
        fetch('http://localhost:4000/admin', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log("err " + err))
    }
    componentDidMount() {
        this.getItems()
        console.log(this.state.items)
    }
    render() {
        return (
            <div className="show">
                {this.state.items.map((item,key) =>
                <div className="team" key={key}>
                    <img className="mx-auto rounded-circle" src="/static/images/member1.jpg" alt />
                    <h6>{item.username}</h6>
                </div>
                 )}
            </div>
        );
    }
}

export default MemberSmall;