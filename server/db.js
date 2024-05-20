const { Envelope } = require('./envelopeClass.js');

const envelopeArray = [];

/* Used to create an envelope and add it to the envelopeArray. Takes in a string for the name and a number 
for the initial amount of money contained in the envelope. 
TODO: Error handling, input validation */
function createNewEnvelope(name,  initialMoney = 0) {
    let envelopeToCreate = new Envelope(name);
    envelopeToCreate.money = initialMoney;
    envelopeArray.push(envelopeToCreate);
};

// Uses the id of an envelope to remove it from the Array. If error occurrs it informs the user. 
// TODO: Better error handling
function removeEnvelope(id) {
    try {
        const foundEnvelopeIndex = envelopeArray.findIndex((envelope) => {
            return envelope.id === id;
        });
        const foundEnvelopeName = envelopeArray[foundEnvelopeIndex].name;
        envelopeArray.splice(foundEnvelopeIndex, 1);
        console.log(`Envelope "${foundEnvelopeName}" successfully deleted.`);
    } catch(e) {
        console.log("Envelope not found.");
    }
}


// Uses the id of an envelope to add money to it. If error occurrs it informs the user.
/* TODO: Better error handling, better validation of input (currently happens with the 
    setter method of the Envelope class) 
    TODO: This function is redundant - the same functionality can be achieved through class methods */
function addMoney(id, amount) {
    try {
        const foundEnvelope = envelopeArray.find((envelope) => {
            return envelope.id === id;
        });
        foundEnvelope.money += amount;
        console.log(`Successfully added \$${amount} to envelope "${foundEnvelope.name}".`);
    } catch (e) {
        console.log("Couldn't complete transaction.");
    }
}

// Uses the id of an envelope to remove money from it. If error occurrs it informs the user.
/* TODO: Better error handling, better validation of input (currently happens with the 
    setter method of the Envelope class) 
    TODO: This function is redundant - the same functionality can be achieved through class methods */
function removeMoney(id, amount) {
    try {
        const foundEnvelope = envelopeArray.find((envelope) => {
            return envelope.id === id;
        });
        foundEnvelope.money -= amount;
        console.log(`Successfully removed \$${amount} from envelope "${foundEnvelope.name}".`);
    } catch (e) {
        console.log("Couldn't complete transaction.");
    }
}

function findEnvelopeById(id) {
    try {
        const foundEnvelope = envelopeArray.find((envelope) => {
            return envelope.id == id;
        });
        return foundEnvelope;
    } catch (e) {
        console.log("Couldn't retrieve envelope.");
    }
}

module.exports = { envelopeArray, createNewEnvelope, findEnvelopeById, removeEnvelope, addMoney, removeMoney };