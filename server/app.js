const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const index = require('./routes/index')
const admin = require('./routes/admin')
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose")
var cors = require('koa-cors');

// error handler
onerror(app)
app.use(cors());

const mongoDB = 'mongodb://127.0.0.1/shopping_web';
mongoose.connect(mongoDB,{useCreateIndex: true,useUnifiedTopology: true,useNewUrlParser: true,autoIndex:false});

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(admin.routes(), admin.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
