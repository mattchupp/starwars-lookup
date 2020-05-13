import React, { Component } from 'react';

class Person extends Component {

  render() {

    const personInfo = {
      fontSize: '20px'
    }

    return (
      <div>
        <h1>{this.props.name}</h1>
        <p style={personInfo}>
          Height: {this.props.height}<br/>
          Weight: {this.props.weight}<br/>
          Hair Color: {this.props.hairColor}<br/>
          Eye Color: {this.props.eyeColor}<br/>
          Birth Year: {this.props.birthYear}<br/>
          Gender: {this.props.gender}<br/>
          Homeworld: {this.props.homeworld}
        </p>
      </div>

    )
  }

}


export default Person
