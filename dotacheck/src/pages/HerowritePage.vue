<template>
  <section class="write">
    <button @click="modalOpen = !modalOpen">{{ modalOpen ? 'Close' : 'Open'}}</button>
    <modal-write-hero
     v-if="modalOpen"
     @sendData="claimData"
    >
    </modal-write-hero>
  </section>
  <section class="herocounters">

  </section>
</template>

<script>
import ModalWriteHero from "@/components/Modal.vue";
import getHero from "../../api/getHero";

export default {
  components: {ModalWriteHero},
  data() {
    return {
      modalOpen: false,
      heroGet: '',
      heroCuntr: []
    }
  },
  methods: {
    claimData(hero) {
      this.modalOpen = false
      this.heroGet = hero.toLowerCase().replace(/ /g, '-')
    },
    sendRequest() {
      getHero.getHeroCunterPicks(this.heroGet)
          .then(heroCounterPicks => {
            this.heroCuntr = heroCounterPicks
          })
          .catch(error => {
            console.error('Failed fetch: ', error)
          })
    }
  }
}
</script>

<style>

</style>