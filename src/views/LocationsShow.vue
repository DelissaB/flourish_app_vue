<template>
  <div class="locations-show">
    <h2>Neighborhood {{ location.neighborhood }}</h2>
    <!-- <img v-bind:src="photo.url" v-bind:alt="photo.name" /> -->
    <p>Address: {{ location.address }}</p>
    <p>Zipcode: {{ location.zipcode }}</p>
    <router-link to="/locations">Locations</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      location: {},
    };
  },
  created: function() {
    axios.get("/api/locations/3" + this.$route.params.id).then(response => {
      console.log("locations show", response);
      this.location = response.data;
    });
  },
  methods: {},
};
</script>