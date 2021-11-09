//This file is responsible for making requests related to category data to the backend and sending their results to the vuex store.

import routes from "./axiosRoutes";
import axios from "axios";
export default {
	get_clientes() {
		return new Promise((resolve, reject) => {
			axios.get(routes.get_clientes)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
	insert_cliente(cliente) {
		return new Promise((resolve, reject) => {
			axios.post(routes.insert_cliente, cliente)
				.then((res) => {
					resolve(res);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
	get_is_locador(cliente) {
		return new Promise((resolve, reject) => {
			axios.get(routes.is_locador(cliente.id))
				.then((res) => {
					resolve(res.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
	get_is_locatario(cliente) {
		return new Promise((resolve, reject) => {
			axios.get(routes.is_locatario(cliente.id))
				.then((res) => {
					resolve(res.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
};
