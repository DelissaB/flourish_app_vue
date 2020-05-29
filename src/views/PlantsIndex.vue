<template>
  <div class="locations">
    <h1>Plants</h1>
    <div v-for="plant in plants">
      <h2>{{ plant.name }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      plants: [],
    };
  },
  created: function() {
    axios.get("/api/plants").then(response => {
      console.log("plants index", response);
      this.plants = response.data;
    });
  },
  methods: {},
};
</script>