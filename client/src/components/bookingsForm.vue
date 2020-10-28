<template>
<article>
    <form v-on:submit.prevent= "handleSubmit">
        <h2>Add a New Booking</h2>

        <label for="name">Name</label>
        <input type="text" id ="name" v-model="name" required />

        <label for="email">email</label>
        <input type="email" id = "email" pattern=".+@+.+" v-model="email"/>

        <label for="checkedin">Checked In</label>
        <input type="checkbox" name= "checkedin" v-model= "checkedin" checked>

        <input type="submit" value="Add Booking">

    </form>
</article>
</template>

<script>

import { eventBus } from '../main.js';

export default {
 data(){
    return {
     name: "",
     email:"",
     checkedin: false
     }
 },

 methods: {
     handleSubmit(){
         const payload = {
             name: this.name,
             email: this.email,
             checkedin: this.checkedin
         };
         
         eventBus.$emit('submit-booking', payload);
         this.name = '';
         this.email = '';
         this.checkedin = false;


     }
 }



 };  
 </script>
