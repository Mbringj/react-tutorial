import './App.css';
import React from 'react';

class ToogleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };

    this.setToogle = this.setToogle.bind(this); 
  }

  setToogle() {
    this.setState(state => ({
      isToggle: !state.isToggle
    }));
  }

  render() {
    const listName = ["mbring", "jeremie", "fouba", "fabrice","mahimi"]
    return (
      <div>
        <button onClick={this.setToogle}>
          {this.state.isToggle ? 'ON':'OF'}
        </button>
        <div>
          <ul>
            {this.state.isToggle && listName.map(list => <li key={list}>{list}</li>)}  
          </ul>        
        </div>
      </div>
    )
  }

} 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToogleComponent />
      </header>
    </div>
  );
}

export default App;
