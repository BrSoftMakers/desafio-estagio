require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Cors = require('cors')
const bodyParser = require('body-parser');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    app.emit('pronto')
  })
  .catch( e => console.log(e))

app.use(Cors())
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'asjkdankdnasdjsjsjsj asjakcas as',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
})


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(sessionOptions)
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal)
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
})

