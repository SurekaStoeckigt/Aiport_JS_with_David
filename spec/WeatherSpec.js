describe('Weather', function() {
  var weather
  var condition

  condition = 99

  weather = new Weather(condition);

  it('is stormy when condition is 99', function() {
    expect(weather.storm()).toBe(true)
  });
});
