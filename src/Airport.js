function Airport(weather = new Weather()) {
   this._weather = weather;
   this._capacity = 20;
   this._planesInAirport = []

   Airport.prototype.land = function(plane){
     console.log(this._weather);
     if (this._weather.forecast() === "sunny" && this._planesInAirport.length < this._capacity){
       this._planesInAirport.push(plane)
       plane.allow()
     }
     return this._planesInAirport
   }
};
// Airport.prototype.planes = function(){ airport;
