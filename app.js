const express = require('express')
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
	console.log("Hello, World");
});


app.listen(port, 
	console.log(`App is listening on port ${port}.`)
);
