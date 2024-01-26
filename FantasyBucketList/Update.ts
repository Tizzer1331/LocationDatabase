import mongoose from "mongoose";
import {Location, Char} from "./Schemas";
import promptSync from 'prompt-sync'

const prompt = promptSync()

const DB_URL="mongodb://127.0.0.1:27017/bucket-list"
async function main(){
    await mongoose.connect(DB_URL)
    console.log("connection")
}
main()

async function UpdateFunction(){
    const inputUpdateId= prompt("Please enter the ID of the deleted Location")
    const updateId= parseInt(inputUpdateId)
    console.log(await Location.find({id:updateId}))
    const inputUpdateDesc= prompt("Please enter the new Description")
    const updateDesc= (inputUpdateDesc)
    await Location.updateOne(
        {id:updateId},
        {desc:updateDesc}
        )
    

        }
UpdateFunction()