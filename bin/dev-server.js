var express = require('express')
var webpack = require('webpack')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var bodyParser = require('body-parser');

var config = require('./webpack.dev.config')

var index = require('../routes/index');
var user = require('../routes/users');
var archive = require('../routes/archive');

var app = express()
var compiler = webpack(config)

//config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config cookie
app.use(cookieParser('hunter cookie'));

//config session
app.use(session({
  store: new MongoStore({
    host: "127.0.0.1",
    port: 27017,
    db: "session"
  }),
  resave:false,
  saveUninitialized:false,
  secret: 'hunter security'
}))


var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
app.use('/public', express.static('../'))

app.use('/', index);
app.use('/user', user);
app.use('/archive', archive);

module.exports = app.listen(8080, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8080\n')
})
