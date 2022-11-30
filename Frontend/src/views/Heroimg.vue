<script>
import Display from '../components/Display.vue';
import { productService } from '../services/product.service';

export default {
    props: {
            products: { type: Array, default: () => [] },
            activeIndex: { type: Number, default: -1 },
        },
        created() {
            console.log(this.products);
        
        },
    components: {
        Display,
    },
    data() {
        return {
            products: [],
        }
    },
    methods: {
        async getProducts() {
            try {
                const productsList = await productService.getMany();
                this.products = productsList.sort((current, next) =>
                    current.tennc.localeCompare(next.tennc)
                );
            } catch (error) {
                console.log(error);
            }
        },

    },
    mounted() {
        this.getProducts();
    }
}
</script>
<template>
    <!-- <metaname="viewport", content="width=device-width" initial-scale="1" shrink-to-fit="no"/> -->

<div class="container">
        <div class="grid grid-col-2">
            <div class="col">
               
                <div class="">
                    <Display :products="products" />
                </div>
            </div>
        </div>
    </div>

</template>