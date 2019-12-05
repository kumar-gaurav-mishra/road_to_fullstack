const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('landing.ejs');
});
app.get('/campgrounds', (req, res) => {
  res.render('campgrounds.ejs');
});
app.listen(4000, () => console.log(`Express server is running at http://localhost:4000`));
