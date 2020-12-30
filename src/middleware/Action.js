import axios from "axios";
import { promises } from "fs";
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
export const getSHoopingCartProduct = (params) => {
	return axios
		.get(
			"http://omega.jdomni.com/omni-automation-tools/training/getAllCartItems",
			{
				params,
			}
		)
		.then();
};
export const getSHoopingCartProductsAction = (requestParam) => {
	return (dispatch) => {
		getSHoopingCartProduct(requestParam)
			.then((res) => {
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
	console.log("plusminuschangeAction", body, headers);
	return (dispatch) => {
		AddItemtoCart(body, headers)
			.then((res) => {
				dispatch(AddItemtoCartSuccess(res, body));
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

const AddItemtoCartSuccess = (val, body) => {
	return { type: "REFRESH_PRODUCT_CART_LIST", payload: body };
};
////////////////////////////////////////////////////////////////////////////

//clear cart Action\
export const ClearCart = (postdata) => {
	//    axios
	// 		.post(
	// 			"http://omega.jdomni.com/omni-automation-tools/training/cartApi",
	// 			qs.stringify(body),
	// 			headers
	// 		)
	// 		.then();
	const config = {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
	};
	const postArray = [];
	let postData = postdata;
	postData.map((item) => {
		let body = {
			product_id: item.id,
			auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
			quantity: 0,
		};
		postArray.push(
			axios.post(
				"http://omega.jdomni.com/omni-automation-tools/training/cartApi",
				qs.stringify(body),
				config
			)
		);
	});
	return axios.all(postArray);
};

export const ClearCartAction = (postData) => {
	return (dispatch) => {
		ClearCart(postData)
			.then((res) => {
				let returnData = {};
				dispatch(ClearCartSuccess(returnData));
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

const ClearCartSuccess = (val) => {
	return { type: "REFRESH_PRODUCT_CART_LIST", payload: val };
};

//clear cart Action\

//  axios
// 		.all([
// 			axios.post(`/my-url`, {
// 				myVar: "myValue",
// 			}),
// 			axios.post(`/my-url2`, {
// 				myVar: "myValue",
// 			}),
// 		])
// 		.then(
// 			axios.spread((data1, data2) => {
// 				// output of req.
// 				console.log("data1", data1, "data2", data2);
// 			})
// 		);pos
