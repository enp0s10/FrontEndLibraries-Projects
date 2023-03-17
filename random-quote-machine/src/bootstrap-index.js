import React from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'

// import thunk from 'redux-thunk'


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
const store = createStore(randomQuoteReducer);

// -------------- REACT: ---------------
class RandomQuoteMachine extends React.Component {



    render() {
        return (
            <Container fluid='sm'>
                <div id='quote-box'>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Row>
                                <Col>
                                    <div id='text' className='.lead'>"Bruh is this thing even gonna work"</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div id='author'>- Adrian</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button id='new-quote'>New Quote</Button>
                                </Col>
                                <Col>
                                    <a href='' id='tweet-quote'>(*v*) Tweet Quote</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col></Col>
                    </Row>
                </div>
            </Container>
        )
    }
}


// ----------- REACT & REDUX -----------
ReactDOM.render(
    // <Provider store={store}>
    //     <RandomQuoteMachine />
    // </Provider>
    <RandomQuoteMachine />, document.getElementById('root')
);
