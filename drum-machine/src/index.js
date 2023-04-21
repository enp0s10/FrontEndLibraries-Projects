import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* ---------- REACT ---------- */

const DrumPad = (props) => {
  var [audio, setAudio] = useState('Welcome!');

  useEffect(() => {
    // event listener for key presses
    window.addEventListener('keydown', (event) => {
      console.log(event.key + " key pressed");
      if (event.key.match(/[q,w,e,a,s,d,z,x,c]/i)) {
        playAudio(event.key);
      }
    });

    // event listener for button clicks
    // gets click event's childNode and plays audio element
    var padButtons = document.getElementsByClassName("drum-pad");
    Array.from(padButtons).forEach(function(padButton) {
      padButton.addEventListener('click', (event) => {
        let child = event.target.childNodes;
        playAudio(child[1].id)
      });
    })
  }, []);

  function playAudio(key){
    var currAudio = document.getElementById(key.toUpperCase());
    let audioName =  currAudio.parentElement.id;
    audio = setAudio(audioName);
    currAudio.currentTime = 0;
    currAudio.play();
  };

  return (
    <div className='row justify-content-center'>
      <div id='drum-machine' className='col-md-6'>
        <h1 className="text-center page-title">Drum Machine</h1>
        <div className='row'>
          {/* Drum Pad */}
          {/* Row Q,W,E */}
          <div className='col-md-8 text-center'>
            <div className='row'>
              <div name="Q" id='Heater 1' className='drum-pad'>
                Q
                <audio id="Q" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
              </div>
              <div name="Q" id='Heater 2' className='drum-pad'>
                W
                <audio id="W" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
              </div>
              <div name="Q" id='Heater 3' className='drum-pad'>
                E
                <audio id="E" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
              </div>
            </div>
            {/* Row A,S,D */}
            <div className='row'>
              <div name="Q" id='Heater 4' className='drum-pad'>
                A
                <audio id="A" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
              </div>
              <div name="Q" id='Clap' className='drum-pad'>
                S
                <audio id="S" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
              </div>
              <div name="Q" id='Open HH' className='drum-pad'>
                D
                <audio id="D" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
              </div>
            </div>
            {/* Row Z,X,C */}
            <div className='row'>
              <div name="Q" id='Kick-n-Hat' className='drum-pad'>
                Z
                <audio id="Z" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
              </div>
              <div name="Q" id='Kick' className='drum-pad'>
                X
                <audio id="X" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
              </div>
              <div name="Q" id='Closed HH' className='drum-pad'>
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


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <DrumPad />
)

