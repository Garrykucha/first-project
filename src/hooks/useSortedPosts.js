import {computed, ref} from "vue";


export const useSortedPosts = (posts) => {

  const selectedSort = ref('')

  const sortedPosts = computed(() => {
    return [...posts.value].sort((post1, post2) => {
      if (typeof post1[selectedSort.value] === 'number') {
        return post1[selectedSort.value] - post2[selectedSort.value]
      }
      return post1[selectedSort.value]?.localeCompare(post2[selectedSort.value])
    })
  })
  console.log(sortedPosts.value)
  return {
    selectedSort, sortedPosts
  }
}