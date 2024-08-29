const express = require('express')
const mongoose = require('mongoose')
//const cors=require('cors')
const studentRouter = require('./routes/students')

//below is the cloud db
const url = 'mongodb+srv://guntisamhitha16:8985080910@merncrud.pxurr.mongodb.net/?retryWrites=true&w=majority&appName=MERNCRUD';
//const url = 'mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/cbitit1?replicaSet=m101';
//the below one is the first url used
//const url = 'mongodb://127.0.0.1:27017/CBIT'
const app = express()
mongoose.connect(url)
const con = mongoose.connection


con.on('open', () =>
{
console.log('connected...')
})
//app.use(cors())
app.use(express.json())

app.use('/students',studentRouter)
app.listen(9000, () =>
{
console.log('Server started')
})
