import React, { Component } from "react";
import CartListContainerStyles from "./CartListContainerStyles";

export default class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productData: [
				{
					id: 251,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Malai Paneer",
					unit: "grams",
					price: 114,
					imageUrl:
						"https://image1.jdomni.in/product/80/4D/9E/Orange-Seedless-Imported_1493985663382.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
			],
		};
	}
	render() {
		return (
			<CartListContainerStyles>
				<div className="tableDiv">
					<table>
						<tr>
							<th>Item Details</th>
							<th>Quantity</th>
							<th>Rate</th>
							<th>Amount</th>
						</tr>
						<tr>
							<td>
								<div className="ItemDetailsContainer">
									<div className="productImageDiv">
										<img
											src={
												this.state.productData[0]
													.imageUrl
											}
										></img>
									</div>
									<div className="productData">
										<div>
											{this.state.productData[0].name}
										</div>
										<div>
											{this.state.productData[0].unit}
										</div>
									</div>
								</div>
							</td>
							<td>
								<div>
									<div class="select-dropdown">
										<select>
											<option value="Option 1">1</option>
											<option value="Option 2">2</option>
											<option value="Option 3">3</option>
										</select>
									</div>
								</div>
							</td>
							<td>
								&#8377;
								<span>{`${this.state.productData[0].price}`}</span>
							</td>
							<td>
								&#8377;
								<span>{`${this.state.productData[0].price}`}</span>
							</td>
						</tr>
						<tr>
							<td>
								<div className="ItemDetailsContainer">
									<div className="productImageDiv">
										<img
											src={
												this.state.productData[0]
													.imageUrl
											}
										></img>
									</div>
									<div className="productData">
										<div>
											{this.state.productData[0].name}
										</div>
										<div>
											{this.state.productData[0].unit}
										</div>
									</div>
								</div>
							</td>
							<td>
								<div>
									<div class="select-dropdown">
										<select>
											<option value="Option 1">1</option>
											<option value="Option 2">2</option>
											<option value="Option 3">3</option>
										</select>
									</div>
								</div>
							</td>
							<td>
								&#8377;
								<span>{`${this.state.productData[0].price}`}</span>
							</td>
							<td>
								&#8377;
								<span>{`${this.state.productData[0].price}`}</span>
							</td>
						</tr>
						<tr>
							<td>
								<div className="ItemDetailsContainer">
									<div className="productImageDiv">
										<img
											src={
												this.state.productData[0]
													.imageUrl
											}
										></img>
									</div>
									<div className="productData">
										<div>
											{this.state.productData[0].name}
										</div>
										<div>
											{this.state.productData[0].unit}
										</div>
									</div>
								</div>
							</td>
							<td>
								<div>
									<div class="select-dropdown">
										<select>
											<option value="Option 1">1</option>
											<option value="Option 2">2</option>
											<option value="Option 3">3</option>
										</select>
									</div>
								</div>
							</td>
							<td>
								&#8377;
								<span>{`${this.state.productData[0].price}`}</span>
							</td>
							<td>
								&#8377;
								<span>{`${this.state.productData[0].price}`}</span>
							</td>
						</tr>
						<tr>
							<td>
								<div className="ItemDetailsContainer">
									<div className="productImageDiv">
										<img
											src={
												this.state.productData[0]
													.imageUrl
											}
										></img>
									</div>
									<div className="productData">
										<div>
											{this.state.productData[0].name}
										</div>
										<div>
											{this.state.productData[0].unit}
										</div>
									</div>
								</div>
							</td>
							<td>
								<div>
									<div class="select-dropdown">
										<select>
											<option value="Option 1">1</option>
											<option value="Option 2">2</option>
											<option value="Option 3">3</option>
										</select>
									</div>
								</div>
							</td>
							<td>
								&#8377;
								<span>{`${this.state.productData[0].price}`}</span>
							</td>
							<td>
								&#8377;
								<span>{`${this.state.productData[0].price}`}</span>
							</td>
						</tr>
					</table>
				</div>
				<div className="checkOutDiv"></div>
			</CartListContainerStyles>
		);
	}
}
