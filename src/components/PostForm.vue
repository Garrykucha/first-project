<script>
import CustomButton from "@/components/UI/CustomButton.vue";
import MyInput from "@/components/UI/MyInput.vue";
import VFocus from "@/directives/VFocus.js";
export default {
  directives: {
    'focus': VFocus
  },
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
    <MyInput v-focus :model-value="this.post.title" @model-value="(title) => this.post.title = title" placeholder="Название поста"></MyInput>
    <MyInput :model-value="this.post.body" @model-value="(body) => this.post.body = body" placeholder="Описание поста"></MyInput>
    <custom-button
      class="btn"
      @click="createPost"
    >
      Добавить
    </custom-button>

  </form>
</template>

<style scoped>


form {
  display: flex;
  flex-direction: column;
  .btn {

  }

}
</style>
