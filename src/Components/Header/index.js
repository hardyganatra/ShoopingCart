import React, { useEffect } from "react";
import HeaderStyles from "./HeaderStyles";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => {
	const location = useLocation();
	console.log("window", props);
	// store position in sessionStorage
	const handleClick = (e) => {
		if (location.pathname === "/") {
			sessionStorage.setItem("scrollPosition", window.pageYOffset);
		}
	};
	useEffect(() => {
		handleScrollPosition();
	});
	const handleScrollPosition = () => {
		if (location.pathname === "/") {
			const scrollPosition = sessionStorage.getItem("scrollPosition");
			if (scrollPosition) {
				console.log("scrollPosition1234", scrollPosition);
				window.scrollTo(0, scrollPosition);
			}
			sessionStorage.removeItem("scrollPosition");
		}
	};
	return (
		<HeaderStyles>
			<h3 className="headerText">
				{/* {location.pathname === "/" ? (
					<span>
						<Link to="/">{`HOME   |`}</Link>
					</span>
				) : null} */}

				<span>
					<Link to="/">{`HOME`}</Link>
				</span>
				{location.pathname === "/cartItems" ? null : (
					<span>
						<Link to="/cartItems" onClick={handleClick}>
							{" "}
							| CART
							<span>
								( {props.ShoppingCartCheckOutProducts.length} )
							</span>
						</Link>
					</span>
				)}
			</h3>
		</HeaderStyles>
	);
};
const mapStateToProps = (state) => {
	return {
		ShoppingCartCheckOutProducts:
			state.ShoppingCartReducer.ShoppingCartProductsCheckOut,
	};
};
export default connect(mapStateToProps, null)(Header);
