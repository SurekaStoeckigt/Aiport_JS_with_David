'use strict';

describe('Feature Test', function() {
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport;
  });

  it('planes can be instructed to land at airport', function() {
    plane.land(airport)
    expect(airport._landed).toContain(plane)
  });

  it('planes can be instructed to takeoff and confirm that it has taken off', function(){
    plane.land(airport)
    expect(airport._landed).toContain(plane)
    plane.takeoff()
    expect(airport._landed).not.toContain(plane)
  });

  it('prevent takeoff when weather is stormy', function() {
    plane.land(airport)
    expect(airport._landed).toContain(plane)

    airport.weather_is_stormy = true;

    plane.takeoff()
    // take-off should be prevented
    expect(airport._landed).not.toEqual([])
  });

  it('prevents landing when weather is stormy', function(){

      airport.weather_is_stormy = false;
      plane.land(airport)
      plane.takeoff()
      expect(airport._landed).toEqual([])
      airport.weather_is_stormy = true;
      plane.land(airport)
      expect(airport._landed).not.toContain(plane)
  });

});
