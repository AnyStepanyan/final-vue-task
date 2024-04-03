<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { computed, onMounted, watch} from "vue";
import { useStore } from "vuex";
import NavBar from "./components/NavBar.vue";

const store = useStore();

store.commit('setPostData', store.dispatch('getPosts').then((res => res))) 

let posts = computed(() => store.getters.posts)


</script>

<template>
   <NavBar />

   <main>
    <RouterView />
   </main>

</template>

<style scoped>

</style>
