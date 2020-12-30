import HeaderStyles from "./HeaderStyles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component } from "react";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scroll: null,
		};
	}
	componentDidMount() {
		if (window.location.pathname === "/") {
			const scrollPosition = parseInt(
				sessionStorage.getItem("scrollPosition")
			);
			this.setState({
				scroll: scrollPosition,
			});
		}
		if (window.location.pathname === "/cartItems") {
			const scrollPosition = parseInt(
				sessionStorage.getItem("scrollPosition")
			);
			this.setState({
				scroll: scrollPosition + 1,
			});
		}
	}

	// handle scroll position after content load
	handleScrollPosition = () => {
		const scrollPosition = sessionStorage.getItem("scrollPosition");
		if (scrollPosition) {
			console.log("scroll", 0, parseInt(scrollPosition));
			window.scrollTo(0, parseInt(scrollPosition));
		}
	};
	///////////////////////////////////////////
	getSnapshotBeforeUpdate(pP, pS) {}
	componentDidUpdate(pP, pS) {
		console.log("updateScroll", pS.scroll, this.state.scroll);
		if (
			pS.scroll !== this.state.scroll &&
			window.location.pathname === "/"
		) {
			this.handleScrollPosition();
		}
	}

	// store position in sessionStorage
	handleClick = (e) => {
		sessionStorage.setItem("scrollPosition", window.pageYOffset);
	};
	render() {
		console.log("renderscroll", this.state.scroll);
		return (
			<HeaderStyles>
				<h3 className="headerText">
					<span>
						<Link to="/">{`HOME`}</Link>
					</span>
					{window.location.pathname === "/cartItems" ? null : (
						<span>
							<Link to="/cartItems" onClick={this.handleClick}>
								{" "}
								| CART
								<span>
									({" "}
									{
										this.props.ShoppingCartCheckOutProducts
											.length
									}{" "}
									)
								</span>
							</Link>
						</span>
					)}
				</h3>
			</HeaderStyles>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ShoppingCartCheckOutProducts:
			state.ShoppingCartReducer.ShoppingCartProductsCheckOut,
	};
};
export default connect(mapStateToProps, null)(Header);
