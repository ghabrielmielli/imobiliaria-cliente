import routes from "./axiosRoutes";
import axios from "axios";
export default {
	get_contratos() {
		return new Promise((resolve, reject) => {
			axios.get(routes.get_contratos)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
	get_contratos_por_imovel(id) {
		return new Promise((resolve, reject) => {
			axios.get(routes.get_contratos_por_imovel(id))
				.then((res) => {
					resolve(res.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
	insert_contrato(contrato) {
		return new Promise((resolve, reject) => {
			axios.post(routes.insert_contrato, contrato)
				.then((res) => {
					resolve(res);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
};
