 function Plane(){

 };
  // this.flying = true
  // this.weather = weather


Plane.prototype.land = function(airport) {
  this_airport = airport;
  this_airport._landed.push(this)
};

Plane.prototype.takeoff = function() {
 var plane_arr = this_airport._landed
  plane_location = plane_arr.indexOf(this)
  plane_arr.splice(plane_location, 1)
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
