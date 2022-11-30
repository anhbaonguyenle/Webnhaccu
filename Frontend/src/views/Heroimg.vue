<script>
    import Display from '../components/Display.vue';
    import { productService } from '../services/product.service';

    export default {
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
    <div>
        <h1>This is the View</h1>
        <!-- <button
            @click="addPokemon()"
        >
            Add Pokemon
        </button> -->
        <Display 
            :products="products"
        />
    </div>
</template>