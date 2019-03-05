describe('Weather', function() {
  var weather
  var condition



  it('is stormy when condition is 99', function() {
    condition = 99
    weather = new Weather(condition);
    expect(weather.storm()).toBe(true)
  });

  it('is stormy when condition is 1', function() {
    condition = 1
    weather = new Weather(condition);
    expect(weather.storm()).toBe(false)
  });

  it('is stormy when condition is 10', function() {
    condition = 10
    weather = new Weather(condition);
    expect(weather.storm()).toBe(false)
  });

});
