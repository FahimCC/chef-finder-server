const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const chefs = require('./data/chefs.json');
const chef1Recipes = require('./data/chef1Recipes.json');
const chef2Recipes = require('./data/chef2Recipes.json');
const chef3Recipes = require('./data/chef3Recipes.json');
const chef4Recipes = require('./data/chef4Recipes.json');
const chef5Recipes = require('./data/chef5Recipes.json');
const chef6Recipes = require('./data/chef6Recipes.json');

app.get('/', (req, res) => {
	res.send('Welcome to Chef Finder Server...!!!');
});

app.get('/chefs', (req, res) => {
	res.send(chefs);
});
app.get('/chefs/:id', (req, res) => {
	const id = req.params.id;
	if (id == 1) {
		res.send(chef1Recipes);
	} else if (id == 2) {
		res.send(chef2Recipes);
	} else if (id == 3) {
		res.send(chef3Recipes);
	} else if (id == 4) {
		res.send(chef4Recipes);
	} else if (id == 5) {
		res.send(chef5Recipes);
	} else if (id == 6) {
		res.send(chef6Recipes);
	}
});

app.listen(5000, () => {
	console.log('Chef Finder Server is running on port', port);
});
