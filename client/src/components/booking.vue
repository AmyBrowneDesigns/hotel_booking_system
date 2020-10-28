<template>
  <article v-if="booking">
    <h2>{{ booking.name}}</h2>
    <p>{{ booking.email }}</p>
    <p>{{ booking.checkedin }}</p>
  </article>
</template>

<script>
export default {
  name: "booking",
  props: ["booking"]
}
</script>

<style>

</style>