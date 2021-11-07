//This file is responsible for making requests related to category data to the backend and sending their results to the vuex store.

import routes from "./axiosRoutes";
import axios from "axios";
export default {
	get_imoveis() {
		return new Promise((resolve, reject) => {
			axios.get(routes.get_imoveis)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
	insert_imovel(imovel) {
		return new Promise((resolve, reject) => {
			axios.post(routes.insert_imovel, imovel)
				.then((res) => {
					resolve(res);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
};
