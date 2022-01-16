import React, { useEffect, useState } from 'react';
import {Container, Row, Col } from 'react-bootstrap';

const GridSystem = ({colCount, children}) =>{
  let rowCount = Math.floor(children.length/ colCount) + 1
  console.log("col count is :", colCount);
  console.log("row count is :", rowCount);
  console.log("children is ", children);
  let index = 0 // keeps track of the current child we are on 

  const buildGrid = () => {
     return (
       renderRows()
     )
  }

  const renderRows = () => {
    let rows = []
    for (let row = 0; row < rowCount; row++){
       rows.push(
         <Row>
           { renderCols() }
         </Row>
       )
    }
    return rows; 
  }

  const renderCols = () =>{
    let cols = []; 
    for (let col = 0; col < colCount; col++){
      if (index < children.length){
        cols.push(
          <Col>
            {children[index]}
          </Col> )
      }
      index ++; 
    }
    return cols;
  }

  return (
    <div>
      <Container>
         {buildGrid()}
      </Container>
    </div>
  )
}

export default GridSystem; 