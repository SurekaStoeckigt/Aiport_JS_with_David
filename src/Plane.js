 function Plane(){
   
 };
  // this.flying = true
  // this.weather = weather


Plane.prototype.land = function(airport) {
  // this.flying = false;
  var this_airport = airport;
  this_airport._landed.push(this)
};

// Plane.prototype.takeoff = function(airport) {
//   if (this.weather.storm == true) { throw new Error("Stormy")}
//   this.flying = true;
//   this._airport = null;
// };
//
// Plane.prototype.update_weather = function(weather) {
//   this.weather = weather
// };
