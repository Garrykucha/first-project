<script>
import CustomButton from "@/components/UI/CustomButton.vue";

export default {
  components: {CustomButton},
  props: {
    posts1: {
      type: Object,
      required: true,
    }
  },
  methods: {
    delPost() {
      this.$emit('delete', this.posts1)
    }
  }
}
</script>

<template>
  <div class="post">
    <div><strong>id: </strong>{{posts1.id}}</div>
    <div><strong>Название: </strong>{{ posts1.title }}</div>
    <div><strong>Описание: </strong>{{ posts1.body }}</div>
    <custom-button class="btn_open" @click="$router.push(`posts/${posts1.id}`)">
      Открыть
    </custom-button>
    <custom-button @click="delPost">
      Удалить
    </custom-button>
  </div>

</template>

<style scoped lang="scss">
.post {
  padding: 15px;
  border: 2px solid darkgreen;
  margin-top: 15px;
  border-radius: 10px;
}

.btn__item button {
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
}
.btn_open {
  margin-right: 10px;
}
</style>
