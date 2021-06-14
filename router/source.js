var express = require('express');
var router = express.Router();

router.get('/example1.mid', function(req, res, next) {
    res.sendFile(__dirname + '/example1.mid');
});
router.get('/mnzj.mid', function(req, res, next) {
    res.sendFile(__dirname + '/mnzj.mid');
});
router.get('/merryc.mid', function(req, res, next) {
    res.sendFile(__dirname + '/merryc.mid');
});


module.exports = router;