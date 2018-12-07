import React, { Component } from 'react'
import './Invoice.css';
export class Invoice extends Component {
  render() {
    return (
      <div className="invoice-container">
        <div className="invoice-title">
            <h4 className="title">Invoice</h4>
            <span className="span-title">S03834754</span>
        </div>
      </div>
    )
  }
}

export default Invoice
