import axios from "axios";
import qs from "querystring";

export const getSHoopingProducts = (params) =>
	axios
		.get(
			"http://omega.jdomni.com/omni-automation-tools/training/getAllProducts",
			{
				params,
			}
		)
		.then();
export const getSHoopingProductsAction = (requestParam) => {
	return (dispatch) => {
		getSHoopingProducts(requestParam)
			.then((res) => {
				dispatch(getSHoopingProductsSuccess(res.data.products));
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

const getSHoopingProductsSuccess = (val) => {
	return { type: "GET_SHOOPING_PRODUCTS", payload: val };
};

//getSHoopingCartProductsAction
export const getSHoopingCartProduct = (params) =>
	axios
		.get(
			"http://omega.jdomni.com/omni-automation-tools/training/getAllCartItems",
			{
				params,
			}
		)
		.then();
export const getSHoopingCartProductsAction = (requestParam) => {
	return (dispatch) => {
		getSHoopingCartProduct(requestParam)
			.then((res) => {
				console.log("CartList", res);
				dispatch(getSHoopingCartProductsActionSuccess(res.data));
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

const getSHoopingCartProductsActionSuccess = (val) => {
	return { type: "GET_SHOOPING_CART_PRODUCTS", payload: val };
};
/// Post Request for adding Item to cart
export const AddItemtoCart = (body, headers) =>
	axios
		.post(
			"http://omega.jdomni.com/omni-automation-tools/training/cartApi",
			qs.stringify(body),
			headers
		)
		.then();
export const AddItemtoCartAction = (body, headers) => {
	return (dispatch) => {
		AddItemtoCart(body, headers)
			.then((res) => {
				console.log("postApi", res);
				dispatch(AddItemtoCartSuccess(res));
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

const AddItemtoCartSuccess = (val) => {
	return { type: "GET_SHOOPING_CART_PRODUCTS", payload: val };
};
