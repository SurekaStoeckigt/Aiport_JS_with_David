'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;
  var plane_1;

  // beforeEach(function){
  //   //   airport = new Airport(weather_obj)
  //     planeMock = jasmine.createSpyObj('plane', ['set_request', 'get_request', 'allow'])
  //     weatherMock = jasmine.createSpyObj('weather', ['forecast'])
  //     spyOn(weatherMock, 'forecast').and.returnValue("sunny")
  //   //   // jasmine.spyOn(object, 'method')
  //   //   // jasmine.spyOn('')
  //   //   // weather = jasmine.createSpyObj('weather', ['forecast'])
  //   //   var weather_obj = jasmine.createSpyObj('Weather', ['forecast'])
  // });

  it('initializes with weather object', function(){
        weather = jasmine.createSpyObj('weather', ['forecast'])
        plane = jasmine.createSpyObj('plane', ['set_request', 'get_request', 'allow'])
        airport = new Airport(weather)
        airport.land(plane)
        expect(weather.forecast).toHaveBeenCalled()
  })

  it('lands plane in sunny weather', function(){
    weather = new Weather();
    spyOn(weather, 'forecast').and.returnValue("sunny")
    airport = new Airport(weather)
    plane = jasmine.createSpyObj('plane', ['set_request', 'get_request', 'allow'])
    airport.land(plane)
    expect(airport._planesInAirport.length).toEqual(1)
  })

  it('does no land plane in stormy weather', function(){
    weather = new Weather("stormy")
    spyOn(weather, 'forecast').and.returnValue("stormy")
    airport = new Airport(weather)
    plane = jasmine.createSpyObj('plane', ['set_request', 'get_request', 'allow'])
    airport.land(plane)
    expect(airport._planesInAirport.length).toEqual(0)
  })
});
