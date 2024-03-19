//Name: Anushya Sivanupandian
//ID: 1224783196
//Date: Feb 18,2024

const express = require('express');
const app =express();
const port = 3000;

app.listen(port, () => console.log('App listening'));

const mongoose =require('mongoose');

mongoose.connect('mongodb+srv://anuDb:Anushya253@atlascluster.qnvtqnl.mongodb.net/').then(() =>console.log('MongoDB successful')).catch((err) => console.error(err))