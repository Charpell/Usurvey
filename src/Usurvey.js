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
      studentName: 'John',
      answers: {
        answer1: '',
        answer2: '',
        answer3: '',
      },
      isSubmitted: false 
    }
  }

  nameSubmit = () => {
    var studentName = this.refs.name.value;
    this.setState({ studentName }, function(){
      console.log(this.state)
    })
  }

  answerSelected = () => {

  }

  questionSubmit = () => {
    
  }

  render() {
    var studentName;
    var questions;

    if (this.state.studentName === '' && this.state.isSubmitted === false) {
      studentName = <div>
        <h1>Hey Student, please let us know your name: </h1>
       
        <form onSubmit={this.nameSubmit}>
          <input className="namy" type="text" placeholder="Enter your name" ref="name"/>
        </form>
      </div>;
      questions = ''

    } else if (this.state.studentName !== '' && this.state.isSubmitted === false ) {
      studentName = <h1>Welcome to U-Survey, {this.state.studentName}</h1>;
        questions = <div>
          <h2>Here are some questions: </h2>
          <form onSubmit={this.questionSubmit}>
            <div className="card">
              <label>What kind of courses you like the most: </label> <br />
              <input type="radio" name="answer1" value="Technology" onChange={this.answerSelected} /> Technology
              <input type="radio" name="answer1" value="Design" onChange={this.answerSelected} /> Design
              <input type="radio" name="answer1" value="Marketing" onChange={this.answerSelected} /> Marketing
            </div>
            <div className="card">
              <label>You are a: </label> <br />
              <input type="radio" name="answer2" value="Student" onChange={this.answerSelected} /> Student
              <input type="radio" name="answer2" value="in-job" onChange={this.answerSelected} /> in-job
              <input type="radio" name="answer2" value="looking-job" onChange={this.answerSelected} /> looking-job
            </div>

            <div className="card">
              <label>Is online learning helpful: </label> <br />
              <input type="radio" name="answer3" value="yes" onChange={this.answerSelected} /> yes
              <input type="radio" name="answer3" value="no" onChange={this.answerSelected} /> no
              <input type="radio" name="answer3" value="maybe" onChange={this.answerSelected} /> maybe
            </div>
            <input className="feedback-button" type="submit" value="submit" />
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