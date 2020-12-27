import React, { Component } from "react";
import Header from "./Components/Header";
import AllProductsContainer from "./Components/AllProductsContainer";
export default class App extends Component {
	render() {
		return (
			<div>
				<Header></Header>
				<AllProductsContainer></AllProductsContainer>
			</div>
		);
	}
}
