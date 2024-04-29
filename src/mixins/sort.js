export const sortedPost = (currentPosts, isSorted) => {
    return [...currentPosts].sort((a, b) =>  {a[isSorted]?.localeCompare(b[isSorted]) })
}
