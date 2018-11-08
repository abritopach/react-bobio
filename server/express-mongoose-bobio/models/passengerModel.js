import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const passengerModel = new Schema({
    name: { type: String },
    bags: { type: Number }
})
export default mongoose.model('passenger', passengerModel)