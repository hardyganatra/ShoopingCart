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
		width: 70%;
		height: 100px;
		padding-left: 25px;
	}
	.item {
		display: flex;
		flex-direction: column;
		width: 24%;
		height: 200px;
		border: 2px solid black;
		margin: 3px;
	}
	.Inneritem {
		margin-top: 20px;
		padding-left: 10px;
	}
	@media (max-width: 1000px) {
		.item {
			width: 48%;
		}
	}
`;

export default AllProductsContainer;
