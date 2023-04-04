import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'


import './index.css';

/* ---------- REDUX ---------- */
const NEW_INPUT = 'NEW_INPUT';

// reducer
const markdownPreviewerReducer = (state='', action) => {
  switch (action.type) {
    case NEW_INPUT:
      return action.message;
    default:
      return state;
  }
}

// action methods
const updateInput = (userInput) => {
  return {
    type: NEW_INPUT,
    message: userInput
  }
}

const store = createStore(markdownPreviewerReducer);

/* ---------- REACT ---------- */
class UserInputWindow extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
    this.props.updateNewInput(event.target.value);
  }

  render() {
    return (
      <div className='editor-row row justify-content-center'>
        <div className='editor-container col-md-5 border rounded border-dark'>
          <h2 className='col-md-12'><strong>Editor</strong></h2>
          <div className='row'>
            <textarea id="editor" className='border border-dark' onChange={this.handleChange}></textarea>
          </div>
        </div>
      </div>
    );
  };
} // UserInputWindow

class PreviewWindow extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      preview: '',
    }
  }

  render() {
    return (
      <div className='preview-row row justify-content-center'>
        <div className='preview-container col-md-8 border rounded border-dark'>
          <h2 className='col-md-12'><strong>Preview</strong></h2>
          <div className='row'>
            <div id="preview" className='text-wrap border border-dark'>{this.props.previewMarkdown}</div>
          </div>
        </div>
      </div>
    );
  };
} // PreviewWindow


/* ---------- REACT-REDUX ---------- */
const mapStateToProps = (state) => {
  return {previewMarkdown: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewInput: (message) => {
      dispatch(updateInput(message))
    },
  }
};

const ConnectedUserInput = connect(null, mapDispatchToProps)(UserInputWindow);
const ConnectedPreview = connect(mapStateToProps)(PreviewWindow);


class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedUserInput />
        <ConnectedPreview />
      </Provider>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AppWrapper />
)