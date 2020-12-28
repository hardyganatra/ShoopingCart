import React, { Component } from "react";
import CartListContainerStyles from "./CartListContainerStyles";

export default class index extends Component {
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
							<td>Alfreds Futterkiste</td>
							<td>Maria Anders</td>
							<td>Germany</td>
							<td>Germany</td>
						</tr>
						<tr>
							<td>Centro comercial Moctezuma</td>
							<td>Francisco Chang</td>
							<td>Mexico</td>
							<td>Germany</td>
						</tr>
						<tr>
							<td>Ernst Handel</td>
							<td>Roland Mendel</td>
							<td>Austria</td>
							<td>Germany</td>
						</tr>
						<tr>
							<td>Island Trading</td>
							<td>Helen Bennett</td>
							<td>UK</td>
							<td>Germany</td>
						</tr>
						<tr>
							<td>Laughing Bacchus Winecellars</td>
							<td>Yoshi Tannamuri</td>
							<td>Canada</td>
							<td>Germany</td>
						</tr>
						<tr>
							<td>Magazzini Alimentari Riuniti</td>
							<td>Giovanni Rovelli</td>
							<td>Italy</td>
							<td>Germany</td>
						</tr>
					</table>
				</div>
				<div className="checkOutDiv"></div>
			</CartListContainerStyles>
		);
	}
}
