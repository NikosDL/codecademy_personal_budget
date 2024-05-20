const express = require('express')
const app = express();
// const bodyParser = require('body-parser');

module.exports = app;

console.log(process.env.PORT);
const port = process.env.PORT || 4000;

// app.use(bodyParser.json);

const apiRouter = require('./server/api.js');
app.use('/', apiRouter);
app.use('/envelopes', apiRouter);
app.use('/envelopes/:envelopeId', apiRouter);

app.listen(port, () => {
	console.log(`App is listening on port ${port}.`)
	}
);
