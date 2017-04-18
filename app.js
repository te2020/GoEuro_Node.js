var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


var params={
  roundTrip: false,
  airportToAirport: false,
  locationsOutsideEurope: false,
  searchId: '427533737',
  departurePosition: '376217',
  arrivalPosition: '388743',
  departureDate: '2017-01-11T00:00:00.000+01:00',
  passengers: { adults: 1, children: 0, infants: 0 },
  userInfo: { userLocale: 'en', userCurrency: 'EUR' },
  searchModes: { train: [{}] }
};

//train,car,bus, flight,train
/*


 GoEuroClient.search(params)
 .then((response) => {
 GoEuroClient.flights()
 .then(flights => console.log(flights));

 GoEuroClient.trains()
 .then(trains => console.log(trains));

 GoEuroClient.buses()
 .then(buses => console.log(buses));
 })
 .catch((error) => console.log(error));

 // Get buses by search_id

GoEuroClient
    .trains({ search_id: "427458980" })
    .then(flights => console.log(flights))
.catch(error => console.log(error));
 */
