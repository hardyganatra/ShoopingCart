const initialState = {
	ShoppingCartProducts: "EMpty-list",
};
const ShoppingCartReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case "GET_SHOOPING_PRODUCTS":
			console.log("reducer  ", action.payload);
			newState.ShoppingCartProducts = action.payload;
			break;
		default:
			break;
	}
	return newState;
};

export default ShoppingCartReducer;
