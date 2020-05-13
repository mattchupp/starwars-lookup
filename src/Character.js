import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Character extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      height: "",
      mass: "",
      hairColor: "",
      skinColor: "",
      eyeColor: "",
      birthYear: "",
      gender: "",
      characterID: 1,
      submitted: false,
      loaded: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }





  /*
  ** fetches character from SWAPI
  */
  getCharacter = () => {
      axios.get(`https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/${this.state.characterID}`)
      .then(res => {
        let presentState = {...this.state};
          presentState.name = res.data.name;
          presentState.height = res.data.height;
          presentState.mass = res.data.mass;
          presentState.hairColor = res.data.hair_color;
          presentState.skinColor = res.data.skin_color;
          presentState.eyeColor = res.data.eye_color;
          presentState.birthYear = res.data.birth_year;
          presentState.gender = res.data.gender;
          this.setState({ ...presentState });
          this.setState({ loaded: true});
          console.log(this.state.name);
        }).catch(err => {
          console.log(err);
        })
  }

  /* Form Handlers */

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ characterID: Math.floor(Math.random() * (82 - 1) + 1) });
    console.log(this.state.characterID);
    this.getCharacter();
    this.setState({submitted: true});
    this.setState({loaded: false});
  }

  render() {
    const character = {
      padding: '20px 10px',
      color: 'white',
      width: '100%',
      textAlign: 'center',
      margin: '0 auto'
    }

    /*
    If submitted but not yet loaded show the loading animation

    ** logic that can be added for loading later on
    if (this.state.submitted && !this.state.loaded) {
      return (
        <div style={forecast}>

          <form className="uk-margin-small">
            <button onClick={this.handleSubmit}>
              Get Character
            </button>
          </form>

        </div>
      )
    }
    */

    /* make sure zip code is submitted and data is loaded before showing weather*/
    //if (this.state.submitted && this.state.loaded) {
    if (this.state.submitted && this.state.loaded) {
      return (
        <div style={character}>

          <form className="uk-margin-small">
            <button onClick={this.handleSubmit}>
              Get Character
            </button>
          </form>


          <div className="">
            <div className="">
              <h1>{this.state.name}</h1>
              <p>
                Height: {this.state.height}<br/>
                Weight: {this.state.mass}<br/>
                Hair Color: {this.state.hairColor}<br/>
                Eye Color: {this.state.eyeColor}<br/>
                Birth Year: {this.state.birthYear}<br/>
                Gender: {this.state.gender}<br/>
              </p>
            </div>
          </div>

        </div>
      )
    } else {
      return (
        <div style={character}>

          <form className="">
            <button onClick={this.handleSubmit}>
              Get Character
            </button>
          </form>

        </div>
      )
    }
  }

}


export default Character
