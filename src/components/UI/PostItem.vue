<script>
import CustomButton from "@/components/UI/CustomButton.vue";

export default {
  components: {CustomButton},
  props: {
    posts1: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  <div class="post">
    <div><strong>Название: </strong>{{ posts1.title }}</div>
    <div><strong>Описание: </strong>{{ posts1.body }}</div>
      <custom-button @click="delPost">
        Удалить
      </custom-button>
  </div>

</template>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid darkgreen;
  margin-top: 15px;
}

.btn__item button {
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
}
</style>
