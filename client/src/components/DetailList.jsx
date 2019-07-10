import React from 'react';

const DetailList = (props) => {
  return (
    <div>
      <b>DETAILED SPECIFICATIONS</b>
    <ul>
      <li>Overall product dimension: </li>
      <li>Interior seat width: </li>
      <li>Seat depth: </li>
      <li>Back height: </li>
      <li>Arm height: </li>
      <li>Diagno depth: </li>
      <li>Clearance: </li>
      <li>sometypeofinfo</li>
      </ul>
      <b>PACKAGING</b>
      <ul>
      <li>Number of boxes: </li>
      <li>Shipping package: </li>
      <li>Package weight:</li>
    </ul>
    <b>ASSEMBLY INSTRUCTIONS</b>
    <p>Assembly required. sometype of inlink</p>
    <b>CARE</b>
    <p>sometype of paragraph</p>
    </div>
  )
}

export default DetailList