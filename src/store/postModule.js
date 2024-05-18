import axios from "axios";

export const postModule = {
  state: function () {
    return {
      loading: true,
      page: 1,
      limit: 10,
      totalPages: 0,
      posts: [],
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'по названию'},
        {value: 'body', name: 'по описанию'},
        {value: 'id', name: 'по id'}
      ],
      searchQuery: '',
    }
  },
  getters: {
    selectedSortArr(state) {
      return [...state.posts].sort((post1, post2) => {
        if (typeof post1[state.selectedSort] === 'number') {
          return post1[state.selectedSort] - post2[state.selectedSort]
        }
        return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
      })
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.selectedSortArr?.filter(post => post.title.toLowerCase().includes(state.searchQuery))
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },

    setPage(state, page) {
      state.page = page
    },

    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    },

    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },

    setTotalPages(state, totalPages) {
      state.totalPages = totalPages
    },
    setLoading(state, loading) {
      state.loading = loading
    },
  },
  actions: {
    async fetchPosts({state, commit}) {
      try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit
          }
        });
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
        commit('setPosts', response.data)
        commit('setLoading', false)
      } catch (error) {
        console.log('error', error)
      }
    },
    async loadMorePosts({state, commit}) {
      try {
        commit('setPage', state.page + 1)
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit
          }
        });
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
        commit('setPosts', [...state.posts, ...response.data])
      } catch (error) {
        console.log('error', error)
      }
    },
  },
  namespaced: true,
}