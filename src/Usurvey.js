import React, { Component } from 'react';
var firebase = require('firebase');
var uuid = require('uuid');


var config = {
    apiKey: "AIzaSyCTmx6-S-uPb-4DlfVrkgqEc-d1cSaC-pQ",
    authDomain: "usurvey-6cbc8.firebaseapp.com",
    databaseURL: "https://usurvey-6cbc8.firebaseio.com",
    projectId: "usurvey-6cbc8",
    storageBucket: "usurvey-6cbc8.appspot.com",
    messagingSenderId: "801918194089"
  };
  firebase.initializeApp(config);



class Usurvey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName: '',
      answers: {
        answer1: '',
        answer2: '',
        answer3: '',
      },
      isSubmitted: false 
    }
  }

  render() {
    var studentName;
    var questions;

    if (this.state.studentName === '' && this.state.isSubmitted === false) {
      studentName = <div>
        <h1>Hey Student, please let us know your name: </h1>
        <form>
          <input type="text" placeholder="Enter your name" ref="name"/>
        </form>
      </div>
    }
    return(
      <div>
        {studentName}
        ------------------------
        {questions}
      </div>
    )
  }
}

export default Usurvey;