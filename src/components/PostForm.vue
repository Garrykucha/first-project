<script>
import CustomButton from "@/components/UI/CustomButton.vue";
import MyInput from "@/components/UI/MyInput.vue";
export default {
  components: {CustomButton, MyInput},
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
<!--    <input-->
<!--      v-model="this.post.title"-->
<!--      class="input"-->
<!--      type="text"-->
<!--      placeholder="Название поста"-->
<!--    >-->
<!--    <input-->
<!--      v-model="this.post.body"-->
<!--      class="input"-->
<!--      type="text"-->
<!--      placeholder="Описание поста"-->
<!--    >-->
    <MyInput v-model="this.post.title" placeholder="Название поста"></MyInput>
    <MyInput v-model="this.post.body" placeholder="Описание поста"></MyInput>
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
