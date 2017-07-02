let express = require('express');
let router = express.Router();

let InterestCtrl = require('../../src/interest/InterestController');

router.post('/result', function (req, res, next) {
    setTimeout(function () {
        InterestCtrl.index(req, res);
    }, 1000);
});

module.exports = router;
