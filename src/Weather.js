function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

var Weather = function(rand = getRandomInt(100)){
  this.day = rand
};

Weather.prototype.storm = function(){
  if (this.day >= 99) {
    return true
  } else {
    return false
  };

};
