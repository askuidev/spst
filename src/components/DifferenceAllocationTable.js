import React from "react";
import { render } from "react-dom";
import FaPlusSquare from 'react-icons/lib/fa/plus-square'
import FaMinusSquare from 'react-icons/lib/fa/minus-square'
import FaFlag from 'react-icons/lib/fa/flag'
import FaInfoCircle from 'react-icons/lib/fa/info-circle'
import FaCheckCircle from 'react-icons/lib/fa/check-circle'

import ButtonGroup from './common/ButtonGroup';

const assetData = [
  {
    color: "#83C7BA",
    assetClass: "cash",
    difference: "5%"
  },
  {
    color: "#59036F",
    assetClass: "fixed income",
    difference: "5%"
  },
  {
    color: "#025B97",
    assetClass: "cash",
    difference: "5%"
  },
  {
    color: "#FF9800",
    assetClass: "cash",
    difference: "5%"
  }
];

class TableRow extends React.Component {
  constructor(props) {
    super(props);
  }
  getStyle(prop, value) {
    const style = {};
    style[prop] = value;
    return style;
  }
  getColorBox(color) {
    return <span className="square40" style={this.getStyle("backgroundColor",color)}></span>
  }
  render() {
    const { data } = this.props;
    return <tr>
      <td style={this.getStyle("padding","4px")}>{this.getColorBox(data.color)}</td>
      <td>{data.assetClass}</td>
      <td>{data.difference}</td>
    </tr>
  }
}

class AssetAllocationTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: assetData
    };
  }
  getStyle(prop, value) {
    const style = {};
    style[prop] = value;
    return style;
  }
  renderRows() {
    const { data } = this.state;
    return data.map((row, index) => <TableRow key={index} data={row} />)
  }
  render() {
    return (
      <div className="allocationTableContainer" id="allocationTableContainer">
        <div className="targetAllocationTableContainer">
          <table className="table fixed-table table-striped">
            <tbody>
              <tr>
                <td style={this.getStyle("width", 30)}></td>
                <td style={this.getStyle("width", 100)}>Asset Class</td>
                <td style={this.getStyle("width", 50)}>Difference</td>
              </tr>
              {this.renderRows()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AssetAllocationTable;
