import React, { Component } from "react";
import CartListContainerStyles from "./CartListContainerStyles";
import { getSHoopingCartProductsAction } from "../../middleware/Action";
import { connect } from "react-redux";
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
		}
	}
	optionChangeHandler(event) {
		console.log("optonCHange", event.target.value);
	}
	render() {
		return this.state.productData.length > 0 ? (
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
														onChange={
															this
																.optionChangeHandler
														}
													>
														<option value="Option 1">
															1
														</option>
														<option value="Option 2">
															2
														</option>
														<option value="Option 3">
															3
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
											<span>{`${item.price}`}</span>
										</td>
									</tr>
								</>
							);
						})}
					</table>
				</div>
				<div className="checkOutDiv"></div>
			</CartListContainerStyles>
		) : (
			<div>Empty Cart</div>
		);
	}
}
const mapStateToProps = (state) => {
	console.log("Cart", state.ShoppingCartReducer.ShoppingCartProductsCheckOut);
	return {
		ShoppingCartCheckOutProducts:
			state.ShoppingCartReducer.ShoppingCartProductsCheckOut,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getSHoopingCartProductsAction: (params) =>
			dispatch(getSHoopingCartProductsAction(params)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CartListContainer);
