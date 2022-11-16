#!/use/bin/env node

import { roll } from './lib/roll.js';
import minimst from "minimist";
import express, { application } from "express";

const args = minimist(process.argv.slice(2));

const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.staus(404).send('404 NOT FOUND');
});

app.get('/app/', (req, res) => {
    res.status(200).send('200 OK');
});

app.get('/app/roll/', (req, res) => {
    res.send(roll(6,2,1));
});

app.get('/app/roll/:sides/:dice/', (req, res) => {
    res.send(roll(sides, dice, 1));
});

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    res.send(roll(sides, dice, rolls));
});


