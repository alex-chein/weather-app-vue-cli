<template>
  <main class="main-content">
    <TheHeader />
    <p>Use this site to get your weather!</p>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Location" v-model.trim="search"/>
      <button type="submit">Search</button>
    </form>
    <p>or</p>
    <button @click="myLocation">Detect My Location</button>

    <p id="message1">{{ message1 }}</p>
    <p id="message2">{{ message2 }}</p>
  </main>
</template>

<script>
import axios from 'axios';
import TheHeader from '../components/TheHeader';
export default {
    components: {
        TheHeader
    },
    data() {
        return {
            search: '',
            message1: '',
            message2: ''
        }
    },
    methods: {
        async onSubmit() {
            this.message2 = '';
            if(this.search.length === 0) return this.message1 = 'Please provide a location.';
            this.message1 = 'Loading...';

            await axios.get(`http://localhost:8080/weather?address=${this.search}`)
                .then((response) => {
                    const { error, location, forecast } = response.data;
                    if(error) return this.message1 = error;

                    this.message1 = location;
                    this.message2 = forecast;
                    this.search = '';
                })
                .catch(() => this.message1 = 'Server connection error. Please try again later.');
        },
        myLocation() {
            this.message2 = '';
            if(!navigator.geolocation) return this.message1 = 'Sorry, geolocation is not supported by your browser.';
            
            this.message1 = 'Loading...';

            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;

                await axios.get(`http://localhost:8080/weather?latitude=${latitude}&longitude=${longitude}`)
                    .then((response) => {
                        const { error, location, forecast } = response.data;
                        if(error) return this.message1 = 'Server error. Please try again later.';

                        this.message1 = location;
                        this.message2 = forecast;
                    })
                    .catch((error) => console.log(error));
            });
        }
    },
    mounted() {
        console.log(process.env);
    }
};
</script>

<style scoped>
input {
    border: 1px solid #ccc;
    padding: 8px;
}

button {
    cursor: pointer;
    border: 1px solid #888;
    background: #888;
    color: white;
    padding: 8px;
}
</style>