<template>
  <article v-if="booking">
    <h2>{{ booking.name}}</h2>
    <p>{{ booking.email }}</p>
    <p>{{ booking.checkedin }}</p>
     <button v-on:click="handleDelete(booking._id)">Delete Booking</button>
  </article>
 
</template>

<script>
import { eventBus } from '../main'
export default {
  name: "booking",
  props: ["booking"],


  methods: {
      handleDelete(id){
          eventBus.$emit('delete-booking', id);
      }
  }
}
</script>

<style>

</style>