import styled from "styled-components/macro";

const AllProductsContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	.item {
		width: 24%;
		height: 150px;
		border: 2px solid black;
	}
`;

export default AllProductsContainer;
