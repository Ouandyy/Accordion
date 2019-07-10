import React from 'react';
import Overview from './Overview.jsx';
import Details from './Details.jsx';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: [0, "pointer", "notActive"],
      details: [0, "pointer", "notActive"],
      shipping: [0, "pointer", "notActive"],
    }
    this.dropDown = this.dropDown.bind(this);
  }


  dropDown(e) {
    for (let i in this.state) {
      if (i !== e.target.id) {
        this.setState({ [i]: [0, "notActive"] })
      } else {
        this.setState({ [i]: [500, "active"] })
      }
    };
  };



  render() {
    return (
      <div>
        <button className={`accordion ${this.state.overview[1]}`}
          id="overview"
          onClick={this.dropDown}
          >
          OVERVIEW
                  </button>
        <div className="panel" style={{
          maxHeight: this.state.overview[0]
        }}>
          <Overview/>

        </div>
        <button className={`accordion ${this.state.details[1]}`}
          id="details"
          onClick={this.dropDown}
          >
          DETAILS + DIMENSIONS
                  </button>
        <div className="panel" style={{
          maxHeight: this.state.details[0]
        }}>
          <Details/>

        </div>

        <button className={`accordion ${this.state.shipping[1]}`}
          id="shipping"
          onClick={this.dropDown}
          >
          SHIPPING + RETURNS
                  </button>
        <div className="panel" style={{
          maxHeight: this.state.shipping[0]
        }}>
          THIS IS SHIPPING STUFF

        </div>

      </div>
    )
  }
}

export default Accordion;