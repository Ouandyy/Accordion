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
    return <DetailList dimension = {this.state.randomDimension}/>
  }
}

export default Detail