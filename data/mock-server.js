'use strict';

const express = require('express');
const app  = express();
const cors = require('cors');

const dashboardRoutes = require('./dashboard');

app.use(cors({
  origin: '*',
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['conten-Type', 'Authorization']
}));

// port
let NODE_PORT = process.env.PORT || 4000;

app.use('/', dashboardRoutes);

app.listen(NODE_PORT, function() {
  console.log('mock server start in '+ NODE_PORT +' port');
});
