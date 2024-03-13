require('dotenv').config();
const express = require('express');
const  sequelize = require('./db');
const PORT = process.env.PORT || 5000;

const app = express();

//Подключаемся к базе данных
const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Соединение с БД было успешно установлено')
      } catch (e) {
        console.log('Невозможно выполнить подключение к БД: ', e)
      }
}
app.listen(PORT, () => console.log("Server started on port:" + PORT));