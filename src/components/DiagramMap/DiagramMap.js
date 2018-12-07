import React, { Component } from 'react'
import './DiagramMap.css';
import Diagram from './Diagram/Diagram';
export class DiagramMap extends Component {
  render() {
    return (
      <div className="diagram-map-container">
        <div className="d-flex">
            <div className="mr-auto p-2 title-diagram"></div>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-diagram btn-light btn-sm active">
                    <input type="radio" name="options" id="option1" autoComplete="off"/> Diagram
                </label>
                <label className="btn btn-map btn-light btn-sm">
                    <input type="radio" name="options" id="option2" autoComplete="off" /> Map
                </label>
            </div>
        </div>
        <div className="diagram-text">Text</div>
        <div className="diagram-container">
            <Diagram />
        </div>
      </div>
    )
  }
}

export default DiagramMap
