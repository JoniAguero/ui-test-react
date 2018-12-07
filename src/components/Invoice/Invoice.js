import React, { Component } from 'react'
import './Invoice.css';
export class Invoice extends Component {
  render() {
    return (
      <div className="invoice-container">
        <div className="invoice-title">
            <h4 className="title">Invoice</h4>
            <span className="span-title" data-toggle="tooltip" data-placement="top" title="Invoice Number">S03834754</span>
        </div>
        <div className="grid-invoice">
          <div className="grid-invoice-title">
            <p>INVOICE - REVISION</p>
          </div>
          <div className="grid-invoice-details">
            <p className="details-item">Invoice #</p>
            <p className="details-data">33-0092kk00</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Invoice
