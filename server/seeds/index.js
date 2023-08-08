const seeded_data = require("./clinicalDB.clinical_data.json");
const { Data, Profile } = require('../models');
const profileSeeds = require('./profileSeeds.json');

const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/clinicalDB'
);

const db = mongoose.connection;

db.once('open', async () => {
    Data.insertMany(seeded_data).then(function() {
        console.log('Data inserted');
    });

    await Profile.deleteMany({});
    await Profile.create(profileSeeds);
    console.log('all done!');
    process.exit(0);
});



