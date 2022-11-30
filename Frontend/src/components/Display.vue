<script>
export default {

    props: {
        products: { type: Array, default: () => [] },
        activeIndex: { type: Number, default: -1 },
    },
    

    created() {
        console.log(this.products);

    },
   

}

</script>
<style>
.price {
    color: #ed1c24;
    font-size: 15px;
    padding-left: 10px;
}

.price .currency {
    color: #fd0;
    font-family: Roboto-Medium;
}
</style>
<template>
    <div class="container">
        <H2>Sản phẩm của chúng tôi</H2>
        <div class="row p-2">
            <!-- <p v-for="(product) in products" :key="product.id">            </p> -->
            <div v-for="(product) in products" :key="product.id" class="col-md-3 p-2 border m-2">
                <img class="card-img-top" :src="('http://localhost:3000/' + product.image)" alt="Card image"
                    style="width:100%" />
                <div class="card-body">

                <h4 class="card-title">{{ product.tennc }}</h4>
                </div>
                <p class="price">{{ product.gianc }}<span class="currency"></span>đ</p>

            </div>

        </div>


    </div>
    
</template>
