const axios = require('axios');
const webpack = require('webpack');
const path = require('path');
const MFS = require("memory-fs");
const ReactSSR = require('react-dom/server');

const config = require('../../build/webpack.ssr.config.js')

let serverBundle;

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('hhtp://localhost:3000/template.html')
    .then((res) => {
      resolve(res.data)
    })
    .catch(() => {
      reject();
    })
  })
}

const Module = module.constructor;

const mfs = new MFS();
const compiler = webpack(config);
compiler.outputFileSystem = mfs;

compiler.watch({}, (err, stats) => {
  if (err) {
    throw err;
  }
  stats = stats.toJson();
  stats.errors.forEach((err) => {
    console.error(err);
  })
  stats.warnings.forEach((warning) => {
    console.warn(warning);
  })

  const distPath = path.join(config.output.path, config.output.filename)
  const bundle = mfs.readFileSync(distPath,'utf-8');
  const m = new Module();
  m._compile(bundle,'server-entry.js');
  serverBundle = m.exports.default;
});

module.exports = function(app) {
  getTemplate().then((template)=>{
    app.use(ctx => {
      const res = ReactSSR.renderToString(serverBundle);
      ctx.body = template.replace('<!-- app -->',res);
    });
  })
}