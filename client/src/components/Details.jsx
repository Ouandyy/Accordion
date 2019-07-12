import React from 'react';
import axios from 'axios';
import DetailList from './DetailList.jsx'

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomDimension: [],
      randomNum: Math.floor((Math.random() * 35))
    }
  }


  componentDidMount(){
    axios.get('/api/dimension')
      .then(({data}) => {this.setState({randomDimension: data})
      })
    .catch((error) => {console.error('error with get request', error)})
  }

  render() {
    return (
    <div>
    {this.state.randomDimension.map((data, index) => {
      return <DetailList data={data} index={index} key={index} randomNum={this.state.randomNum}/>
    })}
    </div>
    )
  }
}

export default Detail