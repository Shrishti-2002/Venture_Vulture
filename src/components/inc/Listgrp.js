import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

function Listgrp(props) {
  return (
    <div className="container mt-4 pt-4 mb-4">
    <ListGroup as="ul">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div style={{textAlign:"left"}}className="fw-bold">{props.subheading1}</div>
          {props.text1}
        </div>
        <span style={{textAlign:"left"}} className="badge btn-default">new updates</span>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div style={{textAlign:"left"}} className="fw-bold">{props.subheading2}</div>
          {props.text2}
        </div>
        <span style={{textAlign:"left"}} className="badge btn-default">learn more</span>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div style={{textAlign:"left"}} className="fw-bold">{props.subheading3}</div>
          {props.text3}
        </div>
        <span style={{textAlign:"left"}} className="badge btn-default">view opportunitis</span>
      </ListGroup.Item>
    </ListGroup>
    </div>
    );
}

export default Listgrp;
