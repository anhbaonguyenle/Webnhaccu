<template>
    <div>
        <CarouselView> </CarouselView>
        <br />
        <h2>Sản phẩm của chúng tôi</h2>
         <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
                <div class="card">
                    <img src="../assets/1.jpg" class="card-img-top" alt="..." />
                    <p text-align= "center">TANGLEWOOD TWCR DCE CROSSROADS DREADNOUGHT ACOUSTIC</p>
                    <h5 text-align= "center">3,500,000đ</h5>
                    <button><router-link :to="{ name: 'chitietsp' }">
                                        Mua ngay
                                    </router-link></button>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="../assets/2.jpg" class="card-img-top" alt="..." />
                    <p text-align= "center">KAPOK D-118AC</p>
                    <h5 text-align= "center">2,500,000đ</h5>
                    <button><router-link :to="{ name: 'chitietsp' }">
                                        Mua ngay
                                    </router-link></button>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="../assets/3.jpg" class="card-img-top" alt="..." />
                    <p text-align= "center">SUZUKI SDG-6NL</p>
                    <h5 text-align= "center">2,500,000đ</h5>
                    <button><router-link :to="{ name: 'chitietsp' }">
                                        Mua ngay
                                    </router-link></button>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="../assets/4.jpg" class="card-img-top" alt="..." />
                    <p text-align= "center">FENDER CD-60S</p>
                    <h5 text-align= "center">6,000,000đ</h5>
                    <button><router-link :to="{ name: 'chitietsp' }">
                                        Mua ngay
                                    </router-link></button>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="../assets/5.png" class="card-img-top" alt="..." />
                    <p text-align= "center">TAYLOR AD17E</p>
                    <h5 text-align= "center">44,500,000đ</h5>
                    <button><router-link :to="{ name: 'chitietsp' }">
                                        Mua ngay
                                    </router-link></button>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="../assets/6.jpg" class="card-img-top" alt="..." />
                    <p text-align= "center">FENDER CC-60SCE</p>
                    <h5 text-align= "center">8,500,000đ</h5>
                    <button><router-link :to="{ name: 'chitietsp' }">
                                        Mua ngay
                                    </router-link></button>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="../assets/7.jpg" class="card-img-top" alt="..." />
                    <p text-align= "center">TAKAMINE GD10CE</p>
                    <h5 text-align= "center">7,000,000đ</h5>
                    <button><router-link :to="{ name: 'chitietsp' }">
                                        Mua ngay
                                    </router-link></button>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="../assets/8.jpg" class="card-img-top" alt="..." />
                    <p text-align= "center">TAYLOR 114E</p>
                    <h5 text-align= "center">19,00,000đ</h5>
                    <button><router-link :to="{ name: 'chitietsp' }">
                                        Mua ngay
                                    </router-link></button>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import CarouselView from '../components/Carousel.vue';

export default {
    name: 'Heroimg',
    components: {
        CarouselView,
    },
};
</script>
