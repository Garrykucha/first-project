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
    deletePost(post) {
      this.$emit('delete', post)
      console.log(this.posts1)
    }
  }
}
</script>

<template>
  <transition-group name="post-list">
    <PostItem
      v-for="post in posts1"
      :posts1="post"
      :key="post.id"
      @delete="deletePost"
    />
  </transition-group>

</template>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.1s;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.post-list-move {
  transition: transform 0.2s ease;
}
</style>
