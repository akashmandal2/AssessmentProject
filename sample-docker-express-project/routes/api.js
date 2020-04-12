const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('{ "msg":"Data from Express App"}');
});

module.exports = router;