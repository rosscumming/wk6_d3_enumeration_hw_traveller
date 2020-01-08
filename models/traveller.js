const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
 const journeyStartLocation = this.journeys.map((locations) => { 
   return locations.startLocation})
 return journeyStartLocation;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeyEndLocation = this.journeys.map((locations) => { 
    return locations.endLocation})
  return journeyEndLocation;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeyByTransport = this.journeys.filter((journey) => {
    return journey.transport === transport});
  return journeyByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeyByMinDistance = this.journeys.filter((length) => {
    return length.distance > minDistance;
})
  return journeyByMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
