import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import './index.css'

import ReduxThunk from 'redux-thunk'

// -------------- REDUX: ---------------
// redux variables
const GET_QUOTE = 'GET_QUOTE';

// default reducer
const randomQuoteReducer = (state=[], action) => {
    switch (action.type) {
        case GET_QUOTE:
            console.log('Redux store has been updated: ')
            console.log(action.data);
            return action.data;
        default:
            return state;
    }
}

// redux actions
export const getQuotes = () => (dispatch) => {
    console.log("Fetching API Data");
    const url = "https://type.fit/api/quotes"
    let result = fetch(url)
        .then((data) => {
            data.json()
            .then((dataJson) => {

                return dispatch({
                    type: GET_QUOTE,
                    data: dataJson,
                })
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        })
}


// redux store
// need middlware with reduxthunk in order for the API object to work with redux
const store = createStore(randomQuoteReducer, applyMiddleware(ReduxThunk));


// -------------- REACT: ---------------
class RandomQuoteMachine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: '',
        };
        this.getRandomQuote = this.getRandomQuote.bind(this);
    }

    
    // runs once page is loaded
    async componentDidMount() {
        const promise = await new Promise((resolve, reject) => {
            this.props.getQuotes()
            setTimeout(() => {
                // Resolve the promise
                resolve(this.getRandomQuote());
            }, 500);
                reject(console.log("Unable to load initial quote"));
        });
    }

    // Get Random Quote
    getRandomQuote() {
        const index = Math.floor(Math.random() * this.props.quoteList.length);
        const selectedQuote = this.props.quoteList[index];
        const ranQuote = selectedQuote.text;
        const ranAuthor = selectedQuote.author;
        this.setState(state => ({
            quote: ranQuote,
            author: ranAuthor,
        }));
    }

    render() {
        const tweetURL = this.state.quote + "%0A%20-%20 " + this.state.author
        const newTweetURL = 'https://twitter.com/intent/tweet?text=' + tweetURL.replaceAll(' ', '%20')

        return (
            <div id='quote-box' className='quote-box'>
                <h1 className='text-center'>Random Quote Machine</h1>
                <div id='text' onLoad={this.getRandomQuote}>"{this.state.quote}"</div>
                <div id='author'>- {this.state.author}</div>
                <button id='new-quote' className='btn btn-primary' onClick={this.getRandomQuote}>New Quote</button>
                <a href={newTweetURL} target="_blank" id='tweet-quote' className='btn btn-primary'>
                    <i className="fa-brands fa-twitter" /> Tweet
                </a>
            </div>
        )
    }
}


// ----------- REACT & REDUX -----------
const mapStateToProps = (state) => {
    return {quoteList: state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getQuotes: () => {
            dispatch(getQuotes())
        },
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(RandomQuoteMachine);

// App Wrapper
class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
};

// Render the AppWrapper
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>
)

