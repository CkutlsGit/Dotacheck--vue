<template>
  <div class="modal">
    <input type="text" placeholder="name hero" v-model.trim="hero">
    <button type="submit" @click="sendData" :disabled="isHeroValid">Submit</button>
  </div>
</template>

<script>
import heroList from "@/mocks/HeroList";

export default {
  name: 'Modal-WriteHero',
  data() {
    return {
      hero: ''
    }
  },
  computed: {
    isHeroValid() {
      return !heroList.heroNames.map(name => name.toLowerCase()).includes(this.hero.toLowerCase())
    }
  },
  methods: {
    sendData() {
      this.$emit('sendData', this.hero)
    }
  }
}
</script>