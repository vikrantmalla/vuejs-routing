<template>
  <header>
    <nav class="navigation">
      <RouterLink class="brand-name" to="/">CryptoMarket</RouterLink>
      <button class="hamburger" @click="toggleNav">
        <h1>=</h1>
      </button>
      <div :class="{ 'navigation-menu': true, 'expanded': isNavExpanded }">
        <ul>
          <li>
            <RouterLink to="/">Crypto</RouterLink>
          </li>
          <li>
            <RouterLink to="/watchlist">WatchList</RouterLink>
          </li>
          <li>
            <RouterLink to="/exchange">Exchange</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue';

const isNavExpanded = ref(false);

const toggleNav = () => {
  isNavExpanded.value = !isNavExpanded.value;
};
</script>

<style scoped>
.navigation {
  position: relative;
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 0.5rem 1.5rem;
  background-color: #fff;
  color: black;
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
  border: none;
}

.brand-name {
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
  margin-left: 1rem;
}

.navigation-menu {
  margin-left: auto;
}

.navigation-menu ul {
  display: flex;
  padding: 0;
}

.navigation-menu li {
  list-style-type: none;
  margin: 0 1rem;
}

.navigation-menu li a {
  text-decoration: none;
  display: block;
  width: 100%;
}

.hamburger {
  border: 0;
  height: 40px;
  width: 40px;
  /* padding: 0.5rem; */
  border-radius: 0.4rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  display: none;
}

@media screen and (max-width: 550px) {
  .hamburger {
    display: block;
  }

  .navigation-menu ul {
    flex-direction: column;
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    height: calc(100vh - 60px);
    background-color: white;
    border-top: 1px solid black;
    display: none;
  }

  .navigation-menu li {
    text-align: center;
    margin: 0;
  }

  .navigation-menu li a {
    color: black;
    width: 100%;
    padding: 1.5rem 0;
  }

  .navigation-menu li:hover {
    background-color: #eee;
  }

  .navigation-menu.expanded ul {
    display: block;
  }
}
</style>
