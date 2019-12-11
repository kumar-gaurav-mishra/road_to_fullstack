const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/campgrounds', { useNewUrlParser: true, useUnifiedTopology: true });
const CampGrounds = require('./models/campground');
const Comments = require('./models/comments');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
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
    let camp = await CampGrounds.findOne({ _id: req.params.id }).populate('comments');
    console.log(camp);
    res.render('show.ejs', { camp });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
app.get('/campgrounds/:id/comments/new', async (req, res) => {
  try {
    let camp = await CampGrounds.findById(req.params.id);
    console.log(camp);
    res.render('comments_new.ejs', { camp });
  } catch (err) {
    res.send(err);
  }
});
app.post('/campgrounds/:id/comments', async (req, res) => {
  try {
    let camp = await CampGrounds.findById(req.params.id);
    let newComment = new Comments(req.body);
    let comment = await newComment.save();
    camp.comments.push(comment);
    await camp.save(camp);
    res.redirect('/campgrounds/' + req.params.id);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
app.listen(4000, () => console.log(`Express server is running at http://localhost:4000`));
