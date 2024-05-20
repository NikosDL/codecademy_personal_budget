const { Envelope } = require('./envelopeClass.js');

const envelopeArray = [];

// Envelope id should match index in array?
function createNewEnvelope(name,  initialMoney) {
    let envelopeToCreate = new Envelope(name);
    envelopeToCreate.money = initialMoney;
    envelopeArray.push(envelopeToCreate);
};

function removeEnvelope(id) {
    try {
        let envelopeName = envelopeArray[id].name;
        envelopeArray.splice(id, 1);
        console.log(`Envelope "${envelopeName}" deleted.`);
    } catch(e) {
        console.log("Envelope not found.");
    }
}

function addMoney(id, amount) {
    try {
        envelopeArray[id].money += amount;
    } catch (e) {
        console.log("Couldn't complete transaction.");
    }
}

function removeMoney(id, amount) {
    try {
        envelopeArray[id].money -= amount;
    } catch (e) {
        console.log("Couldn't complete transaction.");
    }
}

module.exports = { envelopeArray, createNewEnvelope, removeEnvelope, addMoney, removeMoney };