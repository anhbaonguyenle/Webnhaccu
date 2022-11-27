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
                        <a class="nav-link" href="#">Học Guitar <i class="fas fa-user-graduate"></i></a>
                    </li>
                    <li class="nav-item">
                        <li class="nav-item">
                            <router-link :to="{ name: 'gioithieu' }" class="nav-link">
                                Giới Thiệu
                                <i class="fas fa-wrench"></i>
                            </router-link>
                        </li>
                    </li>
                    <li class="nav-item">
                        <li class="nav-item">
                            <router-link :to="{ name: 'sanpham' }" class="nav-link">
                                Sản phẩm
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
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>