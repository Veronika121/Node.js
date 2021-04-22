const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));

app.get('/', (req, res) => {
  res.render('index');
});
app.post('/weather', (req, res) => {
  const API_KEY = require('./sources/keys.json').API_KEY;
  axios(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&APPID=${API_KEY}`,
  )
    .then((response) => {
      res.render('index', {
        weatherText: `The temperature in ${req.body.cityName} is ${Math.floor(
          response.data.main.temp - 273,
        )} ℃`,
      });
    })
    .catch((err) => res.render('index', { weatherText: 'City is not found!' }));
  //console.log(apiResult);
  //res.send(req.body.cityName);
});
app.listen(3000);
