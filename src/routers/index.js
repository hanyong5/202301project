import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/views/HomeView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/login',
		name: 'login',
		component: ()=>import("../views/common/LoginPage.vue"),
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
