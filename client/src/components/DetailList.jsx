import React from 'react';

const DetailList = (props) => {
  if (props.randomNum === props.index) {
    return (
      <div>
        <b>DETAILED SPECIFICATIONS</b>
      <ul>
        <li>Overall product dimension: </li>
        <li>Interior seat width: {props.data.width}".</li>
        <li>Seat depth: {props.data.depth}".</li>
        <li>Back height: {props.data.height}".</li>
        <li>Arm height: {JSON.stringify((props.data.height/2)).slice(0,4)}".</li>
        <li>Diagonal depth: {JSON.stringify((props.data.depth * 1.4)).slice(0,4)}".</li>
        <li>Clearance: {JSON.stringify((props.data.height/3)).slice(0, 4)}".</li>
        <li>{props.data.additionInfo}</li>
        </ul>
        <b>PACKAGING</b>
        <ul>
        <li>Number of boxes: {props.data.numberOfBoxes}</li>
        <li>Shipping package: </li>
        <li>Package weight: {props.data.packageWeight}</li>
      </ul>
      <b>ASSEMBLY INSTRUCTIONS</b>
      <p>{props.data.additionInfo}</p>
      <b>CARE</b>
      <p>{props.data.care}</p>
      </div>
    )
  } else {
    return null
  }
  
}

export default DetailList