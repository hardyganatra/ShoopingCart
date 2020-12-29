import styled from "styled-components/macro";

const PlusMinusButtonStyles = styled.div`
	display: flex;
	height: 35px;
	max-width: 60px;
	background-color: lightgray;
	border-radius: 45%;
	color: black;
	margin-left: 40px;
	margin-top: 10px;

	border: 2px solid black;
	color: black;
	.minus,
	.plus,
	.val {
		margin: 5px;
	}
	.plus,
	.minus {
		cursor: pointer;
	}
`;

export default PlusMinusButtonStyles;
