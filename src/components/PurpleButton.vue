<template>
  <button type="button" class="btn btn-purple rounded-pill">
    <router-link :to="to">{{buttonText}}</router-link>
  </button>
</template>

<script>

export default {
  name: 'PurpleButton',
  props: {
    to: {
      type: String,
      default: '/'
    },
    buttonText: {
      type: String,
      default: 'Button'
    },
    href: {
      type: String,
      default:'/'
    }
  }
}
</script>

<style scoped>
.btn-purple {
  background-color: #5241B8;
  color: #fff;
  font-size: 14px;
  padding: 8px 20px 8px 20px;
}
button:hover {
  text-decoration: none;
  color: #5241B8;
  background-color: #fff;
  border-color:#5241B8;
}


</style>