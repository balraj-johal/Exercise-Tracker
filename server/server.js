const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

const uri = "mongodb+srv://balraj:ARistole%2312@cluster0-02qdg.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MONGODB ACCESED ! .. 4 ')
})
connection.once('error', () => {
  console.log('ERR')
})

const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')
app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})