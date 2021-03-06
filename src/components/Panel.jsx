import React, { Component } from 'react';

class Panel extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="panels">
            {this.props.panel.map((pane, id) => (
                <div key={id} className="text" >
                <div>
                <img src={pane.thumb} />
                </div>
                <div>
                <h2>{pane.name}</h2>
                <h4>{pane.role}</h4>
                <p>{pane.description}</p>
                </div>
                </div>
            ))}
            </div>
        )
    }
}

export default Panel;