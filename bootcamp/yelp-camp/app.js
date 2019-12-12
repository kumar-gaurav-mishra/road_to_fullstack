const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/campgrounds', { useNewUrlParser: true, useUnifiedTopology: true });
const CampGrounds = require('./models/campground');
const Comments = require('./models/comments');
const User = require('./models/users');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
//Passport Configuration Start
app.use(
  require('express-session')({
    secret: 'Bazuka is my game, kumar is my name',
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//Passport Configuration End
function isLogin(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
}
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});
app.get('/', isLogin, async (req, res) => {
  res.render('landing.ejs');
});
app.get('/campgrounds', isLogin, async (req, res) => {
  const campGrounds = await CampGrounds.find();
  res.render('index.ejs', { campGrounds });
});
app.post('/campgrounds', isLogin, async (req, res) => {
  try {
    const campGrounds = new CampGrounds(req.body);
    await campGrounds.save();
    res.redirect('/campgrounds/new');
  } catch (err) {
    console.log(err);
    res.redirect('/campgrounds/new');
  }
});
app.get('/campgrounds/new', isLogin, async (req, res) => {
  res.render('new.ejs');
});
app.get('/campgrounds/:id', isLogin, async (req, res) => {
  try {
    let camp = await CampGrounds.findOne({ _id: req.params.id }).populate('comments');
    console.log(camp);
    res.render('show.ejs', { camp });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
app.get('/campgrounds/:id/comments/new', isLogin, async (req, res) => {
  try {
    let camp = await CampGrounds.findById(req.params.id);
    console.log(camp);
    res.render('comments_new.ejs', { camp });
  } catch (err) {
    res.send(err);
  }
});
app.post('/campgrounds/:id/comments', isLogin, async (req, res) => {
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

app.get('/register', async (req, res) => {
  res.render('register');
});
app.post('/register', async (req, res) => {
  try {
    let user = new User({ username: req.body.username });
    await User.register(user, req.body.password);
    return passport.authenticate('local')(req, res, () => {
      res.redirect('/campgrounds');
    });
  } catch (err) {
    console.log(err);
    res.redirect('/register');
  }
});

app.get('/login', async (req, res) => {
  res.render('login');
});
app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/campgrounds',
    failureRedirect: '/login'
  }),
  async (req, res) => {}
);
app.get('/logout', isLogin, async (req, res) => {
  req.logout();
  res.redirect('/');
});
app.listen(4000, () => console.log(`Express server is running at http://localhost:4000`));
