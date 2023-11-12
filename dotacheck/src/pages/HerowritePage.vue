<template>
  <section class="write">
    <button @click="modalOpen = !modalOpen">{{ modalOpen ? 'Close' : 'Open'}}</button>
    <modal-write-hero
     v-if="modalOpen"
    >
    </modal-write-hero>
  </section>
</template>

<script>
import ModalWriteHero from "@/components/Modal.vue";

export default {
  components: {ModalWriteHero},
  data() {
    return {
      modalOpen: false,
    }
  }
}
</script>

<style>

</style>