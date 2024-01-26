import mongoose from "mongoose";
import {Location, Char} from "./Schemas";
import promptSync from 'prompt-sync'

const prompt = promptSync()

const DB_URL="mongodb://127.0.0.1:27017/bucket-list"
async function main(){
    await mongoose.connect(DB_URL)
    console.log("connection")
}

async function DeleteFunction(){
    const inputDeleteId= prompt("Please enter the ID of the deleted Location")
    const deleteId= parseInt(inputDeleteId)
    await Location.deleteOne({id:deleteId})
        }
    
main()
DeleteFunction()
