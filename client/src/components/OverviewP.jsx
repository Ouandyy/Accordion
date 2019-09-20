import React from 'react';

const OverviewP = (props) => {
  // return <p>{props.index}{props.data}</p>



  if (props.index === props.randomNum) {
    return (
      <div>
        <p>{props.data.sentence}</p>
        <h6>KEY DETAILS</h6>
        <ul>
          <li>{props.data.keyDetail1}</li>
          <li>{props.data.keyDetail2}</li>
          <li>{props.data.keyDetail3}</li>
          <li>{props.data.keyDetail4}</li>
          <li>{props.data.keyDetail5}</li>
          <li>{props.data.keyDetail6}</li>
          <li>{props.data.keyDetail7}</li>
          <li>{props.data.keyDetail8}</li>
          <li>{props.data.keyDetail9}</li>
          <li>{props.data.keyDetail10}</li>
        </ul>
      </div>
    )
  } else {
    return null
  }
}

export default OverviewP;