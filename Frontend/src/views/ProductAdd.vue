<template>
    <div v-if="product" class="page">
        <h4>Hiệu chỉnh </h4>
        <ProductForm :product="cproduct" @submit:product="onAddProduct" />
        <p>{{ message }}</p>
    </div>

</template>
<script>
import ProductForm from '@/components/ProductForm.vue';
import { productService } from '@/services/product.service';
export default {
    components: {
        ProductForm,
    },
    props: {
        productId: { type: Number, required: true },
    },
    data() {
        return {
            product: null,
            message: '',
        };
    },
    methods: {
        async getProduct(id) {
            try {
                this.product = await productService.get(id);
            } catch (error) {
                console.log(error);
                // Redirect to NotFound page and keep URL intact
                this.$router.push({
                    name: 'notfound',
                    params: {
                        pathMatch: this.$route.path.split('/').slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        async onAddProduct(product) {
            try {
                await productService.create(product);
                this.message = 'Liên hệ được cập nhật thành công.';
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.message = '';
        this.product = {tennc: '', maloai: '', gianc: '', mota: ''};
    },
};
</script>