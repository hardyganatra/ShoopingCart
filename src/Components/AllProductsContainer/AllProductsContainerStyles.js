import styled from "styled-components/macro";

const AllProductsContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	margin: 0 auto;
	h5 {
		margin: 0;
	}
	img {
		width: 170px;
		height: 120px;
		padding-left: 79px;
	}
	.item {
		display: flex;
		flex-direction: column;
		width: 24%;
		height: 200px;
		/* border: 2px solid black; */
		margin: 3px;
	}
	.Inneritem {
		margin-top: 20px;
		padding-left: 54px;
	}
	.Inneritem > span {
		margin-left: 10px;
		color: red;
		font-weight: bold;
		margin-top: 10px;
	}
	button {
		background-color: red; /* Green */
		border: none;
		color: white;
		text-align: center;
		text-decoration: none;
		font-size: 16px;
		border-radius: 50%;
		cursor: pointer;
		margin-top: 10px;
	}

	@media (max-width: 1000px) {
		.item {
			width: 48%;
		}
	}
`;

export default AllProductsContainer;
