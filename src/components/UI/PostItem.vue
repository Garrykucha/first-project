<script>
export default {
  props: {
    posts1: {
      type: Object,
      required: true,
    }
  },
  methods: {
    delPost(){
      this.$emit('delete',this.posts1);
    }
  }
}
</script>

<template>
  <div class="post">
    <div><strong>Название: </strong>{{ posts1.title }}</div>
    <div><strong>Описание: </strong>{{ posts1.body }}</div>
    <div class="btn__item">
      <button @click="delPost">
        Удалить
      </button>
    </div>
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
