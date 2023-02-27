const { assert } = require('chai');
const { expect } = require('chai');
const alertfunction = require('../alerter/alerter');
//const {alertFailureCount} = require('../alerter/alerter');

describe('Tests for alterer', function(){
    it('alert failure count',function(){
        let alertFailureCount=0;
        alertfunction.alertInCelcius(400.5);
        alertfunction.alertInCelcius(303.6);
        alertfunction.alertInCelcius(30);
       assert.equal(alertFailureCount,0);
    });
});