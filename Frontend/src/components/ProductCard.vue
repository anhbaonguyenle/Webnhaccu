<script>
export default {
    props: {
        product: { type: Object, required: true },
    },
};
</script>


<template>
    <div>
        <div class="p-1">
            <strong>Tên sản phẩm:</strong>
            {{ product.tennc }}
        </div>
        <div class="p-1">
            <strong></strong>
            <img :src="('http://localhost:3000/' + product.image)" width="150" height="100" />
        </div>
        <div class="p-1">
            <strong>Mã loại:</strong>
            {{ product.maloai }}
        </div>
       
        <div class="p-1">
            <strong>Giá:</strong>
            {{ product.gianc }}
        </div>
         <div class="p-1">
            <strong>Số lượng:</strong>
            {{ product.soluong }}
        </div>
       
        <div class="p-1">
            <strong>Mô tả:</strong>
            {{ product.mota }}
        </div>
       
        
    </div>
</template>