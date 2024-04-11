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
async function FindDangerIndex(){
    const inputFindId= prompt("Please enter the ID of the desired Character ")
    const findId= parseInt(inputFindId)
    const foundChar=await Char.findOne({id:findId})
    
    if (foundChar==null){
        console.log("NO CHAR FOUND")
        return
    }
    let dangerIndex=0
    for (let i=0 ;i< foundChar.LocationsVisited.length;i++){
        dangerIndex+=foundChar.LocationsVisited[i]
    }
    console.log("The danger index for " + foundChar.name +" is "+dangerIndex)
}
FindDangerIndex()
