import React, { Component } from 'react';
import Button from './Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }
  }

  componentDidMount() {
    const increment = document.querySelector('.js-increment');
    const decrement = document.querySelector('.js-decrement');

    increment.addEventListener('click', this.onIncrementClick);
    decrement.addEventListener('click', this.onDecrementClick);
  }

  onIncrementClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  onDecrementClick = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div className="App">
        <div className='counter'>
          <div className='counter__state'>
            {this.state.counter}
          </div>
          <div className='coutner__buttons'>
            <Button
              className='js-increment'
              primary={true}
            >
              +
            </Button>
            <Button
              className='js-decrement'
              primary={false}
            >
              -
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
