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

});
