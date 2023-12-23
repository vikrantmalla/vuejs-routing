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
      <tbody v-if="cryptosData">
        <tr v-for="crypto in cryptosData.data" :key="crypto.id">
          <td>{{ crypto.name }}<br />{{ crypto.symbol }}</td>
          <td>${{ millify(crypto.priceUsd) }}</td>
          <td :style="{ color: crypto.changePercent24Hr > 0 ? 'rgb(14, 203, 129)' : 'red' }"> {{ crypto.changePercent24Hr
            > 0 ? '+' : '' }}{{ parseFloat(crypto.changePercent24Hr).toFixed(2) }}</td>
          <td>{{ millify(crypto.marketCapUsd) }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import millify from 'millify';

const store = useStore();
const cryptosData = ref(null);

const getCryptosData = () => {
  store.dispatch('crypto/fetchCryptosData');
};

onMounted(() => {
  getCryptosData();
});

watch(() => store.getters['crypto/getCryptosData'], (newCryptosData) => {
  cryptosData.value = newCryptosData;
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