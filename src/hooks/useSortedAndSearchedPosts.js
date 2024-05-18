import {computed, ref} from "vue";


export const useSortedAndSearchedPosts = (SortedPosts) => {

  const searchQuery = ref('')

  const sortedAndSearchedPosts = computed(() => {
    return SortedPosts.value?.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
  })

  return {
    searchQuery, sortedAndSearchedPosts
  }
}