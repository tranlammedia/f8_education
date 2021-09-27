const Courses = require('../models/Course.js')

class SiteController {
    //[GET] home
    home(req, res) {
        // res.render('home');
        Courses.find({}, function(err, courses) {
            if(!err) {
                res.json(courses)
            } else res.status(400).json({ error: 'message' })
        })
    }

    //[GET] search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
