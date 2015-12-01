
var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.set('port', process.env.PORT || 1445);
var server = app.listen(app.get('port'), function() {
	console.log("CB API Reference started running on port:"+app.get('port'));	
});
