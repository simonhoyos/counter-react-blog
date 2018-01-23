import React, { Component } from 'react';
import Button from './Button/Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }
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
          <div className='counter__buttons'>
            <Button
              primary={true}
              handleClick={this.onIncrementClick}
            >
              +
            </Button>
            <Button
              primary={false}
              handleClick={this.onDecrementClick}
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
