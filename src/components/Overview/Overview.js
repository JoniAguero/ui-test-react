import React, { Component } from 'react'
import './Overview.css';
import DetailsOverview from './DetailsOverview/DetailsOverview';
export class Overview extends Component {
  render() {
    return (
      <div className="overview-container">
        <div className="grid-overview">
          <div className="grid-overview-title">
            <p>OVERVIEW</p>
          </div>
          <div className="grid-overview-details1">
            <DetailsOverview item="Status" data="Active" active={true}/>
            <DetailsOverview item="Method" data="Multimodal"/>
            <DetailsOverview item="Capacity" data="LCL"/>
            <DetailsOverview item="Drayage" data="Pickup, Delivery"/>
          </div>
          <div className="grid-overview-details2">
            <DetailsOverview item="Incoterms" data="FOB"/>
            <DetailsOverview item="Service Options" data="Deconsolidation, Custom Clearence"/>
            <DetailsOverview item="" data=""/>
            <DetailsOverview item="Hazardous or forbidden commodities" data="Lithium Batteries, Hazmat, Other"/>  
          </div>
        </div>
      </div>
    )
  }
}

export default Overview
