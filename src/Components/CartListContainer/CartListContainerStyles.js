import styled from "styled-components/macro";

const CartListContainerStyles = styled.div`
	padding-top: 50px;
	display: flex;

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
		height: 50vh;
		background-color: gainsboro;
	}
`;
export default CartListContainerStyles;
