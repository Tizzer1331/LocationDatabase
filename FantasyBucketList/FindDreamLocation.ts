import mongoose from "mongoose";
import {Location, Char} from "./Schemas";
import promptSync from 'prompt-sync'

const prompt = promptSync()

const DB_URL="mongodb://127.0.0.1:27017/bucket-list"
async function main(){
    await mongoose.connect(DB_URL)
    console.log("connection")
}

async function FindDreamFunction(){
    const inputFindId= prompt("Please enter the ID of the desired Character ")
    const findId= parseInt(inputFindId)
    const foundChar=await Char.findOne({id:findId})
    if (foundChar==null){
        console.log("NO CHAR FOUND")
        return
    }
    console.log(foundChar)
    const dreamLocationId= foundChar.LocationDesired
    console.log(dreamLocationId)
    const dreamLocation = await Location.findOne({id:dreamLocationId})
    if (dreamLocation==null){
        console.log("NO LOCATION FOUND")
        return
    }
    console.log(foundChar.name + " Wants to visit " + dreamLocation.name)
}
main()
FindDreamFunction()