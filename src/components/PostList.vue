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
  },
  methods: {
    delPost(post){
      this.$emit('delete',post)
    }
  }
}
</script>

<template>
  <PostItem
    :posts1="post"
    v-for="post in posts1"
    :key="post.id"
    @delete="delPost"
  />
</template>

<style scoped>

</style>
