import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './components/Accordion.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
    <div>
      <Accordion/>
    </div>
    
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));