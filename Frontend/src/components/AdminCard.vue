<script>
export default {
    props: {
        admin: { type: Object, required: true },
    },
};
</script>


<template>
    <div>
        <div class="p-1">
            <strong>Tên:</strong>
            {{ admin.admin_name }}
        </div>
        <div class="p-1">
            <strong>E-mail:</strong>
            {{ admin.email }}
        </div>
        <div class="p-1">
            <strong>E-mail:</strong>
            {{ admin.pass }}
        </div>
        
        <div class="p-1">
            <strong>Điện thoại:</strong>
            {{ admin.phone }}
        </div>
       
    </div>
</template>