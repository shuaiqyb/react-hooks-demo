import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Parent></Parent>
      </div>
    )
  }
}

class Parent extends React.Component {
  state = {
    toggle: false
  }
  handleClick = () => {
    this.setState((state) => {
      return {
        toggle: !state.toggle
      }
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Button
      </button>
        <Child toggle={this.state.toggle} />
      </div>
    )
  }
}

const Child = (props) => {
  let flag;
  if (props.toggle) {
    flag = 'block';
  }
  else {
    flag = 'none';
  }
  useEffect(() => {
    console.log('didmount');
    return ()=>{
      console.log('unmount')
    }
  })
  return (
    <div style={{ width: 200, height: 200, backgroundColor: 'yellow', display: flag }}>qweqweqw</div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

