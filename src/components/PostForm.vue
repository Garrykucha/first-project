<script>
import CustomButton from "@/components/UI/CustomButton.vue";

export default {
  components: {CustomButton},
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
    <custom-button
      class="btn"
      @click="createPost"
    >
      Добавить
    </custom-button>

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


}
</style>
