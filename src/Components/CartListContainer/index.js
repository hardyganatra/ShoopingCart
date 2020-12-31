import React, { Component } from "react";
import { CartListContainerStyles, CartHeader } from "./CartListContainerStyles";
import {
	getSHoopingCartProductsAction,
	AddItemtoCartAction,
	ClearCartAction,
} from "../../middleware/Action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class CartListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productData: [],
		};
	}
	getAllShopingCartProducts() {
		let req = {
			params: {
				auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
			},
		};
		this.props.getSHoopingCartProductsAction(req.params);
	}
	componentDidMount() {
		this.getAllShopingCartProducts();
	}
	componentDidUpdate(prevProps, prevState) {
		if (
			prevProps.ShoppingCartCheckOutProducts !==
			this.props.ShoppingCartCheckOutProducts
		) {
			this.setState({
				productData: this.props.ShoppingCartCheckOutProducts,
			});
		} else if (
			prevProps.productQuantitychanged !==
			this.props.productQuantitychanged
		) {
			this.getAllShopingCartProducts();
		}
	}
	optionChangeHandler(item, b) {
		const config = {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		};
		let body = {
			product_id: item.id,
			auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
			quantity: b.target.value,
		};
		this.props.AddItemtoCartAction(body, config);
	}
	render() {
		return this.state.productData.length > 0 ? (
			<CartHeader>
				<span>SHOOPING CART</span>
				<span>{`(${this.state.productData.length} items)`}</span>
				<button
					onClick={() => {
						this.props.ClearCartAction(
							this.props.ShoppingCartCheckOutProducts
						);
					}}
				>
					Clear Cart
				</button>
				<CartListContainerStyles>
					<div className="tableDiv">
						<table>
							<tr>
								<th>Item Details</th>
								<th>Quantity</th>
								<th>Rate</th>
								<th>Amount</th>
							</tr>
							{this.state.productData.map((item) => {
								return (
									<>
										<tr>
											<td>
												<div className="ItemDetailsContainer">
													<div className="productImageDiv">
														<img
															src={item.imageUrl}
															alt="Loading"
														></img>
													</div>
													<div className="productData">
														<div>{item.name}</div>
														<div>{item.unit}</div>
													</div>
												</div>
											</td>
											<td>
												<div>
													<div className="select-dropdown">
														<select
															onChange={this.optionChangeHandler.bind(
																this,
																item
															)}
														>
															<option value="0">
																0
															</option>
															<option value="1">
																1
															</option>
															<option value="2">
																2
															</option>
															<option value="3">
																3
															</option>
															<option value="4">
																4
															</option>
															<option value="5">
																5
															</option>
															<option
																value="3"
																selected
																style={{
																	display:
																		"none",
																}}
															>
																{
																	item.cartQuantity
																}
															</option>
														</select>
													</div>
												</div>
											</td>
											<td>
												&#8377;
												<span>{`${item.price}`}</span>
											</td>
											<td>
												&#8377;
												<span>{`${
													item.price *
													item.cartQuantity
												}`}</span>
											</td>
										</tr>
									</>
								);
							})}
							<tr>
								<h6>
									<Link to="/">{"< CONTINUE SHOOPING "}</Link>
								</h6>
							</tr>
						</table>
					</div>
					<div className="checkOutDiv">
						<h5>
							Total payable amount is
							<span>
								&#8377;
								{this.state.productData.reduce(
									(acc, currVal) => {
										return (
											acc +
											currVal.cartQuantity * currVal.price
										);
									},
									0
								)}
							</span>
						</h5>
					</div>
				</CartListContainerStyles>
			</CartHeader>
		) : (
			<div>Empty Cart</div>
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
		getSHoopingCartProductsAction: (params) =>
			dispatch(getSHoopingCartProductsAction(params)),
		AddItemtoCartAction: (body, config) =>
			dispatch(AddItemtoCartAction(body, config)),
		ClearCartAction: (postData) => dispatch(ClearCartAction(postData)),
		//ClearCartAction
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CartListContainer);
