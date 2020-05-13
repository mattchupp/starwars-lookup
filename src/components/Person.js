import React, { Component } from 'react';

class Person extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>
          Height: {this.props.height}<br/>
          Weight: {this.props.weight}<br/>
          Hair Color: {this.props.hairColor}<br/>
          Eye Color: {this.props.eyeColor}<br/>
          Birth Year: {this.props.birthYear}<br/>
          Gender: {this.props.gender}<br/>
        </p>
      </div>

    )
  }

}


export default Person
