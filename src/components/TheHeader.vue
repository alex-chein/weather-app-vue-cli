<template>
  <header>
    <h1>{{ title }}</h1>
    <nav>
        <router-link to="/">Weather</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/help">Help</router-link>
    </nav>
  </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Weather App'
        }
    }
}
</script>

<style scoped>
header {
    margin-top: 16px;
    margin-bottom: 48px;
}

h1 {
    font-size: 64px;
    margin-bottom: 16px;
}

header a {
    color: #888;
    margin-right: 16px;
    text-decoration: none;
}
</style>