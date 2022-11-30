<template>
    <metaname="viewport", content="width=device-width" initial-scale="1" shrink-to-fit="no"/>

    <div v-if="product" class="page">
        <section class=" text-center text-lg-start">
        <h4>Hiệu chỉnh</h4>
        </section >
        <ProductForm :product="product" @submit:product="onAddProduct" />
    </div>
    <div>
        <Box><p>{{ message }}</p></Box>
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
                this.message = 'Sản phẩm được cập nhật thành công.';
                this.product = null;
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.message = '';
        this.product = {tennc:'', gianc:'', image:'', mota:''};
    },
};
</script>