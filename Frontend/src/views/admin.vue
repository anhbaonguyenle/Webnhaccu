<template>
    <div class="container">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">

                <!-- <div class="card mb-3"> -->
                    <div class="page row">
                        <div class="col-md-10">
                            <InputSearch v-model="searchText" />
                        </div>
                        <div class="mt-3 col-md-6">
                            <h4>
                                Danh sách sản phẩm
                               
                            </h4>
                            <ProductList v-if="filteredContactsCount > 0" :products="filteredContacts"
                                v-model:activeIndex="activeIndex" />
                            <p v-else>
                                Không có sản phẩm nào
                            </p>

                            <div class="mt-3 row justify-content-around align-items-center">
                                <button class="btn btn-sm btn-primary" @click="refreshList()">
                                    <i class="fas fa-redo" /> Làm mới
                                </button>

                                <button class="btn btn-sm btn-success" @click="goToAddProduct()">
                                    <i class="fas fa-plus" /> Thêm mới
                                </button>

                                <button class="btn btn-sm btn-danger" @click="onDeleteProducts">
                                    <i class="fas fa-trash" /> Xóa tất cả
                                </button>
                            </div>
                        </div>
                        <div class="mt-3 col-md-6">
                            <div v-if="activeProduct">
                                <h4>
                                    Chi tiết sản phẩm
                                    <i class="fas fa-address-card" />
                                </h4>
                                <ProductCard :product="activeProduct" />
                                <router-link :to="{
                                    name: 'productedit',
                                    params: { id: activeProduct.id },
                                }">
                                    <span class="mt-2 badge badge-warning">
                                        <i class="fas fa-edit" /> Hiệu chỉnh</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                <!-- </div> -->

            </div>
        </div>
    </div>
</template>
<script>
import ProductCard from "@/components/ProductCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import ProductList from "@/components/ProductList.vue";
import { productService } from '@/services/product.service';

export default {
    components: {
        ProductCard,
        InputSearch,
        ProductList,
    },
    //The full code will be presented below
    data() {
        return {
            products: [],
            activeIndex: -1,
            searchText: '',
        };
    },
    watch: {
        // Monitor changes on searchText
        // Release the currently selected contact
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        // Map contacts to strings for searching.
        contactsAsStrings() {
            return this.products.map((product) => {
                const { tennc, maloai } = product;
                return [tennc, maloai].join('');
            });
        },
        // Return contacts filtered by the search box.
        filteredContacts() {
            if (!this.searchText) return this.products;
            return this.products.filter((product, index) =>
                this.contactsAsStrings[index].includes(this.searchText)
            );
        },
        activeProduct() {
            if (this.activeIndex < 0) return null;
            return this.filteredContacts[this.activeIndex];
        },
        filteredContactsCount() {
            return this.filteredContacts.length;
        },
    },
    methods: {
        async retrieveContacts() {
            try {
                const productsList = await productService.getMany();
                this.products = productsList.sort((current, next) =>
                    current.tennc.localeCompare(next.tennc)
                );
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveContacts();
            this.activeIndex = -1;
        },
        async onDeleteProducts() {
            if (confirm('Bạn muốn xóa tất cả Liên hệ?')) {
                try {
                    await productService.deleteMany();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        goToAddProduct() {
            this.$router.push({ name: 'productadd' });
        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>

<style scoped>
.page {
    text-align: left;
    max-width: 750px;
}
</style>