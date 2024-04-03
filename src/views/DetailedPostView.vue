<template >
    
    <div v-if="true === true">
        <DetailedPostContent />
        <DetailedPostComments />
    </div>

</template>

<script setup>
import DetailedPostContent from '../components/DetailedPostContent.vue'
import DetailedPostComments from '../components/DetailedPostComments.vue'
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const show = computed(() => store.getters.showCurrentPost)
</script>