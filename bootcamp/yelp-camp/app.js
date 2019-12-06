const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let campGrounds = [
  {
    name: 'Lonawala',
    image: 'https://images.unsplash.com/photo-1521206644285-8db1549e484f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80'
  },
  {
    name: 'Lonawala',
    image: 'https://images.unsplash.com/photo-1521206644285-8db1549e484f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80'
  },
  {
    name: 'Lonawala',
    image: 'https://images.unsplash.com/photo-1521206644285-8db1549e484f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80'
  },
  {
    name: 'Lonawala',
    image: 'https://images.unsplash.com/photo-1521206644285-8db1549e484f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80'
  }
];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('landing.ejs');
});
app.get('/campgrounds', (req, res) => {
  res.render('campgrounds.ejs', { campGrounds });
});
app.post('/campgrounds', (req, res) => {
  campGrounds.push(req.body);
  res.redirect('/campgrounds');
});
app.get('/campgrounds/new', (req, res) => {
  res.render('new.ejs');
});
app.listen(4000, () => console.log(`Express server is running at http://localhost:4000`));
