const db = require('./database')

const seedJobs = () => {
  db.prepare('CREATE TABLE jobs ( id INTEGER PRIMARY KEY AUTOINCREMENT, images TEXT, type TEXT, availability TEXT, startTime TEXT, endTime TEXT, pickUpPointName TEXT, pickUpPointLatitude REAL, pickUpPointLongitude REAL, dropOffPointName TEXT, dropOffPointLatitude REAL, dropOffPointLongitude REAL )').run();

  const insert = db.prepare('INSERT INTO jobs (images, type, availability, startTime, endTime, pickUpPointName, pickUpPointLatitude, pickUpPointLongitude, dropOffPointName, dropOffPointLatitude, dropOffPointLongitude) VALUES (@images, @type, @availability, @startTime, @endTime, @pickUpPointName, @pickUpPointLatitude, @pickUpPointLongitude, @dropOffPointName, @dropOffPointLatitude, @dropOffPointLongitude)');

  const insertMany = db.transaction((jobs) => {
    for (const job of jobs) insert.run(job);
  });

  insertMany([
    {
      images: '1.png;2.png;3.png;4.png',
      type: 'House Move',
      availability: '2022-09-09T00:00:00Z;2022-09-10T00:00:00Z;2022-09-12T00:00:00Z',
      startTime: '08:00',
      endTime: '18:00',
      pickUpPointName: 'Audenshaw',
      pickUpPointLatitude: 53.4708386,
      pickUpPointLongitude: -2.1454168,
      dropOffPointName: 'Hulme',
      dropOffPointLatitude: 53.4636122,
      dropOffPointLongitude: -2.255844
    },
    {
      images: '5.png;6.png;7.png',
      type: 'Bring Items',
      availability: '2022-09-05T00:00:00Z',
      startTime: '09:00',
      endTime: '21:00',
      pickUpPointName: 'Openshaw',
      pickUpPointLatitude: 53.4741302,
      pickUpPointLongitude: -2.1808599,
      dropOffPointName: 'Eccles',
      dropOffPointLatitude: 53.4782842,
      dropOffPointLongitude: -2.4050996
    },
    {
      images: '',
      type: 'Send Items',
      availability: '2022-09-07T00:00:00Z;2022-09-08T00:00:00Z',
      startTime: '12:00',
      endTime: '14:00',
      pickUpPointName: 'Salford',
      pickUpPointLatitude: 53.4916904,
      pickUpPointLongitude: -2.3231298,
      dropOffPointName: 'Rusholme',
      dropOffPointLatitude: 53.4548492,
      dropOffPointLongitude: -2.2337982
    }]);
}

module.exports = seedJobs