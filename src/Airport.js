function Airport(weather = new Weather()) {
   this._weather = weather._weatherForecast;
   this._capacity = 20;
   this._planesInAirport = []

   Airport.prototype.land = function(plane){

   }
};
// Airport.prototype.planes = function(){ airport;
