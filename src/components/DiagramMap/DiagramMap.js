import React, { Component } from 'react'
import './DiagramMap.css';
import Diagram from './Diagram/Diagram';
import Map from './Map/Map';
export class DiagramMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: 'diagram'
        };
    }

    showDiagram = (e) => {
        e.preventDefault();
        console.log('showDiagram.');
        this.setState({
            show: 'diagram'
        })
    }

    showMap = (e) => {
        e.preventDefault();
        console.log('showMap.');
        this.setState({
            show: 'map'
        })
    }
  render() {
    return (
      <div className="diagram-map-container">
        <div className="d-flex">
            <div className="mr-auto p-2 title-diagram"></div>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-diagram btn-light btn-sm active" onClick={this.showDiagram}>
                    <input type = "radio"
                    name = "options"
                    id = "option1"
                    autoComplete = "off"
                    /> Diagram
                </label>
                <label className="btn btn-map btn-light btn-sm" onClick={this.showMap}>
                    <input type="radio" name="options" id="option2" autoComplete="off" /> Map
                </label>
            </div>
        </div>
        <div className="diagram-text">Text</div>
        <div className="diagram-container">
            {
                this.state.show === 'diagram' ? <Diagram /> : <Map />
            } 
        </div>
      </div>
    )
  }
}

export default DiagramMap
