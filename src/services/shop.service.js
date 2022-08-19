import axios from "axios";

const WP_API_URL = "https://fourm.artisanalfutures.org/wp-json/wp/v2";
const loginHeaders = {
	"Content-Type": "application/json",
};

// const fetchHeaders = {
// 	"Content-Type": "application/json",
// 	Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
// };

const getShop = (id) => {
	return axios
		.get(WP_API_URL + "/stores/" + id, {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
			},
		})
		.then((response) => {
			return response.data;
		});
};

const getProfile = (id) => {
	return axios
		.get(WP_API_URL + "/artisans/" + id, {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
			},
		})
		.then((response) => {
			return response.data.acf;
		});
};
const updateShop = (id, payload) => {
	let temp = Object.entries(payload).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});

	return axios
		.post(
			WP_API_URL + "/stores/" + id,
			{ fields: temp },
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
				},
			}
		)
		.then((response) => {
			return response.data;
		});
};

const publishShop = (id) => {
	return axios
		.post(
			WP_API_URL + "/stores/" + id,
			{ status: "publish" },
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
				},
			}
		)
		.then((response) => {
			return response.data;
		});
};

const ShopService = {
	getShop,
	getProfile,
	updateShop,
	publishShop,
	// getPropFromProfile,
};

export default ShopService;