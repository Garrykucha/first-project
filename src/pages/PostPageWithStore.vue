<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import MyDialog from "@/components/UI/MyDialog.vue";
import MySelect from "@/components/UI/MySelect.vue";
import CustomButton from "@/components/UI/CustomButton.vue";
import MyInput from "@/components/UI/MyInput.vue";
import VIntersection from "@/directives/VIntersection.js";
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";

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
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setPosts: 'post/setPosts',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),
    createPost(post) {
      let new_arr = [...this.posts, post]
      this.setPosts(new_arr)
      /*this.posts.push(post);*/
      this.dialogVisible = false;

    },
    deletePost(post) {
      let new_arr = this.posts.filter(item => item.id !== post.id)
      this.setPosts(new_arr)
      /*this.posts = this.posts.filter(item => item.id !== post.id)*/

    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {},
  computed: {
    ...mapGetters({
      selectedSortArr: 'post/selectedSortArr',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
    }),
    ...mapState({
      loading: state => state.post.loading,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      posts: state => state.post.posts,
      selectedSort: state => state.post.selectedSort,
      sortOptions: state => state.post.sortOptions,
      searchQuery: state => state.post.searchQuery,
    }),
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
          :modelValue="searchQuery"
          @model-value="setSearchQuery"
          placeholder="Поиск"
        />
      </div>
      <div class="nav_item_2">
        <MySelect
          :modelValue="selectedSort"
          :options="sortOptions"
          @select="setSelectedSort"
        />
      </div>
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost"/>
    </MyDialog>
    <PostList :posts1='sortedAndSearchedPosts' @delete="deletePost"/>
    <div v-if="!this.loading" v-intersection="this.loadMorePosts" class="observer"></div>
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
