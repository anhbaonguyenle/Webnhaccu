<template>
    <main role="main">
        <!-- Block content - Đục lỗ trên giao diện bố cục chung, đặt tên là `content` -->
        <div class="container mt-4">
            <div id="thongbao" class="alert alert-danger d-none face" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>

            <div class="card">
                <div class="container-fliud">
                    <form name="frmsanphamchitiet" id="frmsanphamchitiet" method="post"
                        action="/php/twig/frontend/giohang/themvaogiohang">
                        <input type="hidden" name="sp_ma" id="sp_ma" value="5">
                        <input type="hidden" name="sp_ten" id="sp_ten" value="TANGLEWOOD TWCR DCE CROSSROADS DREADNOUGHT ACOUSTIC">
                        <input type="hidden" name="sp_gia" id="sp_gia" value="3,500,000đ">
                        <input type="hidden" name="hinhdaidien" id="hinhdaidien" value="../assets/1.jpg">

                        <div class="wrapper row">
                            <div class="preview col-md-6">
                                <ul class="preview-thumbnail nav nav-tabs">
                                    <li class="active">
                                        <a data-target="#pic-1" data-toggle="tab" class="">
                                            <img src="../assets/1.jpg">
                                        </a>
                                    </li>
                                
                                </ul>
                            </div>
                            <div class="details col-md-6">
                                <h3 class="product-title">TANGLEWOOD TWCR DCE CROSSROADS DREADNOUGHT ACOUSTIC</h3>
                                <p class="product-description"> - Có dáng dreadought khuyết (cutaway)</p>
                                <p class="product-description"> - Được thiết kế với chất liệu chính là gỗ Mahogany</p>
                                <p class="product-description"> - Mặt phím và ngựa đàn được làm từ gỗ Rosewood)</p>
                                <p class="product-description"> - Trang bị hệ thống Tanglewood TW-EX4 EQ </p>
                                <p class="product-description"> - Giá cả rất phải chăng</p>
                                <h4 class="price">Giá: <span>3,500,000đ</span></h4>
                                <div class="action">
                                    <a class="add-to-cart btn btn-default" id="btnThemVaoGioHang">Thêm vào giỏ hàng</a>
                                    <button><router-link :to="{ name: 'gioithieu' }">
                                        Mua ngay
                                    </router-link>
                                </button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

            <div class="card">
                <div class="container-fluid">
                    <h3>Thông tin chi tiết về Sản phẩm</h3>
                    <div class="row">
                        <div class="col">
                            Đàn gutar acoustic Tanglewood TWCR DCE được thiết kế với chất liệu chính là gỗ Mahogany, với nhiều tính năng vượt trội là lựa lựa chọn lý tưởng cho nhiều nghệ sĩ Guitar.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End block content -->
    </main>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->


</template>