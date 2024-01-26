import {Schema,model} from 'mongoose'


const LocationSchema = new Schema({

    id:{type:Number,unique:true, required:true},
    name:String,
    desc: String,
    danger: Number

})

const CharSchema = new Schema({
    id:{type:Number,unique:true,required:true},
    name: String,
    LocationsVisited:[Number],
    LocationDesired: Number
})
const Location = model('Location', LocationSchema)
const Char = model ('Chars',CharSchema)
export {Location, Char}