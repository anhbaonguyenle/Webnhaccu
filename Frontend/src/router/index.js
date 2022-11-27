import { createWebHistory, createRouter } from 'vue-router';

import Webnhaccu from '@/views/Webnhaccu.vue';

import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
// import Sanpham from '@/views/Sanpham.vue';
// import gioithieu from '@/views/gioithieu.vue';


const routes = [
    
    // {
    //     path: '/',
    //     name: 'gioithieu',
    //     component: gioithieu,
    // },
    
    {
        path: '/',
        name: 'Heroimg',
        component: () => import('../views/Heroimg.vue'),
    },
    {
        path: '/',
        name: 'Webnhaccu',
        component: Webnhaccu,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    // {
    //     path: '/',
    //     name: 'Sanpham',
    //     component: Sanpham,
    // }


    // {
    //     path: '/contacts/:id',
    //     name: 'contact.edit',
    //     component: () =>
    //         import ('@/views/ContactEdit.vue'),
    //     props: (route) => ({ contactId: parseInt(route.params.id) })
    // },
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'notfound',
    //     component: () =>
    //         import ('@/views/NotFound.vue'),
    // },
    // {
    //     path: '/contacts',
    //     name: 'contact.add',
    //     component: () =>
    //         import ('@/views/ContactAdd.vue'),
    // },
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});

export default router;
