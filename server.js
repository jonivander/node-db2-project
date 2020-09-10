const express = require('express');
const helmet = require('helmet');
const db = require('./knex-config');
const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.send('Hello World!')
});

server.get('/cars', (req, res) => {
    db('cars')
        .then(cars => {
            if (cars) {
                res.status(200).json(cars)
            } else {
                res.status(404).json({ message: 'Cars not Found' })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: 'Error retrieving the cars',
            });
        })
});

server.post('/cars', (req, res) => {
    db('cars').insert(req.body)
        .then(car => {
            res.status(201).json(car)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: 'Error adding this car'
            });
        });
});




server.listen(7000);
