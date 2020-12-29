import React from "react";
import HeaderStyles from "./HeaderStyles";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => {
	const location = useLocation();
	console.log("window", props);
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
						<Link to="/cartItems">
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
