<script>
    export default {
      
        props: {
            products: { type: Array, default: () => [] },
        },
        created() {
            console.log(this.products);
        
        },

    }
    
</script>
<template>
    <div>
        <p
            v-for="(product) in products"
            :key="product.id"
        >
            <span>{{product.id}} </span>
            <div class="col-md-4">
                <div class="item">
            {{ product.tennc }}
            
            {{ product.gianc }}
            {{ product.maloai }}
            {{ product.image }}
        </div>
    </div>
    <a href="#">
      
        
    </a>
           
                <!-- <img :src=" + product.img"  class="productimages">  -->
                <div>
               
                    <img :src="'http://localhost:3001/' + product.img" />
                </div>

                    <!-- <img :src="'/uploads/products/'+produit.image" class="imageproduit">   -->

                    <img :src="product.img" >  



            
        </p>
        <!-- <div class="col-md-4">
            <div class="item">
                <div class="image"><a href="https://vietthuong.vn/daddario-xse0942"><img id="image_list_7354" src="https://vietthuong.vn/image/cache/catalog/3a-thai/ds_xse0942_main_transparent_web-450x471.png" alt="D'Addario XSE0942" title="D'Addario XSE0942"></a>

                    
                </div>
                <div class="name"><a href="https://vietthuong.vn/daddario-xse0942"><h3>D'Addario XSE0942</h3></a></div>
                
                <div class="price">
                    <span class="price_new">270,000<span class="currency">đ</span></span><span class="price_old">400,000<span class="currency">đ</span></span>								</div>
                <div class="short_description">D'ADDARIO BỘ DÂY ĐÀN ĐIỆN XS SUPER LIGHT 09-42 XSE0942
</div>
            </div>
        </div> -->
    </div>

   
</template>
