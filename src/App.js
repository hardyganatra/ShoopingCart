import React, { Component } from "react";
import Header from "./Components/Header";
import AllProductsContainer from "./Components/AllProductsContainer";
import CartListContainer from "./Components/CartListContainer";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route
						path="/"
						exact
						render={() => {
							return (
								<div>
									<Header></Header>
									<AllProductsContainer></AllProductsContainer>
								</div>
							);
						}}
					></Route>
					<Route
						path="/cartItems"
						exact
						render={() => {
							return (
								<div>
									<Header></Header>
									<CartListContainer></CartListContainer>
								</div>
							);
						}}
					></Route>
				</div>
			</Router>
		);
	}
}

export default App;
