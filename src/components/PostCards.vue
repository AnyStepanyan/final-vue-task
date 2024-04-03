<template>
    <v-container>
        <v-row justify="center">
            <v-col v-for="post in posts" cols="auto">
                <v-sheet class="gray text-center overflow-hidden" :elevation="3" max-width="344" max-height="390">
                    <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>

                    <v-card-title class="text-capitalize">
                        {{ post.title }}
                    </v-card-title>

                    <v-sheet class="overflow-hidden mb-5" max-height="70">
                        {{ post.body }}
                    </v-sheet>

                    <v-btn class="font-weight-black mb-5" color="grey-darken-3" variant="text" @click="$router.push({name: 'detailedPost', params: {id: post.id}})">
                        READ MORE
                    </v-btn>
                 
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import PostCards from '../components/PostCards.vue'
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
let posts = computed(() => store.getters.posts)

// const getCurrentPost = (id) => {
//     store.commit('setCurrentPostFromServer', store.dispatch('getCurrentPostFromServer', id).then((res => res))) 
// }

</script>