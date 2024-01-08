import React from "react";
import Spinner from 'react-bootstrap/Spinner';
export default function SuccessPage(props) {
  return (
    <div>
      {props.loading ? <div>
        <h3>Success</h3>
      </div>
        : <div>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>}
    </div>
  );
}