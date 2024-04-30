<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import MyDialog from "@/components/UI/MyDialog.vue";
import MySelect from "@/components/UI/MySelect.vue";
import {getPosts} from "@/api/api.js";
import CustomButton from "@/components/UI/CustomButton.vue";
import {sortedPost} from "@/mixins/sort.js";
import MyInput from "@/components/UI/MyInput.vue";

export default {
  components: {
    MyInput,
    CustomButton,
    MySelect,
    MyDialog,
    PostList,
    PostForm,
  },
  data() {
    return {
      page: 1,
      limit: 10,
      totalPages: 0,
      posts: [],
      dialogVisible: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'по названию'},
        {value: 'body', name: 'по описанию'},
      ],
      searchQuery: '',
      isLoading: true
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
      this.isLoading = true
      try {
        const response = await getPosts(this.page, this.limit)
        this.posts = response.data;
        sortedPost(this.posts, this.selectedSort)
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
      } catch (error) {
        console.log('error', error)
      } finally {
        this.isLoading = false
      }
    },
    changePage(pageNumber) {
      this.page = pageNumber
    }
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    page(){
      this.fetchPosts()
    }
  },
  computed: {
    selectedSortArr() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]) )
    },
    sortedAndSearchedPosts(){
      return this.selectedSortArr?.filter(post => post.title.toLowerCase().includes(this.searchQuery))
    }
  }
}
</script>

<template>
  <div>
    <div class="nav_panel">
      <div class="nav_item_1">
        <CustomButton @click="showDialog">
          Добавить пост
        </CustomButton>
        <MyInput
          v-model="searchQuery"
          placeholder="Поиск"
        />
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
    <PostList
      :isLoading='isLoading'
      :posts1='sortedAndSearchedPosts'
      @delete="deletePost"
    />
    <div class="page__wrapper">
      <div
        v-for="pageNumber in totalPages"
        :key="page"
        class="page"
        :class="{
          'current-page': page === pageNumber,
        }"
        @click="changePage(pageNumber)"
      >
        {{pageNumber}}
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav_panel {
  display: flex;
  justify-content: space-between;
}

.nav_item_1 {
  margin: 10px 0 0 15px;
  display: flex;
  gap: 10px;
}

.nav_item_2 {
  margin: 10px 15px 0 0 ;
}
.page__wrapper {
  margin-top: 15px;
  display: flex;
  gap: 10px;
  justify-content: center;
}
.page {
  border: 1px solid teal;
  padding: 5px;
  border-radius: 2px;
  cursor: pointer;
}
.current-page {
  border: 2px solid #033636;
}
</style>

