const {Router} = require('express');
const router = Router();
const {renderIndex, renderCalculate} = require('../controllers/entries.controller');

router.get('/', renderIndex);
router.post('/', renderCalculate);

module.exports = router;