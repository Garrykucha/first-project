<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import MyDialog from "@/components/UI/MyDialog.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect.vue";
import {getPosts} from "@/api/api.js";

export default {
  components: {
    MySelect,
    MyDialog,
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      selectedSort: 'Сортировать',
      sortOptions: [
        {value: 'title', name: 'по названию'},
        {value: 'body', name: 'по описанию'},
      ]
    }
  },
  methods: {

    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    deletePost(post) {
      this.posts = this.posts.filter(item => item.id !== post.id)

    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        const response = await getPosts()
        this.posts = this.posts.concat(response.data);
      } catch (error) {
        console.log('error', error)
      }
    },
  },
  mounted() {
    this.fetchPosts();
  }
}
</script>

<template>
  <div class="app">
    <div class="nav_panel">
      <div class="nav_item_1">
        <button @click="showDialog" class="add-post">
          Добавить пост
        </button>
        <button class="add-post" @click="fetchPosts">Получить посты</button>
      </div>
      <div class="nav_item_2">
        <MySelect
          v-model="selectedSort"
          :options="sortOptions"
        />
      </div>
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost"/>
    </MyDialog>
    <PostList :posts1='posts' @delete="deletePost"/>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.app {
  padding: 20px;
  background-color: #aab7b7;
  height: 100%;
}

.add-post {
  padding: 10px;
  border-radius: 5px;
  background-color: #939c9c;
  border: none;
  font-family: cursive;
  margin-right: 5px;
}

.nav_panel {
  display: flex;
  justify-content: space-between;
}
</style>
