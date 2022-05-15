require('dotenv').config();

module.exports = {
    mongoURL : process.env.MONGODB_URL,
    PORT : process.env.PORT,
    enviromentFront: process.env.ENVIROMENT_FRONT,
    enviromentBack: process.env.ENVIROMENT_BACK
}