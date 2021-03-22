<template>
    <main class="main-content">
        <TheHeader title="About Me" />
        <p>Weather App is a small NodeJS project created by Miguel Rivera.</p>
        <p>Get access to your current weather using the Mapbox's Geolocation API and WeatherStack's Weather API.</p>
    </main>
</template>

<script>
import TheHeader from '../components/TheHeader';
export default {
    components: {
        TheHeader
    }
}
</script>

<style>
.portrait {
    width: 250px;
}
</style>