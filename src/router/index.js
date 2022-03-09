import Comments from '../Comments.vue'
import Login from '../Login.vue'
import Logout from '../Logout.vue'
import Test from '../Test.vue'

import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    { path: '/', component: Comments },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/test', component: Test },
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})