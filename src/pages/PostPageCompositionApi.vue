<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import MyDialog from "@/components/UI/MyDialog.vue";
import MySelect from "@/components/UI/MySelect.vue";
import {getPosts} from "@/api/api.js";
import CustomButton from "@/components/UI/CustomButton.vue";
import MyInput from "@/components/UI/MyInput.vue";
import axios from "axios";
import VIntersection from "@/directives/VIntersection.js";
import {ref} from 'vue'
import {usePosts} from "@/hooks/usePosts.js";
import {useSortedPosts} from "@/hooks/useSortedPosts.js";
import {useSortedAndSearchedPosts} from "@/hooks/useSortedAndSearchedPosts.js";

export default {
  directives: {
    'intersection': VIntersection,
  },
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
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'по названию'},
        {value: 'body', name: 'по описанию'},
        {value: 'id', name: 'по id'}
      ],
    }
  },

  setup(props){
    const {posts, loading, totalPages} = usePosts(10);
    const {selectedSort, sortedPosts} = useSortedPosts(posts)
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

    return {
      posts,
      loading,
      totalPages,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts
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
          @model-value="(value) => {searchQuery = value}"
        />
      </div>
      <div class="nav_item_2">
        <MySelect
          v-model="selectedSort"
          :options="sortOptions"
          @select="(choice) => {selectedSort = choice}"
        />
      </div>
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost"/>
    </MyDialog>
    <PostList :posts1='sortedAndSearchedPosts' @delete="deletePost"/>
    <div v-if="!this.loading" v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<style scoped>


.observer {
  height: 30px;
  background-color: gray;
}

.nav_panel {
  display: flex;
  justify-content: space-between;
}

.nav_item_1 {
  display: flex;
  gap: 10px;
}

.nav_item_2 {
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: flex-end;
}

.page__wraper {
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
