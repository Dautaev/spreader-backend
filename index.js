const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(express.json());
app.use(cors())


mongoose
.connect(
    process.env.SERVER
    )
.then(() => console.log('ВЫ ПОДКЛЮЧИЛИСЬ К СЕРВЕРУ MongoDB'))
.catch(() => console.log('ОШИБКА ПОДКЛЮЧЕНИЯ К СЕРВЕРУ MongoDB'))

app.listen(process.env.PORT,  (req, res) => {
    console.log('СЕРВЕР ЗАПУЩЕН')
})