<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input
      v-model="post.title"
      class="input"
      type="text"
      placeholder="Название поста"
    >
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Описание поста"
    >
    <button
      class="btn"
      @click="createPost"
    >
      Добавить
    </button>

  </form>
</template>

<style scoped>
.input {
  width: 90%;
  border: none;
  padding: 15px;
  margin-top: 15px;
}

form {
  display: flex;
  flex-direction: column;

  .btn {
    align-self: flex-end;
    margin-top: 10px;
    padding: 15px 15px;
    background-color: none;
    color: teal;
    border: 1px solid teal;
  }
}
</style>