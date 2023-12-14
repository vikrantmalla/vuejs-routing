
<template>
  <Navbar />
  <div>
    <div v-if="data">
      <h2>{{ data.title }}</h2>
      <p>{{ data.body }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Navbar from "./components/NavBar.vue"

const data = ref(null);

const fetchData = () => {
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      data.value = response.data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

onMounted(() => {
  fetchData();
});
</script>
