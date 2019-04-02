'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;

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
    // expect(airport._weather).toEqual("sunny")
    // expect(weather_obj.forecast()).toHaveBeenCalled()
  })
});
