function Weather(weatherForecast = "sunny"){

this._weatherForecast = weatherForecast;



Weather.prototype.forecast = function(){
    return this._weatherForecast
  }

};
