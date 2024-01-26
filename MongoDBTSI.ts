import {Schema,model} from 'mongoose'


const todoSchema = new Schema({

    id: Number,
    todo:String,
    completed: Boolean,
    userId: Number,
    expiryDate: Date
})

const Todo = model('todos', todoSchema)
export default Todo


