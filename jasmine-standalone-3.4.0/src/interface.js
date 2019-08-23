
// run code as soon as the document is ready to be manipulated (ie DOM has finished loading)
$(document).ready(function() {
  // create a new thermostat
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#power-saving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  });

  $('#power-saving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  });

  // show its temperature in the h1
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

});
