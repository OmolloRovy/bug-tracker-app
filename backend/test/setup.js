const mongoose = require ('mongoose');
const { MongoMemoryServer} = require('mongodb-memory-server');

let mongoServer;

beforeAll(async ()=> {
    mongoServer =  await MongoMemoryServer,create();
    const mongoURI = mongoSever.geturi();
    await mongoose.connect(mongoURI);

})


afterAll(async ()=>{
    await mpngoose.disconnect();
    await mongoServer.stop();
})

afterEach (async () =>{
    cosnt collections = mongoose.connection.collections;
    for (const key in collections) {
        await collections[key].deleteMany({});
    }
})