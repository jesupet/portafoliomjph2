<template>
    <button v-if="isInternal" @click="scrollToSection(internalLink)" type="button" class="btn btn-purple rounded-pill">
      {{buttonText}}
    </button>
    <a class="btn btn-purple rounded-pill" v-else :href="externalLink" target="_blank">{{ buttonText }}</a>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PurpleButton',
  props: {
    isInternal: {
      type: Boolean,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    internalLink: {
      type: String,
      default: '#',
    },
    externalLink: {
      type: String,
      default: '#',
    },
  },
  methods: {
    ...mapActions(['scrollToSection'])
  }
}
</script>

<style scoped>



</style>