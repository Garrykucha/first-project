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
      page: 1,
      limit: 10,
      totalPages: 0,
      posts: [],
      dialogVisible: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'по названию'},
        {value: 'body', name: 'по описанию'},
        {value: 'id', name: 'по id'}
      ],
      searchQuery: '',
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
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
        console.log(this.posts)
      } catch (error) {
        console.log('error', error)
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response =  await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
      } catch (error) {
        console.log('error', error)
      }
    },
    /*changePage(pageNumber) {
      this.page = pageNumber
    }*/
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {

  },
  computed: {
    selectedSortArr() {
      return [...this.posts].sort((post1, post2) => {
        if (typeof post1[this.selectedSort] === 'number') {
          return post1[this.selectedSort] - post2[this.selectedSort]
        }
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      } )
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
    <PostList :posts1='sortedAndSearchedPosts' @delete="deletePost"/>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!--    <div class="page__wraper">
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
        </div>-->
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
