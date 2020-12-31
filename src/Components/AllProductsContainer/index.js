import React, { Component } from "react";
import AllProductsContainer from "./AllProductsContainerStyles";
import PlusMinusButton from "../PlusMinusButton";
import _ from "lodash";
import {
	getSHoopingProductsAction,
	AddItemtoCartAction,
	getSHoopingCartProductsAction,
} from "../../middleware/Action";
import { connect } from "react-redux";

class AllProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			appProdustsData: null,
			CartproductData: [],
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
	getAllShopingProducts() {
		let req = {
			params: {
				auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
				pageNo: 1,
				itemsPerPage: 50,
			},
		};
		this.props.getSHoopingProductsAction(req.params);
	}
	addItemToCart = (item) => {
		const config = {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		};
		let body = {
			product_id: item.id,
			auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
			quantity: 1,
		};
		this.props.AddItemtoCartAction(body, config);
	};
	componentDidMount() {
		this.getAllShopingProducts();
		this.getAllShopingCartProducts();
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevProps.ShoppingCartProducts !== this.props.ShoppingCartProducts
		) {
			this.setState({
				appProdustsData: this.props.ShoppingCartProducts,
			});
		} else if (
			prevProps.ShoppingCartCheckOutProducts !==
			this.props.ShoppingCartCheckOutProducts
		) {
			this.setState({
				CartproductData: this.props.ShoppingCartCheckOutProducts,
			});
		} else if (
			prevProps.productQuantitychanged !==
			this.props.productQuantitychanged
		) {
			this.getAllShopingCartProducts();
		}
	}
	render() {
		return (
			<AllProductsContainer>
				{this.state.appProdustsData !== null ? (
					this.state.appProdustsData.map((item) => {
						return (
							<div className="item" key={item.id}>
								{item.imageUrl.indexOf("https") === -1 ? (
									<h3>No Image Found</h3>
								) : (
									<img
										src={item.imageUrl}
										alt="loading"
									></img>
								)}

								<div className="Inneritem">
									<h5>{item.name}</h5>
									<h5>
										&#8377;
										<span>{`${item.price}`}</span>
									</h5>
									{_.some(this.state.CartproductData, {
										id: item.id,
									}) ? (
										<PlusMinusButton
											productId={item}
										></PlusMinusButton>
									) : (
										<>
											<button
												onClick={this.addItemToCart.bind(
													this,
													item
												)}
											>
												+
											</button>
											<span>ADD</span>
										</>
									)}
								</div>
							</div>
						);
					})
				) : (
					<h1>Loading Products</h1>
				)}
			</AllProductsContainer>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		ShoppingCartProducts: state.ShoppingCartReducer.ShoppingCartProducts,
		productQuantitychanged:
			state.ShoppingCartReducer.productQuantitychanged,
		ShoppingCartCheckOutProducts:
			state.ShoppingCartReducer.ShoppingCartProductsCheckOut,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getSHoopingProductsAction: (params) =>
			dispatch(getSHoopingProductsAction(params)),
		AddItemtoCartAction: (body, config) =>
			dispatch(AddItemtoCartAction(body, config)),
		getSHoopingCartProductsAction: (params) =>
			dispatch(getSHoopingCartProductsAction(params)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
