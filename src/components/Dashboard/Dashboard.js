import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';

import './Dashboard.css';
export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar /> 
        <div className="dashboard-container">
          <div>
            <div className="grid-container">
              <div className="invoice">

              </div>
              <div className="diagram">

              </div>
              <div className="overview">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
