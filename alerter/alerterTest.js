let alert = require('./alerter');
let alertFailureCount = require('./alerter');

alert.alertInCelcius(400.5);
alert.alertInCelcius(303.6);
console.log(`${alertFailureCount} alerts failed.`);
console.log('All is well (maybe!)');
console.assert(alertFailureCount);