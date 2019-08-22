'use strict';

describe('Thermostat', function() {

    var thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();
    });

    it('starts at 20 degrees', function() {
        expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('increases in temperature with up()', function() {
        thermostat.up();
        expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('decreases in temperature with down()', function() {
        thermostat.down();
        expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('has a minimum temperature of 10', function() {
        for(var i =0; i<11; i++) {
          thermostat.down();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it('has power saving mode on by default', function() {
        expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('is able to switch off power saving mode', function() {
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });
});
