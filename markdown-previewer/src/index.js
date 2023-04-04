import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import { marked } from 'marked'


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
const defaultEditorText = '# My Markdown Previwer!\n## This is a Subheading\nWe got [links](https://enp0s10.github.io/html/home.html)!\n\nNeed a space for inline-code? Sure!\n`System.out.prinln("Hello World")`\n\nOr code in a block!\n```\nconsole.log("we out here");\nconst add = 2 + 2;\n```\n- We got lists too!\n  - lower level bullets too\n    - Ya know?\n\n> Block Quotes!\n\nAnd Simple stuff like **BOLD**\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)';

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

  componentDidMount() {
    this.props.updateNewInput(defaultEditorText);
  }
  

  render() {
    return (
      <div className='editor-row row justify-content-center'>
        <div className='editor-container col-md-5 border rounded border-dark shadow-lg'>
          <h2 className='col-md-12'><strong>Editor</strong></h2>
          <div className='row'>
            <textarea id="editor" className='border border-dark' onChange={this.handleChange} placeholder='Insert Markdown Text..'>{defaultEditorText}</textarea>
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
    const markdownText = marked.parse(this.props.previewMarkdown);

    return (
      <div className='preview-row row justify-content-center'>
        <div className='preview-container col-md-8 border rounded border-dark shadow-lg'>
          <h2 className='col-md-12'><strong>Preview</strong></h2>
          <div className='row'>
            <div id="preview" className='text-wrap border border-dark' dangerouslySetInnerHTML={{__html: markdownText}}></div>
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