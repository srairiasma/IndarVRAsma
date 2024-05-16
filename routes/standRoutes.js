const express = require('express');
const router = express.Router();
const standController = require('../controllers/standController');

router.post('/', standController.createStands);
router.get('/', standController.getStands);
router.get('/:id', standController.getStandById);
router.put('/:id', standController.updateStand);
router.delete('/:id', standController.deleteStand);
router.patch('/update-visibility', standController.updateItemVisibility);

module.exports = router;
