import './App.css';
import React from 'react';
import { WelcomeDialog } from './components/Heritage'
import { Apps } from './components/Heritage';
import {Button} from './style/button';
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
      <Button primary="blue">button styled</Button>
      <Button>
        <button onClick={this.setToogle}>
          {this.state.isToggle ? 'ON':'OF'}
        </button>
      </Button>
      
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
        <WelcomeDialog />
        <Apps />
      </header>
    </div>
  );
}

export default App;
