import mongoose from "mongoose";
import Todo from "./MongoDBTSI";

const DB_URL="mongodb://127.0.0.1:27017/todo-list"

const expiryDate =new Date( "2024-04-16")
const todo1 ="Buy a cake"
const todo2 ="Buy spray paint"
const todo3 ="Undercoat Miniatures"
const todo4 ="?????"
const todo5 ="Profit"

async function main(){
    await mongoose.connect(DB_URL)
    console.log("connection")
    console.log(await Todo.find())

    

    console.log("adding new todos")
    for (let i =1; i<=5; i++){
        let newTodoDescription=""
        if (i ===1){
            newTodoDescription=todo1
        }
        else if (i ===2){
            newTodoDescription=todo2
        }
        else if (i ===3){
            newTodoDescription=todo3
        }
        else if (i ===4){
            newTodoDescription=todo4
        }
        else if (i ===5){
            newTodoDescription=todo5
        }
        console.log (newTodoDescription)
        
        let newTodo= new Todo({
            id: i,
            todo:newTodoDescription,
            completed:false,
            userId:1    
        })

        console.log(newTodo)
        await newTodo.save()
        console.log(await Todo.find({id:i}))
    }
    await Todo.deleteMany({completed:true})
    for (let i=1; i<=5; i++){
    await Todo.deleteOne({id:i})
    }
    const allTodos=await Todo.find()

    // allTodos.forEach((todo)=>{
    //     await Todo.updateOne(
    //         {id:todo.id},
    //         {expiryDate:expiryDate}
    //     )
        
for (const todo of allTodos) {
   await Todo.updateOne(
    {id:todo.id},
    {expiryDate:expiryDate}
   )
}
}

main()
    .catch(e => console.error(e))

