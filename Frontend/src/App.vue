<script>
import AppHeader from '@/components/AppHeader.vue';
export default {
    components: {
        AppHeader,
    },
};
</script>

<template>
   <div> <AppHeader /></div>
   <div></div>
  <div><router-view /></div>
 
</template>

<style scoped lang="postcss">

</style>