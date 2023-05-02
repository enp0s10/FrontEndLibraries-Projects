import React, { useState  } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


const Calculator = (props) => {
  // state
  var [equation, setEquation] = useState(0);
  var [result, setResult] = useState(0);

  return (
    <div className='container-sm calculator-container'>
      {/* Display */}
      <div className='row'>
        <div id="display"></div>
      </div>
      {/* Buttons */}
      <div id="buttons" className='text-center'>
          {/* First Row */}
          <div className='row'>
            <div id='clear' className='col-md-6 button button-ac'>AC</div>
            <div id='divide' className='col-md-3 button'>/</div>
            <div id='multiply' className='col-md-3 button'>X</div>
          </div>
          {/* Second Row */}
          <div className='row'>
            <div id='one' className='col-md-3 button'>1</div>
            <div id='two' className='col-md-3 button'>2</div>
            <div id='three' className='col-md-3 button'>3</div>
            <div id='subtract' className='col-md-3 button'>-</div>
          </div>
          {/* Third Row */}
          <div className='row'>
            <div id='four' className='col-md-3 button'>4</div>
            <div id='five' className='col-md-3 button'>5</div>
            <div id='six' className='col-md-3 button'>6</div>
            <div id='add' className='col-md-3 button'>+</div>
          </div>
          <div className='row'>
            <div className='col-md-9'>
              <div className='row'>
                <div id='seven' className='col-md-4 button'>7</div>
                <div id='eight' className='col-md-4 button'>8</div>
                <div id='nine' className='col-md-4 button'>9</div>
              </div>
              <div className='row'>
                <div id='zero' className='col-md-8 button'>0</div>
                <div id='decimal' className='col-md-4 button'>.</div>
              </div>
            </div>
            <div className='col-md-3 button button-equal'>
                <div className='equal'>=</div>
            </div>
          </div>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Calculator />
);


reportWebVitals();
