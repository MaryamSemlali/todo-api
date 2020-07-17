const fs = require('fs');

const listCards = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    fs.readFile('./db/data.json', 'utf-8', function (err, data) {

        let json = JSON.parse(data);

        res.json({
            Cards: json.cards,
            success: true
        });
    });
};
module.exports.listCards = listCards;

const createCard = async function (req, res) {
    /*
    {
        name: '',
        description: ''
    }
     */
    let bodyData = req.body;

    fs.readFile('./db/data.json', 'utf-8', function (err, data) {

        // Parse json file old data
        let json = JSON.parse(data);

        // Generate an ID for the new card
        let cardID = '';
        let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 10; i++) {
            cardID += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        // Push the new card data to the cards array
        json.cards.push({
            id: cardID,
            name: bodyData.name,
            description: bodyData.description
        });

        // Write new data to the json file
        fs.writeFile('./db/data.json', JSON.stringify(json), 'utf-8', function(err) {
            if (err) throw err;

            bodyData = {
                id: cardID,
                ...bodyData
            };
            res.json({
                Card: bodyData,
                success: true
            });
        });
    });
};
module.exports.createCard = createCard;

const deleteCard = async function (req, res) {

    const { card_id } = req.params;

    fs.readFile('./db/data.json', 'utf-8', function (err, data) {

        // Parse json file old data
        let json = JSON.parse(data);

        for (let i = 0; i < json.cards.length; i++) {
            const cardElement = json.cards[i];

            if (cardElement.id === card_id) {
                json.cards.splice(i, 1);
                break;
            }
        }


        // Write new data to the json file
        fs.writeFile('./db/data.json', JSON.stringify(json), 'utf-8', function(err) {
            if (err) throw err;

            res.json({
                message: 'Card deleted successfully!',
                success: true
            });
        });
    });
};
module.exports.deleteCard = deleteCard;
