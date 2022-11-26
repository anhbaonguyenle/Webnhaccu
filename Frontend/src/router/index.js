const routes = [
    {
    path: '/contacts/:id',
    name: 'contact.edit',
    component: () => import('@/views/ContactEdit.vue'),
    props: (route) => ({ contactId: parseInt(route.params.id) })
    },
    ];