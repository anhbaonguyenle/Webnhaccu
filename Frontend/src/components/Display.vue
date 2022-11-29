<script>
    export default {
        props: {
            products: { type: Array, default: () => [] },
        },
        created() {
            console.log(this.products);
        }
    }
</script>
<template>
    <div>
        <p
            v-for="(product) in products"
            :key="product.id"
        >
            <span>{{product.id}} </span>
            {{ product.tennc }}
            {{ product.gianc }}
            {{ product.maloai }}
        </p>
    </div>
   
</template>
