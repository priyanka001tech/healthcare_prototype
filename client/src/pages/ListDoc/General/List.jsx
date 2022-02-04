import React from "react";

const List = (props) => {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <div className="card-body body">
            <h5 className="card-title docname">{props.name}</h5>
            <p className="card-text docsubname">
              {props.degree}, {props.specialist} ,{props.email}
            </p>
            <button type="button" className="btn btn-info btn button">
              Chat
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
