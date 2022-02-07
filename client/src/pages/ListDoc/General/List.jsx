import React from "react";

const List = (props) => {
  console.log(props.senderID + " " + props.receiverID);
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <div className="card-body body">
            <h5 className="card-title docname">{props.name}</h5>
            <p className="card-text docsubname">
              {props.degree}, {props.specialist} ,{props.email}
            </p>

            <button
              onClick={() =>
                props.send_call_req(props.senderID, props.receiverID)
              }
              className="btn btn-info btn button"
            >
              Chat
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
