import { createWebHistory, createRouter } from 'vue-router';




const routes = [
  
    {
        path: '/',
        name: 'Heroimg',
        component: () => import('../views/Heroimg.vue'),
    },
    
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

   

   


   
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'notfound',
    //     component: () =>
    //         import ('@/views/NotFound.vue'),
    // },
   
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});

export default router;
