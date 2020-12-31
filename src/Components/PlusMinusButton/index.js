import React, { Component } from "react";
import PlusMinusButtonStyles from "./PlusMinusButtonStyles";
import { connect } from "react-redux";
import { AddItemtoCartAction } from "../../middleware/Action";

class PlusMinusButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentVal: this.props.productId.cartQuantity,
		};
	}
	DecVal = () => {
		this.setState({
			currentVal:
				this.state.currentVal !== 0 ? this.state.currentVal - 1 : 0,
		});
		const config = {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		};
		let body = {
			product_id: this.props.productId.id,
			auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
			quantity: this.state.currentVal,
		};
		this.props.AddItemtoCartAction(body, config);
	};
	IncVal = () => {
		this.setState({
			currentVal: this.state.currentVal + 1,
		});
	};

	inccartQuantity = (quantity) => {
		const config = {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		};
		let body = {
			product_id: this.props.productId.id,
			auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
			quantity: quantity,
		};
		this.props.AddItemtoCartAction(body, config);
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.currentVal !== this.state.currentVal) {
			this.inccartQuantity(this.state.currentVal);
		}
	}
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

const mapStateToProps = (state) => {
	return {
		ShoppingCartCheckOutProducts:
			state.ShoppingCartReducer.ShoppingCartProductsCheckOut,
		productQuantitychanged:
			state.ShoppingCartReducer.productQuantitychanged,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		AddItemtoCartAction: (body, config) =>
			dispatch(AddItemtoCartAction(body, config)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(PlusMinusButton);
