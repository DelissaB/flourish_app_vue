<template>
  <div class="locations">
    <h1>Locations</h1>
    <div v-for="location in locations">
      <h2>{{ location.neighborhoods }}</h2>
      <p>Address: {{ location.address }}</p>
      <p>Zipcode: {{ location.zipcode }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      locations: [],
    };
  },
  created: function() {
    axios.get("/api/locations").then(response => {
      console.log("locations index", response);
      this.locations = response.data;
    });
  },
  methods: {},
};
</script>