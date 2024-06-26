import axios from "axios";
import {ref, onMounted} from "vue";

export function usePosts(limit) {
  const posts = ref([])
  const totalPages = ref(0)
  const loading = ref(true)

  const fetching = async () => {
    try {
      let response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: 1,
          _limit: limit
        }
      });
      totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
      posts.value = response.data;
      loading.value = false;
    } catch (error) {
      console.log('error', error)
    }
  }

  onMounted(fetching)
  return {
    posts, loading, totalPages
  }
}