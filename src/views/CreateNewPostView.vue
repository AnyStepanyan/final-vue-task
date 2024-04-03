<template>
  <v-sheet class="mx-auto ma-10" max-width="700">
    <h1 class="my-10">Create New Post</h1>
    <v-form ref="form" @submit.prevent>
      
      <v-textarea rows="2" v-model="title" placeholder="Title"></v-textarea>
      <v-textarea maxlength="auto" rows="10" v-model="content" placeholder="Write your content here"></v-textarea>


      <v-btn class="mt-2" @click="createPost" block>Submit</v-btn>
      <v-btn class="mt-4" color="error" block @click="reset">
        Reset
      </v-btn>
    </v-form>

  </v-sheet>
</template>

<script setup>
import { ref } from 'vue'
const title = ref('')
const content = ref('')

const createPost = () => {

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: content,
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }).catch((error) => {
  console.error(error);
});
}

const reset = () => {
  title.value = ''
  content.value = ''
}
</script>