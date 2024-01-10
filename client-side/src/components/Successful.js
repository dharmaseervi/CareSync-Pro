import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import sucessImf from '../assets/success.png'
export default function SuccessPage(props) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      {props.loading ? <div>
        <h3>Success</h3>
        <img src={sucessImf} style={{ mixBlendMode: 'multiply' }} alt="" />
      </div>
        : <div>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>}
    </div>
  );
}