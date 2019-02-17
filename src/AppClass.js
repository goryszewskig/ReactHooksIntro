import React, { Component } from 'react';


class App extends Component {

  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null
  };

  componentDidMount(){
    document.title = `You've been clicked ${this.state.count} times.`
    window.addEventListener('mousemove', this.handleMouseMove)
  }


  componentDidUpdate(){
    document.title = `You've been clicked ${this.state.count} times.`
  }

  componentWillUnmount(){
    window.removeEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseMove = event => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    })
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }))
  }

  render() {
    return (
      <>
        <h2>Counter</h2>
        <button onClick={this.incrementCount}>
            Clicked me {this.state.count}
        </button>
        <h2>Toggle light</h2>
        <div style={{
          height: '50px',
          width: '50px',
          background: this.state.isOn ? "yellow" : "grey"
        }}
        onClick={this.toggleLight}
        >
        </div>
        <h2>Mouse Possition</h2>
        <p>X pos: {this.state.x}</p>
        <p>Y pos: {this.state.y}</p>
      </>
    );
  }
}

export default App;
