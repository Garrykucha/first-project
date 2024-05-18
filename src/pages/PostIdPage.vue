<script>
export default {
  name: "PostIdPage",
  props: {
    title: {
      type: String,
    }
  }
}

</script>

<template>
<h1>Это страница поста с ID = {{$route.params.id}}</h1>
  <div><pre>{{$route}}</pre></div>
</template>

<style scoped>

</style>