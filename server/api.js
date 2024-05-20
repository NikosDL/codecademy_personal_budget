const express = require('express');
const apiRouter = express.Router();

const {
    envelopeArray, 
    createNewEnvelope, 
    removeEnvelope, 
    findEnvelopeById,
    addMoney, 
    removeMoney, 
  } = require("./db.js");

// TODO: Error handling!!

// Middleware to find a specific envelope by Id. Appends the envelope object from the envelopeArray to the request body.
apiRouter.use('/envelopes/:envelopeId', (req, res, next) => {
    const foundEnvelope = findEnvelopeById(req.params.envelopeId);
    req.foundEnvelope = foundEnvelope;
    next();
});

// Route to get all envelopes
apiRouter.get('/envelopes', (req, res, next) => {
    console.log("Get request received.");
    res.send(envelopeArray);
});

// Route to get a specific envelope
apiRouter.get('/envelopes/:envelopeId', (req, res, next) => {
    console.log("Get request received.");
    res.send(req.foundEnvelope);
});

// Route for updating the money in or the name of an envelope. The amount to be added/removed or the new name is in the req.query.
// req.query has the following accepted fields: name, func (add/remove), amount.
// Sends back the updated envelope with Status 200.
// TODO: Create better logic to differentiate between change money and change name requests.
apiRouter.put('/envelopes/:envelopeId', (req, res, next) => {
    if (req.query.amount && req.query.func) {
        const amount = Number(req.query.amount);
        if (req.query.func === "add") {
            req.foundEnvelope.money += amount;
        } else if (req.query.func === 'remove') {
            req.foundEnvelope.money -= amount;
        };
    } else if (req.query.name) {
        const updatedName = req.query.name;
        req.foundEnvelope.name = updatedName;
    };
    res.status(200).send(req.foundEnvelope);
});

// Route for creating a new envelope. The name of the envelope is received through the req.query. Sends back the created object.  
// TODO: Add functionality to choose initial amount
apiRouter.post('/envelopes', (req, res, next) => {
    const nameOfNewEnvelope = req.query.name;
    createNewEnvelope(nameOfNewEnvelope);
    res.send(envelopeArray[envelopeArray.length -1]); 
});

// Route for deleting an envelope. Sends back a status 200 upon successful deletion.
apiRouter.delete('/envelopes/:envelopeId', (req, res, next) => {
    removeEnvelope(req.foundEnvelope.id);
    res.status(200).send();
});

apiRouter.post('/envelopes/:from/:to', (req, res, next) => {
    const sourceId = req.params.from;
    const targetId = req.params.to;
    const sourceEnvelope = findEnvelopeById(sourceId);
    const targetEnvelope = findEnvelopeById(targetId);
    const amount = Number(req.query.amount);

    sourceEnvelope.money -= amount;
    targetEnvelope.money += amount;

    res.status(200).send();
});

module.exports = apiRouter;

/* Route Testing with Postman:
GET     |   /envelopes                  OK
GET     |   envelopes/:envelopeId       OK
POST    |   /envelopes                  OK
POST    |   /envelopes/:from/:to        OK
PUT     |   /envelopes/:envelopeId      OK
DELETE  |   /envelopes/:envelopeId      OK
*/