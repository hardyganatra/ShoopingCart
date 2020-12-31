import styled from "styled-components/macro";

export const CartListContainerStyles = styled.div`
	padding-top: 20px;
	display: flex;
	height: 200px;
	table {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 100%;
	}

	td {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}
	th {
		border: none;
		background-color: #e8e8e8;
		text-align: left;
		padding: 8px;
	}
	.tableDiv {
		width: 70%;
		margin-right: 10px;
	}
	.checkOutDiv {
		width: 25%;
		height: 30vh;
		background-color: white;
		border: 1px solid black;
		padding: 10px;
	}
	.ItemDetailsContainer {
		display: flex;
	}
	.productImageDiv {
		width: 27%;
		border: 2px solid #e8e8e8;
		height: 100px;
	}
	.productImageDiv > img {
		width: 80px;
		height: 80px;
	}
	.productData {
		margin: 10px;
		width: 70%;
		height: 100px;
	}
	.productData div:nth-of-type(2) {
		margin-top: 40px;
	}
	.select-dropdown {
		display: flex;
		justify-content: center;
	}
	.select-dropdown > select {
		width: 52%;
		background-color: #f5f5f5;
		font-size: 1rem;
		font-weight: normal;
		max-width: 100%;
		padding: 10px 10px 10px 2px;
		border: 1px solid #e0e0e0;
	}
	a {
		text-decoration: none;
		border: 1px solid red;
		color: red;
		padding: 10px;
		margin-left: 30px;
	}
	h5 > span {
		margin-left: 10px;
	}
`;

export const CartHeader = styled.div`
	button {
		margin-top: 60px;
		color: black;
		cursor: pointer;
		border: none;
		color: blue;
		margin-left: 10px;
		background-color: white;
	}
	span: nth-of-type(2) {
		margin-left: 10px;
	}
	span: nth-of-type(1) {
		font-weight: bold;
		margin-left: 10px;
	}
`;
// export default CartListContainerStyles;
