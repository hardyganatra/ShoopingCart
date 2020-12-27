import axios from "axios";

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
