'use strict';

describe('Plane', function() {
  var plane;

//
  // beforeEach(function() {
  //   plane = new Plane()
  // });
//
  it('default state is landed', function() {
    plane = new Plane()
    expect(plane._state).toEqual("landed")
  })

  it('tests the request to send to airport to takeoff', function() {
    plane = new Plane()
    plane.set_request("take off")
    expect(plane._requested).toEqual("take off")
  })

  it('tests the request to send to airport to land', function() {
    plane = new Plane("flying")
    plane.set_request("land")
    expect(plane._requested).toEqual("land")
  })

  it('tests the request to send to airport to land', function() {
    plane = new Plane("flying")
    plane.set_request("land")
    expect(plane._requested).toEqual("land")
  })

  it('only accepts valid requests', function(){
    plane = new Plane()
    plane.set_request("land")
    expect(plane.get_request()).toEqual("none")
  });

  it('only accepts valid requests', function(){
    plane = new Plane()
    plane.set_request("take off")
    expect(plane.get_request()).toEqual("take off")
  });

  it('only accepts valid requests', function(){
    plane = new Plane("flying")
    plane.set_request("take off")
    expect(plane.get_request()).toEqual("none")
  });

  it('only accepts valid requests', function(){
    plane = new Plane("flying")
    plane.set_request("land")
    expect(plane.get_request()).toEqual("land")
  });

  it('allows plane to change state once a valid request is made', function(){
    plane = new Plane(); //state == landed
    plane.set_request("take off")
    plane.allow()
    expect(plane._state).toEqual("flying")
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
