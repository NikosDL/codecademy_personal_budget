/* Creates an envelope class for easily creating budget envelopes. The constructor requires a
string argument for the envelope's name. The envelope is empty at first. Each envelope created 
is automatically assigned an id.

Object properties: name (private, string), moneyContained (private, double), id (private, number)
Object methods: getId, getName, setName, getMoney, setMoney, addMoney, removeMoney
*/

// Global num representing the id of the next object to be created. Gets incremented every time 
// a new object is created.
let envelopeId = 1;

class Envelope {

	constructor(envName) {
		this._name = envName;
		envelopeId++;
	}

	_id = envelopeId;
	_moneyContained = 0;

	getId() {
		return this._id;
	}

	getName() {
		return this._name;
	}

	setName(newName) {
		if (typeof newName === "String") {
			this._name = newName;
		} else {
			alert('Please enter a valid name.');
		}
	}

	getMoney() {
		return this._moneyContained;
	}

	setMoney(amount) {
		if (typeof amount === "number") {
			this._moneyContained = amount;
		} else {
			alert("Please enter a valid amount of money.");
		}
	}

	addMoney(amount) {
		if (typeof amount === "number") {
			this._moneyContained += amount;
		} else {
			alert("Please enter a valid amount of money.");
		}
	}

	removeMoney(amount) {
		if (typeof amount === "number") {
			this._moneyContained -= amount;
		} else {
			alert("Please enter a valid amount of money.");
		}		 
	}
}

module.exports = Envelope;