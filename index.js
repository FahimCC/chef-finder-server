const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.get('/', (req, res) => {
	res.send('Welcome to Chef Finder Server');
});

app.listen(5000, () => {
	console.log('Chef Finder Server is running on port', port);
});
