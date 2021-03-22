<template>
  <div class="main-content">
      <TheHeader title="Help" />
      <img class="portrait" src="/img/robot.png" alt="A Robot!">
      <p>How can I help you?</p>
      <nav class="help-links">
        <a href="/">I want to get my weather</a>
        <a href="/about">I want to learn more about this app</a>
        <a href="https://nodejs.org/en/" target="_blank">I want to know more about NodeJS</a>
        <a href="https://www.mapbox.com/" target="_blank">I want to know more about Mapbox</a>
        <a href="https://weatherstack.com/" target="_blank">I want to know more about WeatherStack</a>
      </nav>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader';
export default {
  components: {
    TheHeader
  }
}
</script>

<style scoped>
.help-links {
    display: inline-block;
}

.help-links a {
    display: block;
    margin-bottom: 12px;
}
</style>