import axios from "axios";
import useSWR from "swr";

const TOKEN_URL = import.meta.env.VITE_API_URL + "jwt-auth/v1/token";
const WP_USER_URL = import.meta.env.VITE_API_URL + "wp/v2/users/";

// const getUser = (id) => {
// 	return axios.get(WP_USER_URL + id, {
// 		headers: {
// 			"Content-Type": "application/json",
// 			Authorization: "Bearer  " + JSON.parse(localStorage.getItem("user")).token,
// 		},
// 	});
// };

const getToken = (payload) => {
	console.log(payload);
	return axios
		.post(TOKEN_URL, payload, {
			headers: { "Content-Type": "application/json" },
		})
		.then((response) => {
			return response.data;
		});
};

const checkIfUsernameAvailable = (username) => {
	return axios
		.get(TOKEN_URL, payload, {
			headers: { "Content-Type": "application/json" },
		})
		.then((response) => {
			return response.data;
		});
};
// Make the change
// Log user out via deleting local storage
// Retrieve the new email and password from state
// Get token, add to local storage once finished
// ----Error: Display message and redirect to homepage

// const getToken = (payload) => {
// 	const fetcher = async (url) =>
// 		await axios
// 			.post(url, payload, {
// 				headers: { "Content-Type": "application/json" },
// 			})
// 			.then((res) => res.data.acf);

// 	const { data, error } = useSWR(TOKEN_URL, fetcher, {
// 		revalidateOnFocus: true, // auto revalidate when the window is focused
// 	});

// 	return {
// 		user: data,
// 		isLoading: !error && !data,
// 		isError: error,
// 	};
// };

// const getCurrentUser = () => {
// 	return JSON.parse(localStorage.getItem("user"));
// };
// const setCurrentUser = (data) => {
// 	localStorage.setItem("user", JSON.stringify(data));
// };

// const updateCurrentUser = (data) => {
// 	let user = getCurrentUser();
// 	user = { ...user, ...data };
// 	setCurrentUser(user);
// };

// const getCurrentUserToken = () => {
// 	return JSON.parse(localStorage.getItem("user")).token;
// };

// const login = (payload) => {
// 	return axios
// 		.post(TOKEN_URL, payload, {
// 			headers: { "Content-Type": "application/json" },
// 		})
// 		.then((response) => {
// 			if (response.data.token) {
// 				setCurrentUser(response.data);
// 				return getUser(response.data.user_id).then((res) => {
// 					updateCurrentUser({ membership_id: res.data.acf.membership });
// 					return response.data;
// 				});
// 			}

// 			return response.data;
// 		});
// };
// const verifyToken = () => {
// 	return axios
// 		.post(
// 			import.meta.env.VITE_API_URL + "jwt-auth/v1/token/validate",
// 			{},

// 			{
// 				headers: {
// 					Authorization: "Bearer " + getCurrentUserToken(),
// 				},
// 			}
// 		)
// 		.then((response) => {
// 			if (response.status == 200) {
// 				return getUserInformation();
// 			}
// 			return response.data;
// 		});
// };

// const logout = () => {
// 	localStorage.removeItem("user");
// 	window.location.href = "/";
// };

// const updateUserInformation = (payload) => {
// 	if (!getCurrentUser()) throw new Error("User not logged in");
// 	let temp = Object.entries(payload).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
// 	return axios
// 		.post(WP_USER_URL + getCurrentUser().user_id, temp, {
// 			headers: {
// 				"Content-Type": "application/json",
// 				Authorization: "Bearer " + getCurrentUserToken(),
// 			},
// 		})
// 		.then((response) => {
// 			console.log(response);

// 			return response.data;
// 		});
// };

// const updateArtisanInformation = (id, payload) => {
// 	if (!JSON.parse(localStorage.getItem("user"))) throw new Error("User not logged in");
// 	let temp = Object.entries(payload).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
// 	return axios
// 		.post(import.meta.env.VITE_API_URL + "wp/v2/artisans/" + id, temp, {
// 			headers: {
// 				"Content-Type": "application/json",

// 				Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
// 			},
// 		})
// 		.then((response) => {
// 			console.log(response);

// 			return response.data;
// 		});
// };

// const setProfileImage = () => {
// 	let payload = {
// 		headers: {
// 			"Content-Type": "application/json",
// 			Authorization: "Bearer  " + JSON.parse(localStorage.getItem("user")).token,
// 		},
// 	};

// 	return axios
// 		.get(
// 			import.meta.env.VITE_API_URL + "wp/v2/af_members/" + JSON.parse(localStorage.getItem("user")).membership_id,
// 			payload
// 		)
// 		.then((response) => {
// 			let user = JSON.parse(localStorage.getItem("user"));
// 			user = { ...user, ...{ profile_image: response.data.acf.profile_image } };
// 			localStorage.setItem("user", JSON.stringify(user));
// 			return true;
// 		});
// };

const WizardService = {
	getToken,
};

export default WizardService;