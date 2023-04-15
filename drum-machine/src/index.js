import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* ---------- REDUX ---------- */

/* ---------- REACT ---------- */
// Audio Variables

const audioW = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
const audioE = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");

const audioA = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
const audioS = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
const audioD = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");

const audioZ = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
const audioX = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
const audioC = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");


const DrumPad = () => {
  const [audio] = useState('Welcome!');
  // constructor
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     audio: 'Welcome!'
  //   }
  //   this.playAudio = this.playAudio.bind(this);
  // }


  // playAudio(letter) {
  //   var audio = this.refs.audioQ;
  //   switch(letter) {
  //     case 'Q':
  //       audio = this.refs.audioQ;
  //       break;
  //     case 'W':
  //       audio = this.refs.audioW;
  //     default:
  //       break;
  //   }
  //   audio.play();
  // }

  return (
    <div className='row justify-content-center'>
      <div id='drum-machine' className='col-md-6'>
        <h1 className="text-center page-title">Drum Machine</h1>
        <div className='row'>
          {/* Drum Pad */}
          {/* Row Q,W,E */}
          <div className='col-md-8 text-center'>
            <div className='row'>
              <div id='heater-1' className='drum-pad'>
                Q
                <audio id="Q" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
              </div>
              <div id='heater-2' className='drum-pad'>
                W
                <audio id="W" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
              </div>
              <div id='heater-3' className='drum-pad'>
                E
                <audio id="E" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
              </div>
            </div>
            {/* Row A,S,D */}
            <div className='row'>
              <div id='heater-4' className='drum-pad'>
                A
                <audio id="A" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
              </div>
              <div id='clap' className='drum-pad'>
                S
                <audio id="S" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
              </div>
              <div id='open-hh' className='drum-pad'>
                D
                <audio id="D" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
              </div>
            </div>
            {/* Row Z,X,C */}
            <div className='row'>
              <div id='kick-n-hat' className='drum-pad'>
                Z
                <audio id="Z" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
              </div>
              <div id='kick' className='drum-pad'>
                X
                <audio id="X" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
              </div>
              <div id='closed-hh' className='drum-pad'>
                C
                <audio id="C" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
              </div>
            </div>
          </div>
          {/* Display */}
          <div id='display' className='col-md-4 text-center display'>
            {audio}
          </div>
        </div>
      </div>
    </div>
  )
} // DrumPad


/* ---------- REACT-REDUX ---------- */

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <DrumPad />
)

