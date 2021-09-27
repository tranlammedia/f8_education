const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes/index.routes.js');
const db = require('./config/db/index.js')


//Connect to DB
db.connect()
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.use(
    express.urlencoded({
        extended: true,
    }),
); // POST, gui du lieu dang Form Data
app.use(express.json()); // POST javascript (XMLHttpRequest, fetch, axios)

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
