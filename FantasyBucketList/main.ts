import mongoose from "mongoose";
import {Location, Char} from "./Schemas";

const DB_URL="mongodb://127.0.0.1:27017/bucket-list"
async function main(){
    await mongoose.connect(DB_URL)
    console.log("connection")
}

async function databaseCreation(){
    let newChar= new Char({
        id: 1,
        name: "Frodo",
        LocationsVisited:[1,2,3,4,5,6,10],
        LocationDesired: 2   
    })
    console.log(newChar)
    await newChar.save()

    newChar= new Char({
        id: 2,
        name: "Samwise",
        LocationsVisited:[1,2,3,4,5,6,10],
        LocationDesired: 2   
    })
    console.log(newChar)
    await newChar.save()

     newChar= new Char({
        id: 3,
        name: "Gandalf",
        LocationsVisited:[1,3,5,6,8,9],
        LocationDesired:1 
    })

    console.log(newChar)
    await newChar.save()

      newChar= new Char({
        id: 4,
        name: "Aragorn",
        LocationsVisited:[3,5,6,7,8,9],
        LocationDesired: 9
    })
    console.log(newChar)
    await newChar.save()

     newChar =new Char({
        id: 5,
        name: "Legolas",
        LocationsVisited:[5,6,7,8,9],
        LocationDesired: 1  
    })
    console.log(newChar)
    await newChar.save()

      newChar= new Char({
        id: 6,
        name: "Gimli",
        LocationsVisited:[5,6,7,8,9],
        LocationDesired: 3
    })
    console.log(newChar)
    await newChar.save()

      newChar= new Char({
        id: 7,
        name: "Merry",
        LocationsVisited:[1,3,4,6,7,9],
        LocationDesired: 3  
    })
    console.log(newChar)
    await newChar.save()

      newChar= new Char({
        id: 8,
        name: "Pippin",
        LocationsVisited:[1,3,4,6,7,9],
        LocationDesired: 3   
    })
    console.log(newChar)
    await newChar.save()

      newChar= new Char({
        id: 9,
        name: "Boromir",
        LocationsVisited:[5,6,7],
        LocationDesired: 9
    })
    console.log(newChar)
    await newChar.save()

      newChar= new Char({
        id: 10,
        name: "Elrond",
        LocationsVisited:[2,5],
        LocationDesired: 5   
    })
    console.log(newChar)
    await newChar.save()

      newChar= new Char({
        id: 11,
        name: "Barliman Butterbur",
        LocationsVisited:[3],
        LocationDesired: 3   
    })
    console.log(newChar)
    await newChar.save()

      newChar= new Char({
        id: 12,
        name: "Sauron",
        LocationsVisited:[2],
        LocationDesired: 2   
    })
    console.log(newChar)
    await newChar.save()

      newChar= new Char({
        id: 13,
        name: "Galadriel",
        LocationsVisited:[5],
        LocationDesired: 2  
    })
    console.log(newChar)
    await newChar.save()

      newChar= new Char({
        id: 14,
        name: "Mouth of Sauron",
        LocationsVisited:[2],
        LocationDesired: 2   
    })
    console.log(newChar)
    await newChar.save()

      newChar= new Char({
        id: 15,
        name: "Saruman",
        LocationsVisited:[5],
        LocationDesired: 7  
    })
    console.log(newChar)
    await newChar.save()

      newChar= new Char({
        id: 16,
        name: "Ugluk",
        LocationsVisited:[7],
        LocationDesired: 1   
    })
    console.log(newChar)
    await newChar.save()

      newChar= new Char({
        id: 17,
        name: "Lurtz",
        LocationsVisited:[7],
        LocationDesired: 8   
    })
    console.log(newChar)
    await newChar.save()

      newChar= new Char({
        id: 18,
        name: "Haldir",
        LocationsVisited:[5,8],
        LocationDesired: 8   
    })
    console.log(newChar)
    await newChar.save()

      newChar= new Char({
        id: 19,
        name: "Theoden",
        LocationsVisited:[7,8],
        LocationDesired: 7   
    })
    console.log(newChar)
    await newChar.save()

      newChar= new Char({
        id: 20,
        name: "Eomer",
        LocationsVisited:[7,8,9],
        LocationDesired: 7   
    })
    console.log(newChar)
    await newChar.save()



    let newLocation = new Location({
        
    id: 1,
    name:"Shire",
    desc: "Home of the hobbits, quaint",
    danger: 1
    })
    console.log(newLocation)
    await newLocation.save()

    newLocation = new Location({
        id:2,
        name:"Barad-dur",
        desc:"The black tower, home of Sauron",
        danger: 9
    })
    console.log(newLocation)
    await newLocation.save()

    newLocation = new Location({
        id:3,
        name:"Prancing Pony",
        desc:"The Local pub of Bree, home of Barliman",
        danger: 2
    })
    console.log(newLocation)
    await newLocation.save()
    newLocation = new Location({
        id:4,
        name:"Barrow Downs",
        desc:"Burial Sites of the old kings of westernesse",
        danger: 4
    })
    console.log(newLocation)
    await newLocation.save()
    newLocation = new Location({
        id:5,
        name:"Rivendell",
        desc:"The Last Homely house, also known as Imladris",
        danger: 1
    })
    console.log(newLocation)
    await newLocation.save()
    newLocation = new Location({
        id:6,
        name:"Moria",
        desc:"And they Call it a mine. Final resting place of Balin",
        danger: 7
    })
    console.log(newLocation)
    await newLocation.save()
    newLocation = new Location({
        id:7,
        name:"Rohan",
        desc:"great open plains. Home of the Horse lords, the Rohirrim",
        danger: 4
    })
    console.log(newLocation)
    await newLocation.save()
    newLocation = new Location({
        id:8,
        name:"Helms Deep",
        desc:"The location of the last stand of the Rohirrim against the Uruk hai",
        danger: 7
    })
    console.log(newLocation)
    await newLocation.save()
    newLocation = new Location({
        id:9,
        name:"Minas- Tirith",
        desc:"The White tower, capital of Gondor and counterpark to the Black Tower",
        danger: 5
    })
    console.log(newLocation)
    await newLocation.save()
    newLocation = new Location({
        id:10,
        name:"Shelobs Lair",
        desc:"Delve of the great spider known as shelob, slain by Samwise",
        danger: 8
    })
    console.log(newLocation)
    await newLocation.save()

}

main()
databaseCreation()