import React from 'react'
import "./DetailsOverview.css";

const Active = (props) => {
  const active = props.data.active;
  if (active && active !== undefined) {
    return <p className="details-data-active"><span className="icon"><i className="fas fa-check"></i></span>{props.data.data}</p>;
  }
  return <p className="details-data">{props.data.data}</p>;
}
export default function DetailsOverview(props) {
  return (
    <div className="container-overview-details">
      <p className="details-item">{props.item}</p>
      <Active data={props} />
    </div>
  )
}