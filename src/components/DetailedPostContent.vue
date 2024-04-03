<template >
    <v-sheet  class="mx-auto ma-10 text-center" height="auto" max-width="700">

        <h1 class="text-capitalize font-weight-black">
            {{ currentPost.title }}
        </h1>

        <h5 class="ma-7">
            Post Number {{ currentPost.id }}
        </h5>

        <v-img height="400px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>

        <v-textarea v-if="edit === false" class="ma-8"  maxlength="auto" v-model="editedText" :value="editedText === null? currentPost.body : editedText">
        </v-textarea>

        <p v-if="edit === true" class="ma-8">
            {{ editedText === null? currentPost.body : editedText}}
        </p>
    
      

        <div class="d-flex flex-end">
            <v-btn class="mr-2" variant="tonal" @click="(edit = false)">
            Edit
        </v-btn>
        <v-btn v-if="edit === false" class="mr-2" variant="tonal" @click="edit = true, updatePost(currentPost.id)">
            Done
        </v-btn>

        <v-btn variant="tonal" @click="deletePost(currentPost.id), $router.push({name: 'home'})">
            Delete
        </v-btn>
        </div>
    </v-sheet>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { ref } from 'vue'
import { useRoute } from 'vue-router'


const store = useStore();
const router = useRoute()

let edit = ref(true) 
const  editedText = ref(null)


const show = computed(() => store.getters.showCurrentPost)


const updatePost = (id) => {
   
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  method: 'PATCH',
  body: JSON.stringify({
    body: editedText,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).catch((error) => {
  console.error(error);
});
}   

const deletePost = (id) =>  {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  method: 'DELETE',
});
}
store.commit('setCurrentPostFromServer', store.dispatch('getCurrentPostFromServer', router.params.id).then((res => res))) 
const currentPost = computed(() => store.getters.currentPostFromServer)
</script>