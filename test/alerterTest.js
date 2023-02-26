let alertFailureCount = 0;
const { assert } = require('chai');
const alertInCelcius = require('../alerter/alerter');

describe('Tests for alterer', function(){
    it('alert failure count',function(){
        alertFailureCount = alertInCelcius(400.5);
        alertFailureCount = alertInCelcius(303.6);
        assert.equal(alertFailureCount,2);
    })
})