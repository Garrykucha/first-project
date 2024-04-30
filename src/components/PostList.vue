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
    },
    isLoading: {
      type: Boolean
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
    <div
      style="margin: 0 10px"
      v-if="!isLoading"
    >
      <PostItem
        @delete="deletePost"
        :posts1="post"
        v-for="post in posts1"
        :key="post.id"
      />
    </div>
    <div>
      <v-progress-circular
        v-if="isLoading"
        indeterminate
        color="#22c07a"
        :width="5"
        :size="40"
        class="loading-circle"
      />
    </div>

  </transition-group>

</template>

<style scoped>
.loading-circle {
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
}
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
