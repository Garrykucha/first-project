<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'

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
    createPost(post) {
      this.posts.push(post); //TODO переделай тут всё!!! шуе
    }
  }
}
</script>

<template>
  <div class="app">
    <PostForm @create="createPost"/>
    <PostList :posts1='posts'/>
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
