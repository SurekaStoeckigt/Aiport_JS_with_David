 function Plane(state = "landed"){
  this._requested = "none"
  this._location = null;
  this._state = state;
 // };
//
//   // this.flying = true
//   // this.weather = weather
  Plane.prototype.set_request = function(action) {
    if ((this._state === "landed" && action === "land") || (this._state === "flying" && action === "take off")){
      this._requested = "none"
    } else {
      this._requested = action
    };
  };
//
Plane.prototype.get_request = function(){
  return this._requested
}

Plane.prototype.allow = function(){
  if (this._requested == "land") {
    this._state = "landed"
  } else if (this._requested == "take off"){
    this._state = "flying"
  } else {
  }
}
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
