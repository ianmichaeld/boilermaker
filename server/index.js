const path = require('path');
const express = require('express');
const app = express();
const PORT = 1337;

// Static middleware
app.use(express.static(path.join(__dirname, '../public')))

// Routes and/or other middleware goes


app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || 'Internal Error');
});

app.listen(PORT, () => console.log(`Your app currently lives on port ${PORT}`));
