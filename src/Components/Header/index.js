import React from "react";
import HeaderStyles from "./HeaderStyles";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
	const location = useLocation();
	console.log("window", location.pathname);
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
						<Link to="/cartItems"> | CART</Link>
					</span>
				)}
			</h3>
		</HeaderStyles>
	);
}
