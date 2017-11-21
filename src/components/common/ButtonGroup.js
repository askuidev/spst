import React, {PropTypes as t} from 'react';
import {Icon} from 'react-fa';

/**
 * A ButtonGroup whose buttons act like a radio button.
 * Options should be passed as a list of [value, display] tuples.
 * Buttons are set up so you can use e.target.name and e.target.value in your
 * onChange handler like you would with regular form inputs.
 */
class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { activeIndex = 0 } = this.props;
    this.setState({activeIndex});
  }
  onClick = (activeIndex, e) => {
    this.setState({ activeIndex });
  }
  getButtons(buttons = []) {
    const { activeIndex } = this.state;
    const { btnClass, withIcons } = this.props;
    return buttons.map(({text, iconClass}, index) => {
      let active = activeIndex === index ? "active" : "";
      return <button
        key={index}
        type="button"
        className={"btn btn-default "+active+" "+btnClass}
        onClick={this.onClick.bind(this, index)}>
        {withIcons?<span><Icon name={iconClass} /> {text}</span>:text}
      </button>
    })
  }
  render() {
    const { mainClass = "", buttons = ["Empty Button"], grouped } = this.props;
    return <div className={"button-group "+mainClass}>
      {grouped?
        <div className="btn-group grouped">
          {this.getButtons(buttons)}
        </div>:this.getButtons(buttons)}
    </div>
  }
}

export default ButtonGroup
