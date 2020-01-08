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
    const distanceOfAllTravelled = this.journeys.map((journey) => {
      return journey.distance;
    })
    return distanceOfAllTravelled.reduce((totalDistance, currentValue) => {
      return totalDistance + currentValue
    }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {

  const modesOfTransport = this.journeys.map((journeys) => {
   return journeys.transport;
  })
   const unique = modesOfTransport.filter((transport, index, array) => {
    return array.indexOf(transport) === index;
   })

   return unique;


   //used the set and spread syntax originally, but decided to go back and try doing it with filter and map instead.
  // return [...new Set(this.journeys.map(mode => mode.transport))];
};


module.exports = Traveller;
