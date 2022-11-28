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
            <strong>Giá:</strong>
            {{ product.gianc }}
        </div>
        <div class="p-1">
            <strong>Số lượng:</strong>
            {{ product.soluong }}
        </div>
       
        
    </div>
</template>