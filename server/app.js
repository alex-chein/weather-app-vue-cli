const express = require('express');
const path = require('path');
const cors = require('cors');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const app = express();
const weatherKey = process.env.WEATHER_STACK_ACCESS_KEY;
const mapboxKey = process.env.MAPBOX_API_KEY;
const publicDirectoryPath = path.join(__dirname, '../dist');

app.use(express.static(publicDirectoryPath));

// Prevent CORS block policy on development
const dev = process.argv[2];
if(dev === 'dev') {
    app.use(cors());
}

app.get('/weather', (req, res) => {
    const { address, latitude, longitude } = req.query;
    if(!address && !(latitude && longitude)) return res.send({ error: 'You must provide a valid location.' });

    geocode({ address, latitude, longitude }, mapboxKey, (error, { longitude, latitude, location } = {}) => {
        if(error) return res.send({ error });
    
        forecast(longitude, latitude, weatherKey, (error, forecastData) => {
            if(error) return res.send({ error });
    
            res.send({
                location,
                forecast: forecastData
            });
        });
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

module.exports= app;