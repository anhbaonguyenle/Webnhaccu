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
<<<<<<< HEAD
    <!-- <div class="card" v-for="(product) in products" :key="product.id">
        <img src="../assets/2.jpg" class="card-img-top" alt="..." />
=======
    <div class="row row-cols-1 row-cols-md-4 g-4" width= "250px" height= "250px" >
    <div class="card" v-for="(product) in products" :key="product.id" >
        <img :src="('http://localhost:3000/' + product.image)" />
>>>>>>> 8f99eb97e0ce899577b3631702f2761ed875f6f3
                    <p text-align:center>{{ product.tennc }}</p>
                    <h5 text-align:center>{{ product.gianc }}đ</h5>
                    <button><router-link :to="{ name: 'chitietsp' }">
                                        Mua ngay
                                    </router-link></button>
       <div> -->
       <div>
<<<<<<< HEAD
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
      
=======
>>>>>>> 8f99eb97e0ce899577b3631702f2761ed875f6f3
    </div>
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
