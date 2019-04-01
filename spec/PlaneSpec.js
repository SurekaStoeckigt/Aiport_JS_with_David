'use strict';

describe('Plane', function() {
  var plane

//
  beforeEach(function() {
    plane = new Plane()
  });
//
  it('tests the request to send to airport to takeoff', function() {
    plane.set_request("take off")
    expect(plane._requested).toEqual("take off")
  })

  it('tests the request to send to airport to takeoff', function() {
    plane.set_request("land")
    expect(plane._requested).toEqual("land")
  })

  });
//   it('lands at an airport', function() {
//     expect(plane.land().not.toBeUndefined()
//   });
//
  // it("Is not flying when landed", function(){
  //   plane.land(airport);
  //   expect(plane.flying).toBe(false);
  // });
//   //
//   // it('Takes off from the airport', function(){
//   //   plane.land(airport);
//   //   plane.takeoff(airport);
//   //   expect(plane.flying).toBe(true);
//   // });
//   //
//   // it('does not take off in stormy weather', function() {
//   //   var msg = "Stormy"
//   //   plane.land(airport);
//   //   plane.update_weather(weather);
//   //   expect(function() { plane.takeoff(airport) }).toThrowError(msg);
//   // });
