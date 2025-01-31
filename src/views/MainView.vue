<template>

    <HeaderView></HeaderView>

    <div class="container">
      <SideBar></SideBar>

      <!-- cunado hagomos click en uno de los elementos del siderbar se renderizara en el router-view -->
      <div class="content">
        <router-view></router-view>
      </div>

    </div>
</template>


<script setup>
import SideBar from '@/components/SideBar.vue';
import HeaderView from '@/components/HeaderView.vue';
</script>


<style scoped>

.container{
  display: flex;
}

.content{
  flex: 1;
  padding: 20px;
}

</style>
