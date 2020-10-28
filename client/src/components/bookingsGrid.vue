<template>
  <section>
    <booking v-for="(booking, index) in bookings" :key="index" :booking="booking"></booking>
  </section>
</template>

<script>
import Booking from './Booking.vue'

export default {
  name: "bookings-grid",
  props: ['bookings'],
  components: {
    "booking": Booking
  }

}
</script>

<style scoped>
section {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
}
</style>