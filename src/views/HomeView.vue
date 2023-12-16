<template>
  <section class="wrappers">
    <table class="coins">
      <thead>
        <tr>
          <th>Coin</th>
          <th>Price</th>
          <th>24hrs change</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody v-if="data">
        <tr v-for="crypto in data.data" :key="crypto.id">
          <td>{{ crypto.name }}<br />{{ crypto.symbol }}</td>
          <td>{{ crypto.priceUsd }}</td>
          <td>{{ crypto.changePercent24Hr }}</td>
          <td>{{ crypto.marketCapUsd }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const data = ref(null);

const getCryptosData = () => {
  axios.get('https://api.coincap.io/v2/assets')
    .then(response => {
      data.value = response.data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

onMounted(() => {
  getCryptosData();
});
</script>

<style scoped>
.wrappers {
  overflow-x: auto;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
  margin-bottom: 2rem;
  box-shadow: rgb(41 44 46 / 30%) 0px 1px 2px 0px,
    rgb(27 29 31 / 15%) 0px 2px 6px 2px;
}

th {
  background-color: #3f51b5;
  color: #fff;
}

th,
td {
  text-align: left;
  padding: 8px;
}

th,
td {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}
</style>