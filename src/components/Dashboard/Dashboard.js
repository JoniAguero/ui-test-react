import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';

import './Dashboard.css';
import Invoice from '../Invoice/Invoice';
import Overview from '../Overview/Overview';
import DiagramMap from '../DiagramMap/DiagramMap';
export class Dashboard extends Component {
  render() {
    return (
      <div className="full-container">
        <div className="navbar">
          <Navbar /> 
        </div>
        <div className="dashboard-container">
          <div>
            <div className="grid-container">
              <div className="invoice">
                <Invoice />
              </div>
              <div className="diagram">
                <DiagramMap />
              </div>
              <div className="overview">
                <Overview />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
