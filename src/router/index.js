import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/clientes",
		name: "Clientes",
		component: () => import("../views/Clientes.vue"),
	},
	{
		path: "/imoveis",
		name: "Imoveis",
		component: () => import("../views/Imoveis.vue"),
	},
	{
		path: "/contratos",
		name: "Contratos",
		component: () => import("../views/Contratos.vue"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
