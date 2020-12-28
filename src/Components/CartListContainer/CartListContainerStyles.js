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
		//////////////
		padding: 10px 10px 10px 2px;
		border: 1px solid #e0e0e0;
	}
`;

export default CartListContainerStyles;
