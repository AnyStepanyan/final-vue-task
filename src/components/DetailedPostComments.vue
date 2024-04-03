<template v-if="show">
    <v-sheet class="mx-auto ma-10 " height="auto" max-width="700">
        <h1 class="font-weight-black my-10">Comments</h1>
        <div v-for="comment in comments" class="mb-7">
            <div v-if="comment.postId == $route.params.id" max-width="700">
                <v-sheet class="d-flex justify-space-between px-5 align-center" :height="50" :max-width="700" border
                    color="grey-lighten-2">
                    <p class="text-yellow-darken-3 font-weight-black">Comment {{ comment.id }}</p>

                    <div class="d-flex position-relative  align-center">
                        <p>{{ comment.email }}</p>
                        <v-avatar class="mt-7 ml-5"  color="grey-darken-1" rounded="0" size="45">
                          {{ comment.email[0].toUpperCase() }}
                        </v-avatar>
                    </div>

                </v-sheet>
                <v-sheet class="py-10 px-10" height="auto" max-width="700" border rounded color="grey-lighten-5">
                    {{ comment.body }}
                               </v-sheet>
            </div>
        </div>



    </v-sheet>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
store.commit('setCurrentPostComments', store.dispatch('getComments').then((res => res))) 
const currentPost = computed(() => store.getters.currentPostFromServer)
const comments = computed(() => store.getters.currentPostComments)
const show = computed(() => store.getters.showCurrentPost)
</script>