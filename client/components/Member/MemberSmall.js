import React, { Component } from 'react';

class MemberSmall extends Component {
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
            <div className="col-sm-2">
                <div className="team">
                    <img className="mx-auto rounded-circle" src="#" alt />
                    <h6>Larry Parker</h6>
                    <p className="text-muted">Lead Marketer</p>
                </div>
            </div>
        );
    }
}

export default MemberSmall;