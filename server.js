#!/use/bin/env node

import { roll } from './lib/roll.js';
import minimist from "minimist";
import express from "express";

const args = minimist(process.argv.slice(2));

const app = express();
app.use(express.urlencoded({extended: true}));

const port = args.port || 5000;

app.get('*', (req, res) => {
    res.staus(404).send('404 NOT FOUND');
});

app.get('/app/', (req, res) => {
    res.status(200).send('200 OK');
});

app.get('/app/roll/', (req, res) => {
    res.send(roll(6,2,1));
});

app.get('/app/roll/:sides/', (req, res) => {
    const sides = parseInt(req.params.sides)
    res.send(roll(sides, 2, 1));
});

app.get('/app/roll/:sides/:dice/', (req, res) => {
    const sides = parseInt(req.params.sides)
    const dice = parseInt(req.params.dice)
    res.send(roll(sides, dice, 1));
});

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    const sides = parseInt(req.params.sides)
    const dice = parseInt(req.params.dice)
    const rolls = parseInt(req.params.rolls)
    res.send(roll(sides, dice, rolls));
});

app.listen(port);

