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
		this._id = envelopeId;
		this._moneyContained = 0;
		envelopeId++;
	}

	get id() {
		return this._id;
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		if (typeof newName === "string") {
			this._name = newName;
		} else {
			console.log('Please enter a valid name.');
		}
	}

	get money() {
		return this._moneyContained;
	}

	set money(amount) {
		if (typeof amount === "number") {
			this._moneyContained = amount;
		} else {
			console.log("Please enter a valid amount of money.");
		}
	}

	addMoney(amount) {
		if (typeof amount === "number") {
			this._moneyContained += amount;
		} else {
			console.log("Please enter a valid amount of money.");
		}
	}

	removeMoney(amount) {
		if (typeof amount === "number") {
			this._moneyContained -= amount;
		} else {
			console.log("Please enter a valid amount of money.");
		}		 
	}
}

module.exports = { Envelope };