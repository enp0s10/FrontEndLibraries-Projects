import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


// -------------- REDUX: ---------------
// redux variables
const NEW = 'NEW';

// default reducer
const randomQuoteReducer = () => {

}

// redux actions
const newQuote = () => {
    
}

// redux store
const store = Redux.createStore(randomQuoteReducer);

// -------------- REACT: ---------------
class RandomQuoteMachine extends React.Component {
    render() {
        return (
            <h1>Hello World</h1>
        )
    }
}


// ----------- REACT & REDUX -----------


ReactDOM.render(
    <Provider store={store}>
        <RandomQuoteMachine />
    </Provider>
)