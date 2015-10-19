module.exports = {
  logger: require('./lib/loggerSubstitute'),
  errorFactory: require('./lib/errorFactory'),
  errorHandler: require('./lib/errorHandler'),
  uncaughtExceptionHandler: require('./lib/uncaughtExceptionHandler')
};
