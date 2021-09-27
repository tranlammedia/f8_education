const newsRouter = require('./news.routes.js');
const siteRouter = require('./site.routes');

function route(app) {
    // app.get('/news', (req, res) => {
    //     res.render('news')
    // });
    app.use('/news', newsRouter);

    // app.get('/', (req, res) => {
    //     res.render('home')
    // });
    // app.get('/search', (req, res) => {
    // // console.log(req.query.q)
    //     res.render('search')
    // });
    app.use('/', siteRouter);

    app.post('/search', (req, res) => {
        // console.log(req.body)
        res.send('ket qua');
    });
}

module.exports = route;
