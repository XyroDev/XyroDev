const express = require('express');
const { Liquid } = require('liquidjs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('Public'));


const engine = new Liquid({
  root: path.resolve(__dirname, 'Views'), 
  extname: '.liquid' 
});

app.engine('liquid', async (filePath, options, callback) => {
  try {
    const html = await engine.renderFile(filePath, options);
    callback(null, html);
  } catch (err) {
    callback(err);
  }
});

app.set('views', './Views');
app.set('view engine', 'liquid');

const routes = require('./Routes/index');
app.use('/', routes);

app.use(express.static('Public'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
