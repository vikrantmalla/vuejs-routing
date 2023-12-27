<template>
  <div>
    <div v-if="isLoading">
      <LoadingText />
    </div>
    <div v-else>
      <div v-if="cryptosData">
        <CoinTable :cryptosData="cryptosData" />
      </div>
      <div v-else class="not-found">
        No data available.
      </div>
    </div>
  </div>
  
</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import LoadingText from '@/components/common/LoadingText.vue';
import CoinTable from '@/components/modules/Home/CoinTable.vue';

const store = useStore();
const isLoading = ref(false);
const cryptosData = ref(null);
const singleCoinData = ref(null);
console.log(singleCoinData.value)
const getCryptosData = () => {
  store.dispatch('crypto/fetchCryptosData');
};

const getSingleCoinData = async () => {
  const coinId = 'binance-coin'; 
  await store.dispatch('crypto/getSingleCoinData', coinId);
};

onMounted(() => {
  getCryptosData();
  getSingleCoinData();
});

watch(() => store.getters['crypto/isLoading'], (newLoadingState) => {
  isLoading.value = newLoadingState;
});

watch(() => store.getters['crypto/getCryptosData'], (newCryptosData) => {
  cryptosData.value = newCryptosData;
});

watch(() => store.state.crypto.singleCoinData, (newCryptosData) => {
  singleCoinData.value = newCryptosData;
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

.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
</style>