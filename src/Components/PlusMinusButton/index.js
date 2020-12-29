import React, { Component } from "react";
import PlusMinusButtonStyles from "./PlusMinusButtonStyles";

class PlusMinusButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentVal: 1,
		};
	}
	DecVal = () => {
		this.setState({
			currentVal:
				this.state.currentVal !== 1 ? this.state.currentVal - 1 : 1,
		});
	};
	IncVal = () => {
		this.setState({
			currentVal: this.state.currentVal + 1,
		});
	};
	render() {
		return (
			<PlusMinusButtonStyles>
				<div className="minus" onClick={this.DecVal}>
					-
				</div>
				<div className="val">{this.state.currentVal}</div>
				<div className="plus" onClick={this.IncVal}>
					+
				</div>
			</PlusMinusButtonStyles>
		);
	}
}

export default PlusMinusButton;
