import { createWebHistory, createRouter } from 'vue-router';




const routes = [
    
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/Test.vue'),
    },

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
   
    {
        path: '/products',
        name: 'productadd',
        component: () => import('../views/ProductAdd.vue'),
    },
    {
        path: '/products/:id',
        name: 'productedit',
        component: () => import('../views/ProductEdit.vue'),
        props: (route) => ({ productId: parseInt(route.params.id) })

    },
    
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/admin.vue'),
    },
   
    
    {
        path: '/gioithieu',
        name: 'gioithieu',
        component: () => import('../views/gioithieu.vue'),
    },

    {
        path: '/chitietsp',
        name: 'chitietsp',
        component: () => import('../views/chitietsp.vue'),
    },

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
