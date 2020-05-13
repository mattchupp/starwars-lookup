import React, { Component } from 'react';
import './App.css';
import Person from './components/Person.js'
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
      homeworld: "",
      homeworldName: "",
      films: [],
      filmsList: [],
      characterID: Math.floor(Math.random() * (82 - 1) + 1),
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
        presentState.homeworld = res.data.homeworld;
        presentState.films = res.data.films;
        this.setState({ ...presentState });
        console.log(this.state.name);
        console.log(this.state.films);
      }).catch(err => {
        console.log(err);
      })
    .then(() => {
      axios.get(`https://cors-anywhere.herokuapp.com/${this.state.homeworld}`)
      .then(res => {
         this.setState({ homeworldName: res.data.name });
         this.setState({ loaded: true});
         console.log(this.state.homeworldName);
      }).catch(err => {
         console.log(err);
      })
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

    const button = {
      padding: '10px 10px',
      fontSize: '20px'
    }

    /*
    If submitted but not yet loaded show the loading animation

    ** logic that can be added for loading later on
    */
    if (this.state.submitted && !this.state.loaded) {
      return (
        <div style={character}>

          <form className="uk-margin-small">
            <button style={button} onClick={this.handleSubmit}>
              Get Character
            </button>
          </form>
          <p>Loading...</p>

        </div>
      )
    }


    /* make sure zip code is submitted and data is loaded before showing weather*/
    //if (this.state.submitted && this.state.loaded) {
    if (this.state.submitted && this.state.loaded) {
      return (
        <div style={character}>

          <form className="uk-margin-small">
            <button style={button} onClick={this.handleSubmit}>
              Get Character
            </button>
          </form>

          <Person
            name={this.state.name}
            height={this.state.height}
            weight={this.state.mass}
            hairColor={this.state.hairColor}
            eyeColor={this.state.eyeColor}
            birthYear={this.state.birthYear}
            gender={this.state.gender}
            homeworld={this.state.homeworldName}
          />


        </div>
      )
    } else {
      return (
        <div style={character}>

          <form>
            <button style={button} onClick={this.handleSubmit}>
              Get Character
            </button>
          </form>

        </div>
      )
    }
  }

}


export default Character
