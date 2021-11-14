const path = require('path');
const express = require('express');
const session = require('express-session');
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars');
const routes = require('./controllers');
require('dotenv').config();

const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({  });

const sess = {
  secret: process.env.SECRET,
  cookie: { maxAge : 360000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', exphbs({ extname: 'handlebars', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/', handlebars: allowInsecurePrototypeAccess(Handlebars) }))
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});