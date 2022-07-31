const app = require('./app');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const sequelize = require('./database/database');
require('./models/Asociations');
const uploadDefaultData = require('./database/default-values/upload-default-data')

async function main() {
  try {
    await sequelize.sync({ force: true })
    console.log('Connection to database has been established successfully.');
    uploadDefaultData();
    const server = app.listen(PORT, () => {
      console.log(`Server on PORT: ${PORT}`);
    });
    server.on('error', err => console.log('Error en el server: ' + err));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();