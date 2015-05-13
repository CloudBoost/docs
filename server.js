
var express = require('express');
var app = express();

//var seojs = require('express-seojs');
//app.use(seojs('14f59vej5dr1mmx95pvzb9qlx'));

app.use(require('prerender-node').set('prerenderServiceUrl', 'http://localhost:1445').set('prerenderToken', '9I6PNQ4jxLzvPISvvUo7'));
app.use(express.static(__dirname));

app.set('port', process.env.PORT || 1445);

var server = app.listen(app.get('port'), function() {
	
});
