TODO List - Maryam SEMLALI

## API Endpoints

#### Create a new Card:
* POST: /v1/cards

* Body parameters:
```
{
    name: "card name",
    description: "card description"
}
```

#### List all Cards:
* GET: /v1/cards

* Response example:
```
{
    "id": "gq71jg5uzd",
    "name": "card 1",
    "description": "test test"
}
```

#### Delete Card:
* DELETE: /v1/cards/:cardID

* Response example:
```
{
    "message": "Card deleted successfully!",
    "success": true
}
```
