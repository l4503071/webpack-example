const Koa = require('koa');
const static = require('koa-static');
const serverjs = require('../dist/server.js').default;
const ReactSSR = require('react-dom/server');
const { resolve } = require('path')
const fs = require('fs');

const r = (path) => resolve(__dirname, path)

const app = new Koa();
const template = fs.readFileSync(r('../dist/index.html'),'utf8');

app.use(static(r('../dist')))

app.use(ctx => {
  const res = ReactSSR.renderToString(serverjs)
  ctx.body = template.replace('<app></app>',res);
});

app.listen(3000,()=>{
  console.log('server is listening 30000.')
})