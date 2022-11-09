const mongoose = require('mongoose');


async function startDB(){
    await mongoose.connect('mongodb://localhost/rocketseat');
}

module.exports = { startDB };