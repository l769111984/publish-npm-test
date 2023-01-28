export default [{
    name: 'home',
    path: '/home',
    component: () => import('../views/home.vue')
}, {
    name: 'login',
    path: '/login',
    component: () => import('../views/login.vue')
}, {
    name: 'detail',
    path: '/detail',
    component: () => import('../views/detail.vue')
}]