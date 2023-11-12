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
    <ul>
      <li
          v-for="hero in heroCuntr"
          :key="hero"
      >
        {{ hero }}
      </li>
    </ul>
  </section>
</template>

<script>
import ModalWriteHero from "@/components/Modal.vue";
import { getHeroCunterPicks } from "../../api/getHero";

export default {
  components: { ModalWriteHero },
  data() {
    return {
      modalOpen: false,
      heroGet: '',
      heroCuntr: []
    }
  },
  watch: {
    heroGet: function () {
      this.sendRequest();
    }
  },
  methods: {
    claimData(hero) {
      this.modalOpen = false;
      this.heroGet = hero.toLowerCase().replace(/ /g, '-');
    },
    sendRequest() {
      getHeroCunterPicks(this.heroGet)
          .then(heroCounterPicks => {
            this.heroCuntr = heroCounterPicks;
          })
          .catch(error => {
            console.error('Failed fetch: ', error);
          });
    }
  }
}
</script>

<style>
</style>
