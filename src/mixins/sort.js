export const sortedPost = (currentPosts, isSorted) => {
    if (isSorted) {
        currentPosts.sort((a, b) => {
            return a[isSorted]?.localeCompare(b[isSorted])
        })
    }
}