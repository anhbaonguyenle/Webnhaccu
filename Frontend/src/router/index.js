import { createWebHistory, createRouter } from 'vue-router';




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
    // {
    //     path: '/',
    //     name: 'Webnhaccu',
    //     component: () => import('../views/Webnhaccu.vue'),
    // },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
    },
    
    // {
    //     path: '/gioithieu',
    //     name: 'gioithieu',
    //     component: () => import('../views/gioithieu.vue'),
    // },

    {
        path: '/sanpham',
        name: 'sanpham',
        component: () => import('../views/Sanpham.vue'),
    }


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
