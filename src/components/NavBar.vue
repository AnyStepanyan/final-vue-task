<template>
  <v-card>

    <v-list class="d-flex" nav>
     <v-list-item :to="{path: '/'}" prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
    
      <v-list-item :to="{path: '/newPost'}"prepend-icon="mdi-forum" title="Create New Post" value="newPost"></v-list-item>
    </v-list>


  </v-card>
</template>

<script setup>

</script>