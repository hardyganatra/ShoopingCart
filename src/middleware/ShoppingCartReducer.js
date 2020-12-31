const initialState = {
	ShoppingCartProducts: [],
	ShoppingCartProductsCheckOut: [],
	productQuantitychanged: {},
};
const ShoppingCartReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case "GET_SHOOPING_PRODUCTS":
			newState.ShoppingCartProducts = action.payload;
			break;
		//GET_SHOOPING_CART_PRODUCTS
		case "GET_SHOOPING_CART_PRODUCTS":
			newState.ShoppingCartProductsCheckOut = action.payload;
			break;
		// //REFRESH_PRODUCT_CART_LIST
		case "REFRESH_PRODUCT_CART_LIST":
			newState.productQuantitychanged = action.payload;
			break;
		default:
			break;
	}
	return newState;
};

export default ShoppingCartReducer;
