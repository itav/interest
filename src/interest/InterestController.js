const models = require('../../src/interest/model/InterestModel');

exports.index = function index(req, res) {

    console.log(req.body);
    res.header('Access-Control-Allow-Origin', '*');
    const model = Object.create(models.InterestModel);
    model
        .setRate(12.44)
        .setAmount(3455)
        .setDays(124)
        .setTotalInterest(34.45);

    res.json(model);
};

