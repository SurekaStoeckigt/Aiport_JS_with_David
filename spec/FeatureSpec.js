'use strict';

describe('', function() {
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

});
