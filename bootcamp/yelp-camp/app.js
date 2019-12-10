const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/campgrounds', { useNewUrlParser: true, useUnifiedTopology: true });
const CampGrounds = require('./models/campground');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  res.render('landing.ejs');
});
app.get('/campgrounds', async (req, res) => {
  const campGrounds = await CampGrounds.find();
  res.render('index.ejs', { campGrounds });
});
app.post('/campgrounds', async (req, res) => {
  try {
    const campGrounds = new CampGrounds(req.body);
    await campGrounds.save();
    res.redirect('/campgrounds/new');
  } catch (err) {
    console.log(err);
    res.redirect('/campgrounds/new');
  }
});
app.get('/campgrounds/new', async (req, res) => {
  res.render('new.ejs');
});
app.get('/campgrounds/:id', async (req, res) => {
  try {
    let camp = await CampGrounds.findById(req.params.id);
    res.render('show.ejs', { camp });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
app.listen(4000, () => console.log(`Express server is running at http://localhost:4000`));
