require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const PORT = process.env.PORT || 5000;
const models = require('./models/models')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Working!' })
})


//Подключаемся к базе данных
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Соединение с БД было успешно установлено')
    app.listen(PORT, () => console.log("Server started on port:" + PORT));
  } catch (e) {
    console.log('Невозможно выполнить подключение к БД: ', e)
  }
}

start()