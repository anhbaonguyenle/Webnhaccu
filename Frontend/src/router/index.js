import { createWebHistory, createRouter } from 'vue-router';

import Webnhaccu from '@/views/Webnhaccu.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';


const routes = [
    {
        path: '/',
        name: 'webnhaccu',
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