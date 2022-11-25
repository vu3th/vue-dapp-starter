import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

// https://next.router.vuejs.org/guide/advanced/composition-api.html
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	// Fallback route for handling 404s
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: () => import('./views/Error404.vue'),
	},
]

const router = createRouter({
	// If app is not hosted at the domain root, make sure to pass the `base` input here: https://next.router.vuejs.org/api/#parameters
	history: createWebHistory(),
	routes,
})

export default router
