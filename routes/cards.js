let express     = require('express'),
    router      = express.Router();

let cardsController = require('../controllers/cardsController');

router.get('/cards', cardsController.listCards);
router.post('/cards', cardsController.createCard);
router.delete('/cards/:card_id', cardsController.deleteCard);

module.exports = router;
