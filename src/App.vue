<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import MyDialog from "@/components/UI/MyDialog.vue";
import MySelect from "@/components/UI/MySelect.vue";
import {getPosts} from "@/api/api.js";
import CustomButton from "@/components/UI/CustomButton.vue";
import {sortedPost} from "@/mixins/sort.js";

export default {
  components: {
    CustomButton,
    MySelect,
    MyDialog,
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      selectedSort: '',
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
      sortedPost(this.posts, this.selectedSort)
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
        sortedPost(this.posts, this.selectedSort)
      } catch (error) {
        console.log('error', error)
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    selectedSort(newValue) {
      sortedPost(this.posts, newValue)
    },
  },
  computed: {}
}
</script>

<template>
  <div class="app">
    <div class="nav_panel">
      <div class="nav_item_1">
        <CustomButton @click="showDialog">
          Добавить пост
        </CustomButton>
        <CustomButton @click="fetchPosts">Получить посты</CustomButton>
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


.nav_panel {
  display: flex;
  justify-content: space-between;
}

.nav_item_1 {
  display: flex;
  gap: 10px;
}
</style>
