function Weather(weatherForecast = "sunny"){

this._weatherForecast = weatherForecast;



Weather.prototype.forecast = function(){
  var weather_num = rand(1,10)
  if (weather_num < 8) {
    this._weatherForecast = "sunny"
  } else {
    this._weatherForecast = "stormy"
  }
    return this._weatherForecast
  }
  
};
