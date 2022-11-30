<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Nhạc Cụ Cần Thơ</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><router-link :to="{ name: 'Heroimg' }" class="nav-link">
                            Trang chủ
                            <i class="fas fa-user"></i>
                        </router-link>

                    </li>

                    <li class="nav-item">
                    <li class="nav-item">
                        <router-link :to="{ name: 'gioithieu' }" class="nav-link">
                            Giới Thiệu
                            <i class="fas fa-wrench"></i>
                        </router-link>
                    </li>
                    </li>

                    <div class="mr-auto navbar-nav">
                        <li class="nav-item">
                            <router-link :to="{ name: 'login' }" class="nav-link">
                                Đăng nhập
                                <i class="fas fa-wrench"></i>
                            </router-link>
                        </li>
                    </div>
                </ul>
                <div class="col-md-10">
                    <InputSearch v-model="searchText" />
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import InputSearch from "@/components/InputSearch.vue";
import { productService } from '@/services/product.service';
export default {
    components: {
        InputSearch,


    },
    data() {
        return {
            products: [],
            activeIndex: -1,
            searchText: '',

        }
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
    },
  
};
</script>