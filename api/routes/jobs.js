const express = require('express');
const router = express.Router();
const db = require("../database");

const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);  // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  ;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
};

const deg2rad = deg => deg * (Math.PI / 180);
const km2mile = km => km / 1.60934

router.get('/', function(req, res, next) {
  const rows = db.prepare('SELECT * FROM jobs').all()

  const jobs = rows.map(row => {
    const miles = Math.round(km2mile(getDistanceFromLatLonInKm(row.pickUpPointLatitude, row.pickUpPointLongitude, row.dropOffPointLatitude, row.dropOffPointLongitude)))
    const minutes = Math.round(60 * (miles / 30));
    const images = row.images.split(';').filter(x => x !== '')
    const availability = row.availability.split(';')

    return ({
      images,
      type: row.type,
      availability,
      startTime: row.startTime,
      endTime: row.endTime,
      pickUpPointName: row.pickUpPointName,
      dropOffPointName: row.dropOffPointName,
      distance: `${miles} miles`,
      travelTime: `${minutes} min drive`
    });
  })

  res.json(jobs);
});

module.exports = router;
