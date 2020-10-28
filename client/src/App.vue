<template>
<main>
  <h1>Hotel Code</h1>
  <booking-form></booking-form>
  <bookings-grid v-if="bookings" :bookings="bookings"></bookings-grid>
</main>


</template>

<script>
import BookingService from './services/BookingService.js';
import BookingsGrid from './components/BookingsGrid.vue';
import BookingForm from './components/BookingsForm.vue';

export default {
  name: 'App',
  components: {
    "bookings-grid": BookingsGrid,
    "booking-form": BookingForm
  },
  data () {
    return {
      bookings: []
    }
  },
  mounted() {
    this.showBookings()
  },
  methods: {
    showBookings() {
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
