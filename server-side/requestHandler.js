import todoSchema from './models/todo.model.js'

export async function addData(req,res) {
    const {task}=req.body
    // console.log(task);
    todoSchema.create({task}).then(()=>{
        res.status(201).send("Successfully Added")

    }).catch((error)=>{
       res.status(404).send(error)
        
    })
}

export async function displayData(req,res) {
   try {
    const data = await todoSchema.find()
    res.status(200).send(data)
   } catch (error) {
        res.status(404).send(error)
   } 
}

export async function deleteData(req,res) {
    const {_id}=req.params
    await todoSchema.deleteOne({_id}).then(()=>{
        res.status(201).send("Successfully deleted")
    }).catch((error)=>{
       res.status(404).send(error)

        
    })
    
}