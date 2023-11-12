<template>
  <div class="modal">
    <input type="text" placeholder="name hero" v-model.trim="hero">
    <button type="submit" @click="sendData">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'Modal-WriteHero',
  data() {
    return {
      hero: ''
    }
  },
  methods: {
    sendData() {
      this.$emit('sendData', this.hero)
    }
  }
}
</script>