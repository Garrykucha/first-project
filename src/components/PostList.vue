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
    delPost(post) {
      this.$emit('delete', post)
    }
  }
}
</script>

<template>
  <PostItem
    v-if="posts1.length > 0"
    v-for="post in posts1"
    :posts1="post"
    :key="post.id"
    @delete="delPost"
  />
  <div v-else>
    <h1>Список пуст</h1>
  </div>
</template>

<style scoped>

</style>
