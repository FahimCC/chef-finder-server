const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const chefs = require('./data/chefs.json');

app.get('/', (req, res) => {
	res.send('Welcome to Chef Finder Server...!!!');
});

app.get('/chefs', (req, res) => {
	res.send(chefs);
});

app.listen(5000, () => {
	console.log('Chef Finder Server is running on port', port);
});
