const Koa = require('koa');
const static = require('koa-static');
const serverjs = require('../dist/server.js').default;
const ReactSSR = require('react-dom/server');
const { resolve } = require('path')
const fs = require('fs');

const puppeteer = require('puppeteer');

const r = (path) => resolve(__dirname, path)

const app = new Koa();
const template = fs.readFileSync(r('../dist/template.html'),'utf8');

app.use(async (ctx, next)=>{
  if (ctx.request.url === '/img') {
    const browser = await puppeteer.launch({
      headless: false
    });
    const page = await browser.newPage();
    await page.goto("https://www.baidu.com");

    const dimensions = await page.evaluate(()=>{
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        deviceScaleFactor: window.devicePixelRatio
      };
    })

    await page.screenshot({
      path:r('../dist/bd.png')
    })
    // await browser.close();
    console.log('done...')
    ctx.body = `width: ${dimensions.width}\nheight: ${dimensions.height}\ndeviceScaleFactor: ${dimensions.deviceScaleFactor}\n
               `;
    return 
  }
  await next();
})

app.use(static(r('../dist')))

app.use(ctx => {
  const res = ReactSSR.renderToString(serverjs)
  ctx.body = template.replace('<!-- app -->',res);
});

app.listen(3001,()=>{
  console.log('server is listening 3001.')
})