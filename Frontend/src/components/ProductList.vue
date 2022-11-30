<script>
export default {
    props: {
        products: { type: Array, default: () => [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ['update:activeIndex'], methods: {
        updateActiveIndex(index) {
            this.$emit('update:activeIndex', index);
        },
    },
};
</script>


<template>
    
    <ul class="list-group">
        <li class="list-group-item" v-for="(product, index) in products" :key="product.id"
            :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)">
            {{ product.tennc }}
            <img :src="('http://localhost:3000/' + product.image)" width="50" height="50" />

        </li>
    </ul>
</template>