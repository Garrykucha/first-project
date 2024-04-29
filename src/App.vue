<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import {getPosts} from "@/api/api.js";

export default {
  components: {
    PostList, PostForm,
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript 1', body: 'Описание для поста 1'},
        {id: 2, title: 'JavaScript 2', body: 'Описание для поста 2'},
        {id: 3, title: 'JavaScript 3', body: 'Описание для поста 3'},
      ],
    }
  },
  methods: {
    async createPost(post) {
      this.posts.push(post);
      const result = await getPosts()
      console.log('result', result)
    },
    deletePost(post) {
      this.posts = this.posts.filter(item => item.id !== post.id)
    }
  }
}
</script>

<template>
  <div class="app">
    <PostForm
      @create="createPost"
    />
    <PostList
      @delete="deletePost"
      :posts1='posts'
    />


  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}


</style>
