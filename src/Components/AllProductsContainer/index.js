import React, { Component } from "react";
import AllProductsContainer from "./AllProductsContainerStyles";
import {
	getSHoopingProductsAction,
	AddItemtoCartAction,
} from "../../middleware/Action";
import { connect } from "react-redux";

class AllProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			appProdustsData: null,
		};
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
		console.log("Added Item", item.id);
		const config = {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		};
		let body = {
			product_id: 157,
			auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
			quantity: 0,
		};
		this.props.AddItemtoCartAction(body, config);
	};
	componentDidMount() {
		this.getAllShopingProducts();
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevProps.ShoppingCartProducts !== this.props.ShoppingCartProducts
		) {
			this.setState({
				appProdustsData: this.props.ShoppingCartProducts,
			});
		}
	}
	render() {
		console.log(this.state.appProdustsData, "init");
		return (
			<AllProductsContainer>
				{this.state.appProdustsData !== null ? (
					this.state.appProdustsData.map((item) => {
						return (
							<div className="item">
								<img src={item.imageUrl} alt="loading"></img>
								<div className="Inneritem">
									<h5>{item.name}</h5>
									<h5>
										&#8377;
										<span>{`${item.price}`}</span>
									</h5>
									<button
										onClick={this.addItemToCart.bind(
											this,
											item
										)}
									>
										+
									</button>
									<span>ADD</span>
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
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getSHoopingProductsAction: (params) =>
			dispatch(getSHoopingProductsAction(params)),
		AddItemtoCartAction: (body, config) =>
			dispatch(AddItemtoCartAction(body, config)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
