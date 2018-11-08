import express from 'express';
import Passenger from '../models/passengerModel';
const passengerRouter = express.Router();
passengerRouter.route('/')
    .get((req, res) => {
        Passenger.find({}, (err, passengers) => {
            res.json(passengers)
        })
    })
    .post((req, res) => {
        let passenger = new Passenger(req.body);
        passenger.save();
        res.status(201).send(passenger)
    })


    passengerRouter.route('/:passengerId')
    .get((req, res) => {
        Passenger.findById(req.params.passengerId, (err, passenger) => {
            res.json(passenger)
        })
    })
    .put((req,res) => {
        Passenger.findById(req.params.passengerId, (err, passenger) => {
            passenger.name = req.body.name;
            passenger.bags = req.body.bags;
            passenger.save()
            res.json(passenger)
        })
    })
    .patch((req,res)=>{
        Passenger.findById(req.params.passengerId, (err, passenger) => {
            if(req.body._id){
                delete req.body._id;
            }
            for( let p in req.body ){
                passenger[p] = req.body[p];
            }
            passenger.save();
            res.json(passenger);
        })
    })
    .delete((req,res)=>{
        Passenger.findById(req.params.passengerId, (err, passenger) => {
            passenger.remove(err => {
                if(err){
                    res.status(500).send(err)
                }
                else{
                    res.status(204).send('removed')
                }
            })
        })
    })
export default passengerRouter;