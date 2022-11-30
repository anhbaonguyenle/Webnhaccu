<template>
    <!-- <metaname="viewport", content="width=device-width" initial-scale="1" shrink-to-fit="no"/> -->

    <div v-if="product" class="page">
        <section class=" text-center text-lg-start">
            <h4>Hiệu chỉnh</h4>
            </section>
        <ProductForm :product="product" @submit:product="onUpdateProduct" @delete:product="onDeleteProduct" />
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
        async onUpdateProduct(product) {
            try {
                await productService.update(product.id, product);
                this.message = 'Sản phẩm được cập nhật thành công.';
            } catch (error) {
                console.log(error);
            }
        },
        async onDeleteProduct(id) {
            if (confirm('Bạn muốn xóa sản phẩm này?')) {
                try {
                    await productService.delete(id);
                    this.$router.push({ name: 'admin' });
                } catch (error) {
                    console.log(error);
                }
            }

        },
    },
    created() {
        this.getProduct(this.productId);
        this.message = '';
    },
};
</script>