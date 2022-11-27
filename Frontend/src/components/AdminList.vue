<script>
export default {
    props: {
        admins: { type: Array, default: () => [] },
        activeIndex: { type: Number, Text, default: -1 },
    },
    emits: ['update:activeIndex'], methods: {
        updateActiveIndex(index) {
            this.$emit('update:activeIndex', index);
        },
    },
};
</script>


<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(admin, index) in admins" :key="admin.id"
            :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)">
            {{ admin.name }}
        </li>
    </ul>
</template>