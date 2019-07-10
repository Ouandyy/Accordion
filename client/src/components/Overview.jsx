import React from 'react';
import OverviewP from "./OverviewP.jsx";
import axios from "axios";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomOverview: [],
      randomNum: Math.floor((Math.random() * 35))
    }
  }


  componentDidMount(){
    axios.get('/api/overview')
      .then(({data}) => {this.setState({randomOverview: data})
      })
    .catch((error) => {console.error('error with get request', error)})
  }

  render() {
    return (
      <div>
        {this.state.randomOverview.map((data, index) => {
          return <OverviewP data={data} index={index} key={index} randomNum={this.state.randomNum}/>
        })}
      </div>
    )
  }
}

export default Overview;