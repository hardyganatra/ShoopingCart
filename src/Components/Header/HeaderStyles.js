import styled from "styled-components/macro";

const Header = styled.div`
	position: fixed;
	height: 50px;
	background-color: brown;
	width: 100%;
	text-align: center;
	color: whitesmoke;
	cursor: pointer;
	.headerText {
		margin: 0;
		padding-top: 10px;
	}
	.headerText > span {
		margin-left: 10px;
		cursor: pointer;
	}
`;
export default Header;
