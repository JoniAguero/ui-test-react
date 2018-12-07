import React, { Component } from 'react'
import './Invoice.css';
import DetailsInvoice from './DetailsInvoice/DetailsInvoice';
import BillInvoice from './BillInvoice/BillInvoice';
import BalanceInvoice from './BalanceInvoice/BalanceInvoice';
export class Invoice extends Component {
  render() {
    return (
      <div className="invoice-container">
        <div className="invoice-title">
            <h4 className="title">Invoice</h4>
            <span className="span-title" data-toggle="tooltip" data-placement="top" title="Tooltip on top">S03834754</span>
        </div>
        <div className="grid-invoice">
          <div className="grid-invoice-title">
            <p>INVOICE - REVISION</p>
          </div>
          <div className="grid-invoice-details">
            <DetailsInvoice item="Invoice #" data="33-0092kk00"/>
            <DetailsInvoice item="Date" data="7/31/18"/>
            <DetailsInvoice item="Due Date" data="7/31/18"/>
            <DetailsInvoice item="Terms" data="Net 0"/>
          </div>
          <div className="grid-invoice-bill">
            <BillInvoice />
          </div>
          <div className="grid-invoice-balance">
            <BalanceInvoice />
          </div>
        </div>
      </div>
    )
  }
}

export default Invoice