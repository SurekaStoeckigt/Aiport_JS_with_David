 function Plane(){
  this._requested = ""
  this._location = "";
//  };
//
//   // this.flying = true
//   // this.weather = weather
  Plane.prototype.set_request = function(action) {
    this._requested = action
  };
//
// Plane.prototype.land = function(airport) {
//   this.location = airport;
//
// if (this.location.weather_is_stormy) {
//   console.log("Bad Weather! No landing.")
// } else {
//   var plane_arr = this.location._landed
//   this.location._landed.push(this)
//   }
// };
//
// Plane.prototype.takeoff = function() {
//   console.log(this.location)
//   if (this.location.weather_is_stormy) {
//     console.log("Bad Weather! No takeoff.")
//   } else {
//     var plane_arr = this.location._landed
//     plane_location = plane_arr.indexOf(this)
//     plane_arr.splice(plane_location, 1)
//   }
// };
//
// // Plane.prototype.takeoff = function(airport) {
// //   if (this.weather.storm == true) { throw new Error("Stormy")}
// //   this.flying = true;
// //   this._airport = null;
// // };
// //
// // Plane.prototype.update_weather = function(weather) {
// //   this.weather = weather
};
