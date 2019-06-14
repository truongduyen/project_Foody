import React, { Component } from 'react';

class MemberSmall extends Component {
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