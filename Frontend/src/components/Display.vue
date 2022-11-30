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
<template>
    <!-- <div class="card" v-for="(product) in products" :key="product.id">
        <img src="../assets/2.jpg" class="card-img-top" alt="..." />
                    <p text-align:center>{{ product.tennc }}</p>
                    <h5 text-align:center>{{ product.gianc }} đ</h5>
                    <button><router-link :to="{ name: 'chitietsp' }">
                                        Mua ngay
                                    </router-link></button>
       <div> -->
       <div>
        <p  
            v-for="(product) in products"
            :key="product.id"
        >
            <div class="col-md-4">
                <div class="item">
            {{ product.tennc }}
            
            {{ product.gianc }}
            {{ product.maloai }}
         

            <img :src="('http://localhost:3000/' + product.image)" />
                </div>
        </div>
   
    <a href="#">
      
        
    </a>
           
              
        </p>
      
    </div>
        <!-- <p  
            v-for="(product) in products"
            :key="product.id"
        />
        <img :src="('http://localhost:3000/' + product.image)" />
        <p text-align:center> {{ product.tennc }} </p>
        <h5 text-align:center> {{ product.gianc }} </h5>
        <button><router-link :to="{ name: 'chitietsp' }">
                            Mua ngay
                        </router-link></button> -->

    <!-- <div>
       
        <p  
            v-for="(product) in products"
            :key="product.id"
        >
            <div class="col-md-4">
                <div class="item">
            {{ product.tennc }}
            
            {{ product.gianc }}
            {{ product.maloai }}
         

            <img :src="('http://localhost:3000/' + product.image)" />
                </div>
        </div>
   
    <a href="#">
      
        
    </a>
           
              
        </p>
      
    </div> -->

   
</template>
