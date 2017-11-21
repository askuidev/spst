import React from "react";
import { render } from "react-dom";
import FaMinusSquare from 'react-icons/lib/fa/minus-square'
import FaPlusSquare from 'react-icons/lib/fa/plus-square'


// Import React bootstrap
import ButtonGroup from './common/ButtonGroup';

class RebalanceDetailForm extends React.Component {
  constructor() {
    super();
    this.state = {
      frequency: "Annual",
      acceptedBy: "SHS2"
    };
  }
  onFrequencyChange = (selected, e) => {
    this.setState({
      frequency: selected
    })
  }
  onAcceptedChange = (e) => {
    this.setState({
      acceptedBy: e.target.value
    });
  }
  render() {
    const { frequency, acceptedBy } = this.state;
    return (
      <div className="allocationTableContainer" id="allocationTableContainer" style={{marginTop: "2px"}}>
        <div className="formContainer">
          <div className="col-sm-6">
            <div className="col-sm-6">
              <div className="row form-group no-margin">
                <div className="col-sm-4">
                  <label className="control-label"><span className="text-danger">*</span>Frequency</label>
                </div>
                <div className="col-sm-8">
                  <select
                    className="form-control"
                    onChange={this.onFrequencyChange}
                    value={frequency}>
                    <option>Month</option>
                    <option>Quarter</option>
                    <option selected>Annual</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row form-group">
                <div className="col-sm-4">
                  <label className="control-label"><span className="text-danger">*</span>Accepted By</label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Accepted By"
                    className="form-control"
                    value={acceptedBy}
                    onChange={this.onAcceptedChange} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="col-sm-8">
              <table className="table table-transparent no-border-tr">
                <tbody>
                  <tr>
                    <td>Next Rebalance</td>
                    <td>8/21/2017</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-sm-4">
              <table className="table table-transparent no-border-tr">
                <tbody>
                  <tr>
                    <td>Excluded Cash</td>
                    <td>$5,080</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RebalanceDetailForm;
