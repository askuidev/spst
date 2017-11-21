import React from "react";
import FaMinusSquare from 'react-icons/lib/fa/minus-square'
import FaPlusSquare from 'react-icons/lib/fa/plus-square'


class AssetAllocationTable extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div className="allocationTableContainer">
        <table className="table table-bordered text-light assetAllocationTable">
          <tbody>
            <tr className="bg-light-grey text-center">
              <td rowSpan="2" width="20%">Asset Class</td>
              <td colSpan="2">Current Allocation</td>
              <td colSpan="2">Proposed Allocation</td>
              <td colSpan="2">Drift( Proposed and PPA )</td>
              <td colSpan="2">PPA asset location</td>
            </tr>
            <tr className="bg-light-grey text-center">
              <td>% Percentage</td>
              <td>$ Dollar</td>
              <td>% Percentage</td>
              <td>$ Dollar</td>
              <td>% Percentage</td>
              <td>$ Dollar</td>
              <td>% Percentage</td>
              <td>$ Dollar</td>
            </tr>
            <tr className="bg-light-cyan">
              <td>cash and cash investments</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
            </tr>
            <tr className="bg-dark-voilet">
              <td>fixed income</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
            </tr>
            <tr className="bg-dark-blue">
              <td>equity</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
            </tr>
            <tr className="bg-dark-orange">
              <td>alternatives</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
            </tr>
            <tr className="bg-dark-red">
              <td>derivatives</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
            </tr>
            <tr className="bg-dark-grey">
              <td>other</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
            </tr>
            <tr className="bg-white text-dark">
              <td>total</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td>21.12 %</td>
              <td>21,716 $</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="bg-white text-dark">
              <td>Cash addition/withdrawl</td>
              <td></td>
              <td></td>
              <td></td>
              <td>21,716 $</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="bg-grey no-border-tr">
              <td>Net balance</td>
              <td></td>
              <td></td>
              <td></td>
              <td>21,716 $</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AssetAllocationTable;
