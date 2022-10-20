(async () => {
    const database = require('./db.js');
    const Vehicle = require('./vehicle.js');
 
    try {
        const result = await database.sync();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})();