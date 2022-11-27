<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Ứng dụng Quản lý danh bạ</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'login' }" class="nav-link">
                    Đăng nhập

                    <i class="fas fa-address-book" />
                </router-link>
                <!-- <router-link :to="{ name: 'register' }" class="nav-link">
                    Đăng ký

                    <i class="fas fa-address-book" />
                </router-link> -->
            </li>
        </div>
    </nav>
</template>