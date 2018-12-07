import React from 'react'
import "./DetailsInvoice.css";
export default function DetailsInvoice(props) {
  return (
    <div className="container-invoice-details">
      <p className="details-item">{props.item}</p>
      <p className="details-data">{props.data}</p>
    </div>
  )
}


