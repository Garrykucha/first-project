<script>
import PostItem from '@/components/UI/PostItem.vue'

export default {
  components: {
    PostItem
  },
  props: {
    posts1: {
      type: Array,
      required: true,
    }
  }
}
</script>

<template>
  <PostItem :posts1="post" v-for="post in posts1" :key="post.id"/>
</template>

<style scoped>

</style>
