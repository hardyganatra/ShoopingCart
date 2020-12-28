const initialState = {
	ShoppingCartProducts: [],
	ShoppingCartProductsCheckOut: [],
};
const ShoppingCartReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case "GET_SHOOPING_PRODUCTS":
			newState.ShoppingCartProducts = action.payload;
			break;
		//GET_SHOOPING_CART_PRODUCTS
		case "GET_SHOOPING_CART_PRODUCTS":
			console.log("reducer  ", action.payload);
			newState.ShoppingCartProductsCheckOut = action.payload;
			break;
		default:
			break;
	}
	return newState;
};

export default ShoppingCartReducer;
