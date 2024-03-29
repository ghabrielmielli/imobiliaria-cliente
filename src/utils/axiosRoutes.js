/**
 * This file converts and exports backend routes
 * with more legible names
 */

const URL = "http://192.168.99.109:3000/";

module.exports = {
	URL,

	//cliente
	get_clientes: `${URL}clientes`,
	insert_cliente: `${URL}clientes`,
	update_cliente: (clienteId) => `${URL}clientes/${clienteId}`,
	delete_cliente: (clienteId) => `${URL}clientes/${clienteId}`,
	is_locador: (clienteId) => `${URL}imoveis/isLocador/${clienteId}`,
	is_locatario: (clienteId) => `${URL}contratos/isLocatario/${clienteId}`,

	//imovel
	get_imoveis: `${URL}imoveis`,
	insert_imovel: `${URL}imoveis`,
	update_imovel: (imovelId) => `${URL}imoveis/${imovelId}`,
	delete_imovel: (imovelId) => `${URL}imoveis/${imovelId}`,
	get_imovel: (imovelId) => `${URL}imoveis/${imovelId}`,
	get_imoveis_logs: `${URL}logs/imoveis`,

	//contrato
	get_contratos: `${URL}contratos`,
	insert_contrato: `${URL}contratos`,
	update_contrato: (contratoId) => `${URL}contratos/${contratoId}`,
	delete_contrato: (contratoId) => `${URL}contratos/${contratoId}`,
	get_contratos_por_imovel: (imovelId) => `${URL}contratos/imovel/${imovelId}`,
};
