import React, { Component } from "react";
import AllProductsContainer from "./AllProductsContainerStyles";

class AllProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			appProdustsData: [
				{
					id: 229,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Orange - Nagpur (1 Kg)",
					unit: "kilo",
					price: 110,
					imageUrl:
						"https://image1.jdomni.in/product/E6/95/A9/Tomato-500-gm_1499842542499.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 231,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Apple - Royal Gala (6 Pcs)",
					unit: "kilo",
					price: 199,
					imageUrl:
						"https://image1.jdomni.in/product/5B/C6/B3/Garlic-Peeled_1493563860835.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 233,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Banana Golden - Robusta - 2 Kgs",
					unit: "kilo",
					price: 98,
					imageUrl:
						"https://image1.jdomni.in/product/30082019/B2/38/CA/B1533E2CE11FCA09260BD20D60_1567171953057.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 235,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Banana Elaichi (Yellaki) - 1 Kgs",
					unit: "kilo",
					price: 120,
					imageUrl:
						"https://image1.jdomni.in/product/E6/95/A9/Tomato-500-gm_1499842542499.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 237,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Apple - Washington (6 Pcs)",
					unit: "kilo",
					price: 230,
					imageUrl:
						"https://image1.jdomni.in/product/E6/95/A9/Tomato-500-gm_1499842542499.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 239,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Dragon Fruit",
					unit: "kilo",
					price: 100,
					imageUrl:
						"https://image1.jdomni.in/product/E6/95/A9/Tomato-500-gm_1499842542499.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 241,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Curd - 200gm",
					unit: "kilo",
					price: 40,
					imageUrl:
						"https://image1.jdomni.in/product/27122019/6C/62/CD/D32E3204FADCA2CF037229674C_1577425205259.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 243,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Basundi",
					unit: "milliliters",
					price: 90,
					imageUrl:
						"https://image1.jdomni.in/product/19012018/F5/93/D2/36F57BD04D5837E8B9AA069631_1516339942604.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 245,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Lassi - Mango",
					unit: "milliliters",
					price: 78,
					imageUrl:
						"https://image1.jdomni.in/product/AB/6B/FF/Basil-Italian_1493548799067.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 247,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Lassi - Premium Lite",
					unit: "milliliters",
					price: 60,
					imageUrl:
						"https://image1.jdomni.in/product/27122019/6C/62/CD/D32E3204FADCA2CF037229674C_1577425205259.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 249,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Lassi - Kesar & Nut",
					unit: "milliliters",
					price: 78,
					imageUrl:
						"https://image1.jdomni.in/product/5B/C6/B3/Garlic-Peeled_1493563860835.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 251,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Malai Paneer",
					unit: "grams",
					price: 114,
					imageUrl:
						"https://image1.jdomni.in/product/80/4D/9E/Orange-Seedless-Imported_1493985663382.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 253,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Kimaye Banded Banana",
					unit: "grams",
					price: 44,
					imageUrl:
						"https://image1.jdomni.in/product/27122019/6C/62/CD/D32E3204FADCA2CF037229674C_1577425205259.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 255,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Kimaye Blueberry Punnet",
					unit: "grams",
					price: 244,
					imageUrl:
						"https://image1.jdomni.in/product/27122019/6C/62/CD/D32E3204FADCA2CF037229674C_1577425205259.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 257,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Kimaye Avocado Imported",
					unit: "grams",
					price: 250,
					imageUrl:
						"https://image1.jdomni.in/product/5B/C6/B3/Garlic-Peeled_1493563860835.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 259,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Kimaye Pomegranate Arils Cup",
					unit: "grams",
					price: 49,
					imageUrl:
						"https://image1.jdomni.in/product/19012018/F5/93/D2/36F57BD04D5837E8B9AA069631_1516339942604.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 261,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Kimaye Coconut Chunks Cup",
					unit: "grams",
					price: 39,
					imageUrl:
						"https://image1.jdomni.in/product/5B/C6/B3/Garlic-Peeled_1493563860835.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 263,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Potato-Tomato-Onion (3 Kg Combo)",
					unit: "kilo",
					price: 59,
					imageUrl:
						"https://image1.jdomni.in/product/5B/4C/06/Plum-Imported_1494142855324.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 265,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Lemon - Nimbu (3 Pcs)",
					unit: "pieces",
					price: 11,
					imageUrl:
						"https://image1.jdomni.in/product/5B/4C/06/Plum-Imported_1494142855324.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 267,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Cabbage. (600-800 Gm)",
					unit: "piece",
					price: 30,
					imageUrl:
						"https://image1.jdomni.in/product/30082019/B2/38/CA/B1533E2CE11FCA09260BD20D60_1567171953057.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
				{
					id: 269,
					auth_key: "6c55fa36a2138b23a52e74619bfdae147fa0c3e1",
					name: "Cauliflower - Phul Gobhi (1 Pc. - 450-60",
					unit: "piece",
					price: 23,
					imageUrl:
						"https://image1.jdomni.in/product/5B/4C/06/Plum-Imported_1494142855324.jpg",
					productDescription: "",
					cartQuantity: 0,
				},
			],
		};
	}
	render() {
		return (
			<AllProductsContainer>
				{this.state.appProdustsData.map((item) => {
					return (
						<div className="item">
							<img src={item.imageUrl} alt="loading"></img>
							<div className="Inneritem">
								<h5>{item.name}</h5>
								<h5>
									&#8377;<span>{`${item.price}`}</span>
								</h5>
								<button>+</button>
								<span>ADD</span>
							</div>
						</div>
					);
				})}
			</AllProductsContainer>
		);
	}
}
export default AllProducts;
