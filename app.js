var express = require('express');
var configure = require('./server/configure');
var app = express();

// var db = mongoose.connection;

app = configure(app);
app.set('port', process.env.PORT || 3500);

app.listen(app.get('port'), function() {
	console.log('server starting at port', app.get('port'));
})