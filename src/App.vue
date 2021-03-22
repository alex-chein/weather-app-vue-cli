<template>
  <main class="main-content">
    <router-view></router-view>
    <TheFooter />
  </main>
</template>

<script>
import TheFooter from "./components/TheFooter";
export default {
  components: {
    TheFooter,
  },
};
</script>

<style>
body {
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 auto;
    max-width: 650px;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main-content {
    flex-grow: 1;
}
</style>